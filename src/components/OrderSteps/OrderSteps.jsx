import styles from "./orderSteps.module.scss";

const steps = [
  { number: "01", title: "تواصل معنا", subtitle: "اتصال أو واتساب" },
  { number: "02", title: "حدد احتياجك", subtitle: "المركبة والمقاس والكمية" },
  { number: "03", title: "عرض سعر", subtitle: "سعر تنافسي حسب الطلب" },
  { number: "04", title: "تأكيد الطلب", subtitle: "تأكيد الكمية والتسليم" },
  { number: "05", title: "التوزيع", subtitle: "على مستوى الجمهورية" },
];

const OrderSteps = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>خطوات الطلب</h2>

      <div className={styles.timeline}>
        {steps.map(({ number, title, subtitle }) => (
          <div key={number} className={styles.step}>
            <span className={styles.circle}>{number}</span>
            <div className={styles.stepText}>
              <h3 className={styles.stepTitle}>{title}</h3>
              <p className={styles.stepSubtitle}>{subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrderSteps;
