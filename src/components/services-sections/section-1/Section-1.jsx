import React from "react";
import styles from "./Section-1.module.css";
import Card from "./card/Card";

export default function Section1() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>ჩვენ გთავაზობთ ორი სახის გამოწერას</h1>
        <p className={styles.description}>რეგულარული და პრემიუმი</p>
        <div className={styles.cards}>
          <Card
            name={"რეგულარული"}
            price={"0.00"}
            description={"აღწერა"}
            benefitList={["ბენეფიტი", "ბენეფიტი", "ბენეფიტი"]}
          />
          <Card
            name={"პრემიუმი"}
            price={"29.99"}
            description={"აღწერა"}
            benefitList={["ბენეფიტი", "ბენეფიტი", "ბენეფიტი"]}
          />
        </div>
      </div>
    </section>
  );
}
