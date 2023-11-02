import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const socialIcons = [
  {
    id: 1,
    src: "/1.png",
  },
  {
    id: 2,
    src: "/2.png",
  },
  {
    id: 3,
    src: "/3.png",
  },
  {
    id: 4,
    src: "/4.png",
  },
];

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Omar Ashraf. All rights reserved.</div>
      <div className={styles.social}>
        {socialIcons.map((icon) => (
          <Image
            key={icon.id}
            src={icon.src}
            width={15}
            height={15}
            className={styles.icon}
            alt="Social Icon"
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
