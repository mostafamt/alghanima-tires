import styles from "./brands.module.scss";
import mitasLogo from "../../assets/1fd437e86e7d7025df87696bb071a7dd7fdbe80a.png";
import drcLogo from "../../assets/b8eda13e05198ac6676ff123f5d90085ec805bd5.png";

const brands = [
  {
    name: "DRC",
    logo: drcLogo,
    description: "إطارات قوية لمختلف الاستخدامات",
  },
  {
    name: "Mitas",
    logo: mitasLogo,
    description: "حلول أوروبية للمركبات والمعدات",
  },
];

const Brands = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.heading}>
        <h2 className={styles.title}>العلامات التجارية</h2>
        <span className={styles.underline} />
      </div>

      <div className={styles.cards}>
        {brands.map(({ name, logo, description }) => (
          <div key={name} className={styles.card}>
            <div className={styles.logoBox}>
              <img src={logo} alt={name} />
            </div>
            <p className={styles.description}>{description}</p>
            <a href="#" className={styles.link}>
              تعرف على المنتجات
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
