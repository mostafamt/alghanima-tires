import { useEffect, useState } from "react";
import styles from "./hero.module.scss";
import slides from "./slides";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  return (
    <section className={styles.hero}>
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`${styles.slide} ${
            index === activeIndex ? styles.active : ""
          }`}
        >
          <img src={slide.image} alt={slide.title} />
          <div className={styles.overlay} />

          <div className={styles.content}>
            <h1 className={styles.title}>{slide.title}</h1>
            <h2 className={styles.subtitle}>{slide.highlight}</h2>
            <p className={styles.description}>{slide.description}</p>

            <button type="button" className={styles.cta}>
              {slide.ctaText}
            </button>
          </div>
        </div>
      ))}

      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowLeft}`}
        aria-label="الشريحة السابقة"
        onClick={goToPrev}
      >
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
          <path
            d="M9 1L2 8L9 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowRight}`}
        aria-label="الشريحة التالية"
        onClick={goToNext}
      >
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
          <path
            d="M1 1L8 8L1 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className={styles.dots}>
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            className={`${styles.dot} ${
              index === activeIndex ? styles.dotActive : ""
            }`}
            aria-label={`الشريحة ${index + 1}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
