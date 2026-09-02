import styles from "./header.module.scss";
import logo from "../../assets/alghanima-logo-white.png";
import drcLogo from "../../assets/b8eda13e05198ac6676ff123f5d90085ec805bd5.png";
import mitasLogo from "../../assets/1fd437e86e7d7025df87696bb071a7dd7fdbe80a.png";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const navLinks = [
  { label: "الرئيسية", href: "#", active: true },
  { label: "فئات الإطارات", href: "#" },
  { label: "العلامات التجارية", href: "#" },
  { label: "لماذا الغنيمه؟", href: "#" },
  { label: "تواصل معنا", href: "#" },
  { label: "عن الغنيمه", href: "#" },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="الغنيمه" className={styles.mainLogo} />
      </div>

      <nav className={styles.nav}>
        <ul>
          {navLinks.map(({ label, href, active }) => (
            <li key={label}>
              <a href={href} className={active ? styles.active : ""}>
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
      </div>
    </header>
  );
};

export default Header;
