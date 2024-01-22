import React from "react";
import styles from "./GetStarted.module.css";
import Image from "next/image";
import Hero from "/public/images/hero.png";
import Button from "../../button/Button";

export default function GetStarted({ onClick }) {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.textArea}>
          <h1 className={styles.title}>უსაფრთხოების ჭკვიანი გადაწყვეტა</h1>
          {/* <p>Smart solutions for safety</p> */}
          <Button title={"Get Started"} href={"/"} onClick={onClick} />
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
