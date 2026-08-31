import styles from "./quoteRequest.module.scss";
import warehouse from "../../assets/about-warehouse-master.png";

const reasons = [
  "وكيل معتمد لإطارات DRC & Mitas",
  "بيع جملة وقطاعي بأسعار تنافسية",
  "توافر مقاسات لفئات مركبات متعددة",
  "توزيع يغطي أنحاء الجمهورية",
];

const QuoteRequest = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <div
          className={styles.info}
          style={{ backgroundImage: `url(${warehouse})` }}
        >
          <div className={styles.overlay} />

          <div className={styles.infoContent}>
            <h2 className={styles.infoTitle}>لماذا الغنيمه؟</h2>

            <ul className={styles.reasons}>
              {reasons.map((reason) => (
                <li key={reason}>
                  <span className={styles.check}>✓</span>
                  {reason}
                </li>
              ))}
            </ul>

            <h3 className={styles.slogan}>ثقة على كل طريق</h3>
            <p className={styles.description}>
              اختيار مناسب لفئات متعددة من المركبات والمعدات.
            </p>
          </div>
        </div>

        <form className={styles.form}>
          <h2 className={styles.formTitle}>اطلب عرض سعر</h2>

          <label className={styles.field}>
            <span>الاسم</span>
            <input type="text" placeholder="اكتب الاسم بالكامل" />
          </label>

          <label className={styles.field}>
            <span>رقم الهاتف</span>
            <input type="tel" placeholder="مثال: 01xxxxxxxxx" />
          </label>

          <label className={styles.field}>
            <span>نوع المركبة</span>
            <div className={styles.selectWrap}>
              <select defaultValue="">
                <option value="" disabled>
                  اختر نوع المركبة
                </option>
                <option value="passenger">سيارات ملاكي</option>
                <option value="light-truck">نقل خفيف</option>
                <option value="heavy-truck">نقل ثقيل</option>
                <option value="agriculture">جرارات ومعدات زراعية</option>
              </select>
              <svg
                className={styles.chevron}
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </label>

          <label className={styles.field}>
            <span>المقاس أو الكمية المطلوبة</span>
            <textarea rows={3} placeholder="مثال: 205/55 R16 — الكمية: 4" />
          </label>

          <button type="submit" className={styles.submit}>
            إرسال الطلب
          </button>
        </form>
      </div>
    </section>
  );
};

export default QuoteRequest;
