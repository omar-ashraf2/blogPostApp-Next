import styles from "./page.module.css";
import { items } from "./data.js";
import Button from "@/components/button/Button";
import Image from "next/image";
// import { notFound } from "next/navigation";

// const getData = (category) => {
//   const data = items[category];
//   data ? data : notFound();
// };

const Category = ({ params }) => {
  // const data = getData(params.category);

  return (
    <>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {items[params.category].map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} fill={true} src={item.image} alt="" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Category;
