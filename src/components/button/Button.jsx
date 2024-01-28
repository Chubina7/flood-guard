import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";

export default function Button({ title, onClick }) {
  return (
      <button className={styles.btn} onClick={onClick}>
        {title}
      </button>
  );
}
