import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const CatLinks = [
  {
    id: 1,
    src: "/illustration.png",
    title: "Illustrations",
    href: "/portfolio/illustrations",
  },
  {
    id: 2,
    src: "/websites.jpg",
    title: "Websites",
    href: "/portfolio/websites",
  },
  {
    id: 3,
    src: "/apps.jpg",
    title: "Applications",
    href: "/portfolio/applications",
  },
];

const Portfolio = () => {
  return (
    <>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        {CatLinks.map((catLink) => (
          <Link
            className={styles.item}
            key={catLink.id}
            style={{ backgroundImage: `url("${catLink.src}")` }}
            href={catLink.href}
          >
            <span className={styles.title}>{catLink.title}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
