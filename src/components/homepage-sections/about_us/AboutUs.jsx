import React from "react";
import styles from "./AboutUs.module.css";
import Image from "next/image";
import Logo from "/public/images/Logo.png";

export default function AboutUs() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h1>ვინ ვართ ჩვენ</h1>
        <div className={styles.imgBg}>
          <Image src={Logo} className={styles.img} alt="company-logo" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          veritatis placeat corrupti pariatur accusamus vero, quibusdam ipsa
          earum atque, eaque mollitia recusandae officiis porro assumenda
          quaerat sunt nulla. Iusto fugit repellat ex consequatur maxime ullam,
          libero voluptatem, voluptas error molestiae in provident? Nesciunt vel
          autem id fugit distinctio in excepturi.
        </p>
      </div>
    </section>
  );
}
