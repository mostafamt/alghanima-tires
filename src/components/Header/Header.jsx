import styles from "./header.module.scss";
import logo from "../../assets/e6cac6a5711a97cd6d409ce1ab9edf00ca48e603.png";

const navLinks = [
  { label: "الرئيسية", href: "#", active: true },
  { label: "فئات الإطارات", href: "#" },
  { label: "العلامات التجارية", href: "#" },
  { label: "لماذا الغنيمه؟", href: "#" },
  { label: "تواصل معنا", href: "#" },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="الغنيمه" />
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

      <button type="button" className={styles.cta}>
        اطلب عرض سعر
      </button>
    </header>
  );
};

export default Header;
