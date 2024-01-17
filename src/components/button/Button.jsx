import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";

export default function Button({ title, href, onClick }) {
  return (
    // <Link href={href}>
      <button className={styles.btn} onClick={onClick}>
        {title}
      </button>
    // </Link>
  );
}
