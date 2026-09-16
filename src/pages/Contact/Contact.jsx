import styles from "./contact.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const WHATSAPP_NUMBER = "201005600075";

const ArrowIcon = () => (
  <svg viewBox="0 0 20 20" fill="none">
    <path
      d="M7 4L13 10L7 16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M17.6 6.32A8.86 8.86 0 0 0 3.1 16.53L2 21l4.6-1.06A8.86 8.86 0 0 0 12.02 21h.02a8.86 8.86 0 0 0 5.56-14.68ZM12.04 19.4a7.36 7.36 0 0 1-3.76-1.03l-.27-.16-2.8.65.68-2.72-.17-.28a7.4 7.4 0 1 1 6.32 3.54Zm4.06-5.54c-.22-.11-1.3-.64-1.5-.72-.2-.07-.35-.11-.5.11-.15.22-.57.72-.7.87-.13.15-.26.16-.48.05a6.1 6.1 0 0 1-1.8-1.1 6.7 6.7 0 0 1-1.24-1.55c-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.2-.68-1.65-.18-.43-.36-.37-.5-.38h-.43a.82.82 0 0 0-.6.28 2.5 2.5 0 0 0-.78 1.86c0 1.1.8 2.16.91 2.31.11.15 1.58 2.41 3.83 3.38.54.23.95.37 1.28.47.54.17 1.03.15 1.42.09.43-.06 1.3-.53 1.49-1.04.18-.51.18-.95.13-1.04-.05-.1-.2-.16-.42-.27Z"
      fill="currentColor"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M6.6 10.8c1.3 2.6 3.5 4.7 6.1 6.1l2-2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.5c0-.6.4-1 1-1h3.7c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.2 1.1l-2.5 1.4Z"
      fill="currentColor"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M14.5 8.5h2V5.4c-.35-.05-1.55-.15-2.95-.15-2.92 0-4.92 1.8-4.92 5.1V13H5.7v3.5h2.93V23h3.6v-6.5h2.82l.45-3.5h-3.27v-2.3c0-1.02.28-1.72 1.77-1.72Z"
      fill="currentColor"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
  </svg>
);

const MessengerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2C6.48 2 2 6.15 2 11.27c0 2.92 1.45 5.52 3.72 7.22V22l3.4-1.87c.91.25 1.87.39 2.88.39 5.52 0 10-4.15 10-9.27C22 6.15 17.52 2 12 2Zm1.02 12.49-2.55-2.72-4.98 2.72 5.48-5.82 2.61 2.72 4.92-2.72-5.48 5.82Z"
      fill="currentColor"
    />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M3.5 6.5 12 13l8.5-6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M12 22s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12Z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const channels = [
  {
    id: "whatsapp",
    label: "واتساب",
    description: "أسرع طريقة للرد على استفسارك",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    icon: <WhatsappIcon />,
    featured: true,
  },
  {
    id: "phone",
    label: "اتصال هاتفي",
    description: "تحدث مباشرة مع فريق المبيعات",
    // TODO: replace with real phone number
    href: "tel:+20xxxxxxxxxx",
    icon: <PhoneIcon />,
  },
  {
    id: "facebook",
    label: "فيسبوك",
    description: "تابع أحدث العروض والمنتجات",
    // TODO: replace with real Facebook page URL
    href: "#",
    icon: <FacebookIcon />,
  },
  {
    id: "instagram",
    label: "انستجرام",
    description: "صور ومحتوى من داخل الغنيمه",
    // TODO: replace with real Instagram profile URL
    href: "#",
    icon: <InstagramIcon />,
  },
  {
    id: "messenger",
    label: "ماسنجر",
    description: "راسلنا عبر فيسبوك ماسنجر",
    // TODO: replace with real m.me link
    href: "#",
    icon: <MessengerIcon />,
  },
  {
    id: "email",
    label: "البريد الإلكتروني",
    description: "للاستفسارات وطلبات الجملة",
    // TODO: replace with real email address
    href: "mailto:info@example.com",
    icon: <MailIcon />,
  },
];

const Contact = () => {
  return (
    <>
      <Header />

      <section className={styles.hero}>
        <p className={styles.eyebrow}>تواصل معنا</p>
        <h1 className={styles.title}>كل طرق التواصل مع الغنيمه</h1>
        <p className={styles.description}>
          اختر الوسيلة المناسبة لك وتواصل مع فريقنا لأي استفسار عن الإطارات
          أو طلبات الجملة والقطاعي.
        </p>
      </section>

      <section className={styles.wrapper}>
        <div className={styles.grid}>
          {channels.map(({ id, label, description, href, icon, featured }) => (
            <a
              key={id}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`${styles.card} ${featured ? styles.featured : ""}`}
            >
              <span className={styles.cardIcon}>{icon}</span>
              <span className={styles.cardBody}>
                <span className={styles.cardLabel}>{label}</span>
                <span className={styles.cardDescription}>{description}</span>
              </span>
              <span className={styles.cardArrow}>
                <ArrowIcon />
              </span>
            </a>
          ))}
        </div>

        <div className={styles.addressCard}>
          <span className={styles.addressIcon}>
            <MapPinIcon />
          </span>
          <span className={styles.addressBody}>
            <span className={styles.addressTitle}>فرع الغربية</span>
            <span className={styles.addressText}>
              مركز انطلاق التوزيع لمختلف محافظات الجمهورية
            </span>
          </span>
          {/* TODO: replace with real Google Maps link */}
          <a href="#" target="_blank" rel="noopener noreferrer" className={styles.addressLink}>
            افتح الموقع على الخريطة
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
