import styles from "./hero.module.scss";
import logo from "../../assets/e6cac6a5711a97cd6d409ce1ab9edf00ca48e603.png";
import heroImage from "../../assets/e815bdf3173773aa8d7dd178fa1d5e89c7e2eb9d.jpg";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.media}>
        <img src={heroImage} alt="إطارات الغنيمه" />
      </div>

      <div className={styles.content}>
        <img className={styles.logo} src={logo} alt="الغنيمه" />

        <h1 className={styles.title}>شريككم المعتمد في الإطارات</h1>
        <h2 className={styles.subtitle}>ثقة على كل طريق</h2>

        <p className={styles.description}>
          الوكيل المعتمد لإطارات DRC & Mitas — بيع جملة وقطاعي وتوزيع لمختلف
          فئات المركبات والمعدات على مستوى الجمهورية.
        </p>

        <div className={styles.actions}>
          <button type="button" className={styles.primary}>
            اطلب عرض سعر
          </button>
          <button type="button" className={styles.secondary}>
            استفسر الآن
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
