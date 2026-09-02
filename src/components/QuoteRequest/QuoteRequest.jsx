import { useEffect, useRef, useState } from "react";
import styles from "./quoteRequest.module.scss";
import warehouse from "../../assets/about-warehouse-master.png";

const reasons = [
  "وكيل معتمد لإطارات DRC & Mitas",
  "بيع جملة وقطاعي بأسعار تنافسية",
  "توافر مقاسات لفئات مركبات متعددة",
  "توزيع يغطي أنحاء الجمهورية",
];

const vehicleTypes = [
  { value: "passenger", label: "سيارات ملاكي" },
  { value: "light-truck", label: "نقل خفيف" },
  { value: "heavy-truck", label: "نقل ثقيل" },
  { value: "agriculture", label: "جرارات ومعدات زراعية" },
];

const QuoteRequest = () => {
  const [isVehicleMenuOpen, setIsVehicleMenuOpen] = useState(false);
  const [vehicleType, setVehicleType] = useState("");
  const vehicleFieldRef = useRef(null);

  useEffect(() => {
    if (!isVehicleMenuOpen) return undefined;

    const handleClickOutside = (event) => {
      if (!vehicleFieldRef.current?.contains(event.target)) {
        setIsVehicleMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsVehicleMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVehicleMenuOpen]);

  const selectedVehicleLabel = vehicleTypes.find(
    (type) => type.value === vehicleType
  )?.label;

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

          <div className={styles.field}>
            <span id="vehicle-type-label">نوع المركبة</span>
            <div className={styles.selectWrap} ref={vehicleFieldRef}>
              <button
                type="button"
                className={styles.selectTrigger}
                aria-haspopup="listbox"
                aria-expanded={isVehicleMenuOpen}
                aria-labelledby="vehicle-type-label"
                onClick={() => setIsVehicleMenuOpen((prev) => !prev)}
              >
                <span className={selectedVehicleLabel ? "" : styles.placeholder}>
                  {selectedVehicleLabel || "اختر نوع المركبة"}
                </span>
              </button>

              <svg
                className={`${styles.chevron} ${
                  isVehicleMenuOpen ? styles.chevronOpen : ""
                }`}
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

              {isVehicleMenuOpen && (
                <ul className={styles.selectOptions} role="listbox">
                  {vehicleTypes.map(({ value, label }) => (
                    <li
                      key={value}
                      role="option"
                      aria-selected={value === vehicleType}
                      className={`${styles.selectOption} ${
                        value === vehicleType ? styles.selectOptionActive : ""
                      }`}
                      onClick={() => {
                        setVehicleType(value);
                        setIsVehicleMenuOpen(false);
                      }}
                    >
                      {label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

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
