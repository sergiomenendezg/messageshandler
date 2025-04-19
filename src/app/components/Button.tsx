import React from "react";
import styles from "@components/components.module.css";

export default ({children}: any) => {
  return <button className={styles.button}>{children}</button>
};