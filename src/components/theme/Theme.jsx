"use client";

import React, { useContext } from "react";
import styles from "./theme.module.css";
import { ThemeContext } from "../../../context/ThemeContext.js";

const Theme = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "4px" } : { right: "4px" }}
      />
    </div>
  );
};

export default Theme;
