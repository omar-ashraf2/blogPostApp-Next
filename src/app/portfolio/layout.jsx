import styles from "./page.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <h1 className={styles.mainTitle}>Our Works</h1>
      {children}
    </>
  );
};

export default Layout;
