import React from "react";
import styles from "./GetStarted.module.css";
import Image from "next/image";
import Hero from "/public/images/hero.png";
import Button from "../../button/Button";

export default function GetStarted({ onClick, id }) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.wrapper}>
        <div className={styles.textArea}>
          <h1 className={styles.title}>უსაფრთხოების ჭკვიანი გადაწყვეტა</h1>
          <Button title={"Get Started"} href={"/"} onClick={onClick} />
        </div>
        <div className={styles.imgBg}>
          <Image
            src={Hero}
            width={300}
            className={styles.heroImage}
            alt="hero-image"
          />
        </div>
      </div>
    </section>
  );
}
