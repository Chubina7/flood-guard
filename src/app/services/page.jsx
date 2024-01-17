import React from "react";
import styles from "./page.module.css";
import { Stint_Ultra_Condensed } from "next/font/google";
import Section1 from "@/components/services-sections/section-1/Section-1";

export default function Services() {
  return (
    <main className={styles.main}>
      <Section1 />
    </main>
  );
}
