import React from "react";
import styles from "./AboutUs.module.css";
import Image from "next/image";
import Logo from "/public/images/logo.png";

export default function AboutUs({ id }) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.wrapper}>
        <div className={styles.imgBg}>
          <Image src={Logo} className={styles.img} alt="company-logo" />
        </div>
        <p>
          <strong>FloodGuard</strong> - შენი მცველი წყალდიდობისას, რეალურ დროში
          ზუსტი ინფორმაციით.
          <br />
          <br />
          წყალდიდობის მონიტორინგის სისტემა, რომელიც ჭკვიანი მოწყობილობისა და
          მობილური აპლიკაციის მეშვეობით მომხმარებელს ზუსტ ინფორმაციას აწვდის
          წყალდიდობის შესახებ და საფრთხის განვითარების ყოველ ეტაპს აცნობებს
          დროულად.
        </p>
      </div>
    </section>
  );
}
