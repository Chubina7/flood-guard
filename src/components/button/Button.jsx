import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";

export default function Button({ title, href }) {
  return (
    <Link href={href} className={styles.btn}>
      {title}
    </Link>
  );
}
