import styles from "./brandCards.module.scss";
import storyImage from "../../assets/c783f4f3de3433d1ab9644878d274e0971a5558d.jpg";

const features = [
  { title: "تغطية واسعة", subtitle: "كل الجمهورية" },
  { title: "جملة وقطاعي", subtitle: "لكل القطاعات" },
  { title: "وكيل معتمد", subtitle: "DRC & Mitas" },
];

const BrandCards = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.media}>
          <img src={storyImage} alt="عن الغنيمه" />
          <div className={styles.overlay} />

          <button type="button" className={styles.playButton} aria-label="تشغيل الفيديو">
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
              <path d="M1 1.5L18.5 12L1 22.5V1.5Z" fill="currentColor" />
            </svg>
          </button>

          <div className={styles.caption}>
            <span className={styles.captionLabel}>فيديو عن الغنيمه</span>
            <span className={styles.captionTitle}>قصة ثقة على كل طريق</span>
          </div>
        </div>

        <div className={styles.content}>
          <span className={styles.eyebrow}>عن الغنيمه</span>
          <h2 className={styles.title}>خبرة محلية ومعايير عالمية...</h2>
          <p className={styles.description}>
            نوفر حلول الإطارات للملاكي والنقل والمعدات الزراعية، من خلال بيع
            الجملة والقطاعي وتوزيع يغطي أنحاء الجمهورية.
          </p>

          <div className={styles.features}>
            {features.map(({ title, subtitle }) => (
              <div key={title} className={styles.feature}>
                <h3 className={styles.featureTitle}>{title}</h3>
                <p className={styles.featureSubtitle}>{subtitle}</p>
              </div>
            ))}
          </div>

          <button type="button" className={styles.cta}>
            شاهد قصة الغنيمه
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
              <path
                d="M7 1L1 7L7 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandCards;
