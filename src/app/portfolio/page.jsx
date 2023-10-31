import Link from "next/link";
import styles from "./page.module.css";
import { portfolioItems } from "./[category]/data.js";

const Portfolio = () => {
  return (
    <>
      <h1 className={styles.selectText}>Choose a gallery</h1>
      <div className={styles.items}>
        {portfolioItems.map((item) => (
          <Link
            key={item.text}
            href={item.url}
            className={styles.item}
            style={{ backgroundImage: "url(" + item.img + ")" }}
          >
            <span className={styles.title}>{item.text}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
