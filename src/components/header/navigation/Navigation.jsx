"use client";

import React from "react";
import styles from "./Navigation.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navRoutes = [
  { id: 0, title: "Home", href: "/" },
  { id: 1, title: "Services", href: "/services" },
  { id: 2, title: "About us", href: "/about-us" },
];

export default function Navigation() {
  const pathName = usePathname();

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navRoutes.map((item) => {
          return (
            <li
              key={item.id}
              className={
                pathName == item.href
                  ? `${styles.active} ${styles.listItem}`
                  : styles.listItem
              }
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
