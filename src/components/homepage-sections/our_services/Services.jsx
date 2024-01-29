import React from "react";
import styles from "./Services.module.css";
import Card from "./card/Card";

export default function Services({ id }) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.wrapper}>
        <div className={styles.cards}>
          <Card
            key={1}
            name={"სტანდარტული"}
            price={"0.00"}
            description={
              "აკონტროლე ტემპერატურა და ტენიანობა კონკრეტული ადგილის მიხედვით და გაიგე ინფორმაცია მოსალოდნელი საფრთხის შესახებ"
            }
            benefitList={[
              "ტემპერატურის კონტროლი",
              "ტენიანობის კონტროლი",
              "ლაივ რუკა",
            ]}
            routeName={"/standard_subscription"}
          />
          <Card
            key={2}
            name={"პრემიუმი"}
            price={"29.99"}
            description={
              "აკონტროლე ტემპერატურა და ტენიანობა კონკრეტული ადგილის მიხედვით და საფრთხის განვითარების ეტაპების შესახებ მიიღე დროული ინფორაცია შეტყობინების სახით"
            }
            benefitList={[
              "ტემპერატურის კონტროლი",
              "ტენიანობის კონტროლი",
              "ლაივ რუკა",
              "სამ ეტაპიანი გაფრთხილების სისტემა",
            ]}
            routeName={"/premium_subscription"}
          />
        </div>
      </div>
    </section>
  );
}
