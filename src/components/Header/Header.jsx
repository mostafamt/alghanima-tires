import { useState } from "react";
import styles from "./header.module.scss";
import logoLight from "../../assets/alghanima-logo-white.png";
import logoDark from "../../assets/alghanima-logo-dark.png";
import drcLogo from "../../assets/b8eda13e05198ac6676ff123f5d90085ec805bd5.png";
import mitasLogo from "../../assets/1fd437e86e7d7025df87696bb071a7dd7fdbe80a.png";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useTheme } from "../../context/ThemeContext";

const navLinks = [
  { label: "الرئيسية", href: "#", active: true },
  { label: "فئات الإطارات", href: "#" },
  { label: "العلامات التجارية", href: "#" },
  { label: "لماذا الغنيمه؟", href: "#" },
  { label: "تواصل معنا", href: "#" },
  { label: "عن الغنيمه", href: "#" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const { theme } = useTheme();
  const logo = theme === "light" ? logoDark : logoLight;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="الغنيمه" className={styles.mainLogo} />
      </div>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
        <ul>
          {navLinks.map(({ label, href, active }) => (
            <li key={label}>
              <a
                href={href}
                className={active ? styles.active : ""}
                onClick={closeMenu}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.actions}>
        <ThemeToggle />
        <button type="button" className={styles.cta}>
          اطلب عرض سعر
        </button>
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
