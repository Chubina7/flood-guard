import React from "react";
import styles from "./Header.module.css";
import Dashboard from "./dashboard/Dashboard";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link href={"/"} className={styles.logoCont}>
          <h1 className={styles.heading}>FloodGuard</h1>
        </Link>
        <Dashboard />
      </div>
    </header>
  );
}
