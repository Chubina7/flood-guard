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
            key={1}
            name={"სტანდარტული"}
            price={"0.00"}
            description={"აღწერა"}
            benefitList={["ბენეფიტი", "ბენეფიტი", "ბენეფიტი"]}
            routeName={"/standard_subscription"}
          />
          <Card
            key={2}
            name={"პრემიუმი"}
            price={"29.99"}
            description={"აღწერა"}
            benefitList={["ბენეფიტი", "ბენეფიტი", "ბენეფიტი"]}
            routeName={"/premium_subscription"}
          />
        </div>
      </div>
    </section>
  );
}
