import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./header.module.scss";
import logoLight from "../../assets/alghanima-logo-white.png";
import logoDark from "../../assets/alghanima-logo-dark.png";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useTheme } from "../../context/ThemeContext";
import { scrollToSection } from "../../utils/scrollToSection";

const navLinks = [
  { label: "الرئيسية", section: "home" },
  { label: "فئات الإطارات", section: "categories" },
  { label: "العلامات التجارية", section: "brands" },
  { label: "لماذا الغنيمه؟", section: "why" },
  { label: "تواصل معنا", to: "/contact" },
  { label: "عن الغنيمه", section: "about" },
];

const sectionIds = navLinks.filter((link) => link.section).map((link) => link.section);

// highlights the nav link of the section currently in view on the home page
const useActiveSection = (enabled) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    if (!enabled) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight / 3;
      let current = sectionIds[0];
      let currentTop = -Infinity;
      sectionIds.forEach((id) => {
        const top = document.getElementById(id)?.getBoundingClientRect().top;
        if (top !== undefined && top <= line && top > currentTop) {
          current = id;
          currentTop = top;
        }
      });
      setActiveSection(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [enabled]);

  return activeSection;
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const { theme } = useTheme();
  const logo = theme === "light" ? logoDark : logoLight;
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHome = pathname === "/";
  const activeSection = useActiveSection(isHome);

  const goToSection = (event, id) => {
    event.preventDefault();
    closeMenu();
    if (isHome) {
      scrollToSection(id);
      window.history.replaceState(null, "", `#${id}`);
    } else {
      // Home scrolls to the hash once it mounts
      navigate(`/#${id}`);
    }
  };

  const isActive = ({ section, to }) =>
    to ? pathname === to : isHome && activeSection === section;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="الغنيمه" className={styles.mainLogo} />
      </div>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.to ? (
                <Link
                  to={link.to}
                  className={isActive(link) ? styles.active : ""}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={`/#${link.section}`}
                  className={isActive(link) ? styles.active : ""}
                  onClick={(event) => goToSection(event, link.section)}
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.actions}>
        <ThemeToggle />
        <a
          href="/#quote"
          className={styles.cta}
          onClick={(event) => goToSection(event, "quote")}
        >
          اطلب عرض سعر
        </a>
        <button
          type="button"
          className={styles.menuToggle}
          aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
            {isMenuOpen ? (
              <path
                d="M1 1L21 15M21 1L1 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M0 1H22M0 8H22M0 15H22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div
          className={styles.backdrop}
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;
