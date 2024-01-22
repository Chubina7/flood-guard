import React from "react";
import styles from "./AboutUs.module.css";
import Image from "next/image";
import Logo from "/public/images/Logo.png";

export default function AboutUs({ aboutRef }) {
  return (
    <section className={styles.section} ref={aboutRef}>
      <div className={styles.wrapper}>
        <div className={styles.imgBg}>
          <Image src={Logo} className={styles.img} alt="company-logo" />
        </div>
        <div className={styles.text}>
          <h1>Who are we</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            veritatis placeat corrupti pariatur accusamus vero, quibusdam ipsa
            earum atque, eaque mollitia recusandae officiis porro assumenda
            quaerat sunt nulla. Iusto fugit repellat ex consequatur maxime
            ullam, libero voluptatem, voluptas error molestiae in provident?
            Nesciunt vel autem id fugit distinctio in excepturi.
          </p>
        </div>
      </div>
    </section>
  );
}
