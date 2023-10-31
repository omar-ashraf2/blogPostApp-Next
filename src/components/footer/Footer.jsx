import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

const socialIcons = [
  {
    url: "https://www.Facebook.com",
    img: "/1.png",
    alt: "Facebook",
  },
  {
    url: "https://www.Instagram.com",
    img: "/2.png",
    alt: "Instagram",
  },
  {
    url: "https://www.x.com",
    img: "/3.png",
    alt: "Twitter",
  },
  {
    url: "https://www.Youtube.com",
    img: "/4.png",
    alt: "Youtube",
  },
];

const Footer = () => {
  return (
    <div className={styles.container}>
      <p>&copy;2023 Omar Ashraf. All rights reserved.</p>
      <div className={styles.social}>
        {socialIcons.map((icon) => (
          <Link key={icon.alt} href={icon.url} className={styles.iconLink}>
            <Image src={icon.img} alt={icon.alt} width={15} height={15} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
