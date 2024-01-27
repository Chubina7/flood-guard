import React from "react";
import styles from "./AboutUs.module.css";
import Image from "next/image";
import Logo from "public/images/Logo.png";

export default function AboutUs({ id }) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.wrapper}>
        <h1>შესახებ</h1>
        <div className={styles.imgBg}>
          <Image src={Logo} className={styles.img} alt="company-logo" />
        </div>
        <p>
          <strong>FloodGuard</strong> შენი უსაფრთოების მცველი წყალდიდობისას -
          რეალურ დროში სწრაფი და ზუსტი ინფორმაციით.
          <br />
          <br />
          ეს არის წყალდიდობის მონიტორინგის სისტემა, რომელიც დაუყოვნებლივ
          აცნობებს მოსახლეობას ინფორმაციას წყალდიდობასთან დაკავშირებული საფრთხის
          შესახებ.
        </p>
      </div>
    </section>
  );
}
