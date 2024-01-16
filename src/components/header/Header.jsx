import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Logo from "/public/images/Logo.png";
import Dashboard from "./dashboard/Dashboard";
import Navigation from "./navigation/Navigation";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link href={"/"} className={styles.logoCont}>
          <Image
            src={Logo}
            width={60}
            height={50}
            alt="logo-icon"
            className={styles.logo}
          />
        </Link>
        <Navigation />
        <Dashboard />
      </div>
    </header>
  );
}
