import styles from "./footer.module.scss";
import logo from "../../assets/e6cac6a5711a97cd6d409ce1ab9edf00ca48e603.png";
import drcLogo from "../../assets/b8eda13e05198ac6676ff123f5d90085ec805bd5.png";
import mitasLogo from "../../assets/1fd437e86e7d7025df87696bb071a7dd7fdbe80a.png";

const categories = [
  "سيارات ملاكي",
  "نقل خفيف",
  "نقل ثقيل",
  "جرارات ومعدات زراعية",
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoColumn}>
          <img className={styles.logo} src={logo} alt="الغنيمه" />
          <div className={styles.miniLogos}>
            <img src={mitasLogo} alt="Mitas" />
            <img src={drcLogo} alt="DRC" />
          </div>
        </div>

        <div className={styles.brand}>
          <h3 className={styles.brandTitle}>DRC & Mitas | الغنيمه</h3>
          <p className={styles.brandSubtitle}>
            بيع جملة وقطاعي • توزيع على مستوى الجمهورية
          </p>
        </div>

        <div className={styles.categories}>
          <h3 className={styles.categoriesTitle}>فئات الإطارات</h3>
          <ul>
            {categories.map((category) => (
              <li key={category}>
                <a href="#">{category}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {year} الغنيمه — جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
};

export default Footer;
