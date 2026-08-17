import styles from "./coverage.module.scss";
import mapIcon from "../../assets/Egypt Distribution Map.svg";

const points = [
  {
    title: "فروع في الغربية",
    description: "تواجد محلي لخدمة العملاء ومتابعة الطلبات.",
  },
  {
    title: "توزيع على مستوى الجمهورية",
    description: "خدمة طلبات الجملة والقطاعي لمختلف المحافظات.",
  },
  {
    title: "DRC & Mitas",
    description: "مقاسات لفئات متعددة من المركبات والمعدات.",
  },
];

const Coverage = () => {
  return (
    <section className={styles.wrapper}>
      <p className={styles.eyebrow}>تغطية وتوزيع</p>
      <h2 className={styles.title}>الغنيمه أقرب لعملك في كل مكان</h2>
      <p className={styles.description}>
        فروعنا في الغربية تخدم عملاء الجملة والقطاعي، مع توزيع الإطارات
        لمختلف المحافظات على مستوى الجمهورية.
      </p>

      <div className={styles.content}>
        <div className={styles.points}>
          {points.map(({ title, description }) => (
            <div key={title} className={styles.point}>
              <h3 className={styles.pointTitle}>{title}</h3>
              <p className={styles.pointDescription}>{description}</p>
            </div>
          ))}
        </div>

        <div className={styles.mapCard}>
          <img src={mapIcon} alt="خريطة التوزيع" />
          <h3 className={styles.mapTitle}>الغربية</h3>
          <p className={styles.mapSubtitle}>مركز انطلاق لخدمة الجمهورية</p>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
