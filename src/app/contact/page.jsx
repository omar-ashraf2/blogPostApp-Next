import Image from "next/image";
import styles from "./page.module.css";
import ContactImg from "public/contact.png";
import Button from "@/components/button/Button";

const Contact = () => {
  return (
    <>
      <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src={ContactImg}
            alt="ContactImg"
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </>
  );
};

export default Contact;
