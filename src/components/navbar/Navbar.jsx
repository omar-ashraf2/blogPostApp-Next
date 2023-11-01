"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Theme from "../theme/Theme";
import styles from "./navbar.module.css";
import Link from "next/link";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Blog App
      </Link>
      <div className={styles.links}>
        <Theme />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}

        {session.status === "authenticated" ? (
          <button
            className={styles.btn + " " + styles.logout}
            onClick={signOut}
          >
            Logout
          </button>
        ) : (
          <button className={styles.btn + " " + styles.login} onClick={signIn}>
            Login/Register
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
