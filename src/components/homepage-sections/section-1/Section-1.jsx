import React from "react";
import styles from "./Section-1.module.css";
import Image from "next/image";
import Hero from "/public/images/hero.png";
import Button from "../../button/Button";

export default function Section1() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.textArea}>
          <h1 className={styles.title}>Flood Guard</h1>
          <p>Smart solutions for safety</p>
          <Button title={"Get Started"} href={"/"} />
        </div>
        <Image
          src={Hero}
          width={500}
          height={300}
          className={styles.heroImage}
        />
      </div>
    </section>
  );
}
