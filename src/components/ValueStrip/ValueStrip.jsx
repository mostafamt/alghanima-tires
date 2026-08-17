import styles from "./valueStrip.module.scss";

const items = [
  { title: "منتجات معتمدة", subtitle: "DRC & Mitas", color: "red" },
  { title: "توافر مقاسات", subtitle: "فئات متعددة", color: "navy" },
  { title: "توزيع سريع", subtitle: "على مستوى الجمهورية", color: "red" },
  { title: "جملة وقطاعي", subtitle: "حلول شراء مرنة", color: "navy" },
];

const ValueStrip = () => {
  return (
    <section className={styles.wrapper}>
      <ul className={styles.strip}>
        {items.map(({ title, subtitle, color }) => (
          <li key={title} className={styles.item}>
            <span className={`${styles.dot} ${styles[color]}`} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.subtitle}>{subtitle}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ValueStrip;
