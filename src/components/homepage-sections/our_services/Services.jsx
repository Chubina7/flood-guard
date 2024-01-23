import React from "react";
import styles from "./Services.module.css";
import Card from "./card/Card";

export default function Services({ id }) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>აირჩიე</h1>
        <p className={styles.description}>სტანდარტული ან პრემიუმი</p>
        <div className={styles.cards}>
          <Card
            name={"სტანდარტული"}
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
