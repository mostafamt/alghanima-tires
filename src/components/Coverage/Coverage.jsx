import styles from "./coverage.module.scss";

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
          <svg
            className={styles.mapIcon}
            width="250"
            height="175"
            viewBox="0 0 250 175"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M61.6667 18.3333H170.833L184.167 44.9999L204.167 61.6666L189.167 81.6666L200 105L177.5 129.167L158.333 155.833H60L48.3333 127.5L51.6667 99.9999L42.5 74.1666L53.3333 48.3333L61.6667 18.3333Z"
              fill="none"
              stroke="#2b4a72"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M170.833 18.3333L225.833 45.8333L204.167 61.6666L184.167 44.9999L170.833 18.3333Z"
              fill="none"
              stroke="#2b4a72"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M92.5 56.6667C97.1024 56.6667 100.833 52.9357 100.833 48.3333C100.833 43.731 97.1024 40 92.5 40C87.8976 40 84.1667 43.731 84.1667 48.3333C84.1667 52.9357 87.8976 56.6667 92.5 56.6667Z"
              fill="#e5142e"
            />
            <path
              opacity="0.35"
              d="M92.5 63.3333C100.784 63.3333 107.5 56.6175 107.5 48.3333C107.5 40.049 100.784 33.3333 92.5 33.3333C84.2157 33.3333 77.5 40.049 77.5 48.3333C77.5 56.6175 84.2157 63.3333 92.5 63.3333Z"
              stroke="#e5142e"
              strokeWidth="3"
            />
            <path
              d="M92.5 48.3333C120.833 59.9999 137.5 75.8333 155.833 98.3333"
              stroke="#e5142e"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="7 8"
            />
            <path
              d="M92.5 48.3333C79.1667 73.3333 76.6667 98.3333 92.5 125.833"
              stroke="#e5142e"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="7 8"
            />
            <path
              d="M92.5 48.3333C131.667 41.6667 161.667 45.8333 189.167 61.6667"
              stroke="#e5142e"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="7 8"
            />
          </svg>
          <h3 className={styles.mapTitle}>الغربية</h3>
          <p className={styles.mapSubtitle}>مركز انطلاق لخدمة الجمهورية</p>
        </div>
      </div>

      <div className={styles.cta}>
        <div className={styles.ctaText}>
          <h3 className={styles.ctaTitle}>
            جاهز تختار الإطار المناسب لمركبتك؟
          </h3>
          <p className={styles.ctaDescription}>
            تواصل مع فريق الغنيمه واحصل على عرض سعر يناسب المقاس والكمية
            المطلوبة.
          </p>
        </div>

        <button type="button" className={styles.ctaButton}>
          اطلب عرض سعر الآن
        </button>
      </div>
    </section>
  );
};

export default Coverage;
