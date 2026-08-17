import styles from "./categories.module.scss";
import passenger from "../../assets/Passenger.png";
import lightTruck from "../../assets/Light Truck.png";
import heavyTruck from "../../assets/Heavy Truck.png";
import agriculture from "../../assets/Agriculture.png";

const categories = [
  { name: "سيارات ملاكي", image: passenger },
  { name: "نقل خفيف", image: lightTruck },
  { name: "نقل ثقيل", image: heavyTruck },
  { name: "جرارات ومعدات زراعية", image: agriculture },
];

const Categories = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>فئات الإطارات</h2>

      <div className={styles.grid}>
        {categories.map(({ name, image }) => (
          <div key={name} className={styles.card}>
            <div className={styles.imageBox}>
              <img src={image} alt={name} />
            </div>
            <h3 className={styles.name}>{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
