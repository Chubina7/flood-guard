"use client";

import React from "react";
import styles from "./Navigation.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navRoutes = [
  { id: 0, title: "მთავარი", href: "/" },
  { id: 1, title: "სერვისები", href: "/services" },
  { id: 2, title: "ადევნე თვალი", href: "/watch-now" },
  { id: 3, title: "შესახებ", href: "/about-us" },
  { id: 4, title: "გზამკვლევი", href: "/guide" },
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
              <Link href={"/"}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
