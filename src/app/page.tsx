import React from "react";
import styles from "./page.module.css";

export default({
  children,
}: {
  children: React.ReactNode
})=> {
   
  return (
        <main className={styles.main}>
          {children}
        </main>
    
  );
}
