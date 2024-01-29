"use client";

import React, { useContext, useEffect } from "react";
import styles from "./page.module.css";
import { SubscriptionContext } from "@/context/subscriptionCtx/SubscriptionCtx";
import { useRouter } from "next/navigation";
import alertSender from "@/functions/alertSender";
import { ToastContainer } from "react-toastify";

const subscriptionTypes = [
  {
    key: 1,
    name: "სტანდარტული",
    price: "0.00",
    description:
      "აკონტროლე ტემპერატურა და ტენიანობა კონკრეტული ადგილის მიხედვით და გაიგე ინფორმაცია მოსალოდნელი საფრთხის შესახებ",
    benefitList: ["ტემპერატურის კონტროლი", "ტენიანობის კონტროლი", "ლაივ რუკა"],
    routeName: "standard_subscription",
  },
  {
    key: 2,
    name: "პრემიუმი",
    price: 29.99,
    description:
      "აკონტროლე ტემპერატურა და ტენიანობა კონკრეტული ადგილის მიხედვით და საფრთხის განვითარების ეტაპების შესახებ მიიღე დროული ინფორაცია შეტყობინების სახით",
    benefitList: [
      "ტემპერატურის კონტროლი",
      "ტენიანობის კონტროლი",
      "ლაივ რუკა",
      "სამ ეტაპიანი გაფრთხილების სისტემა",
    ],
    routeName: "premium_subscription",
  },
];

export default function Payment({ params }) {
  const subscribeCtx = useContext(SubscriptionContext);

  return (
    <main className={styles.main}>
      {subscriptionTypes.map((item) => {
        if (item.routeName === params.subscriptionType) {
          return (
            <div className={styles.info}>
              <h1>{item.name}</h1>
              <h3>{item.price} ₾</h3>
              <p>{item.description}</p>
              <div>
                <h2>ბენეფიტები:</h2>
                {item.benefitList.map((benefit) => (
                  <p>{benefit}</p>
                ))}
              </div>

              <button
                className={
                  !subscribeCtx.subscribed
                    ? styles.buyBtn
                    : `${styles.buyBtnInActive} ${styles.buyBtn}`
                }
                onClick={() => {
                  subscribeCtx.setSubscribed(true);
                  subscribeCtx.setSubscriptionType(item.name);
                  alertSender(
                    `თქვენ შეიძინეთ პაკეტი; დეტალები ნახეთ პირად გვერდზე`,
                    "success"
                  );
                }}
              >
                შეძენა
              </button>
            </div>
          );
        }
      })}
      {subscribeCtx.subscribed ? (
        <div className={styles.status}>
          <h4>აქტიური სტატუსი: </h4>
          <div>
            <p>Subscribed - {subscribeCtx.subscriptionType}</p>
          </div>
        </div>
      ) : (
        <div className={styles.status}>
          <h4>აქტიური სტატუსი: </h4>
          <p>Not Subscribed</p>
        </div>
      )}
      <ToastContainer />
    </main>
  );
}
