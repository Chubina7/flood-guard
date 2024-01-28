"use client";

import React, { useContext } from "react";
import styles from "./page.module.css";
import { SubscriptionContext } from "@/context/subscriptionCtx/SubscriptionCtx";
import { useRouter } from "next/navigation";

const subscriptionTypes = [
  {
    key: 1,
    name: "სტანდარტული",
    price: "0.00",
    description: "აღწერა",
    benefitList: ["ბენეფიტი 1", "ბენეფიტი 2", "ბენეფიტი 3"],
    routeName: "standard_subscription",
  },
  {
    key: 2,
    name: "პრემიუმი",
    price: 29.99,
    description: "აღწერა",
    benefitList: ["ბენეფიტი 1", "ბენეფიტი 2", "ბენეფიტი 3"],
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
            <>
              <h1>{item.name}</h1>
              <h3>{item.price} ₾</h3>
              <h3>{item.description}</h3>
              <div>
                <h2>ბენეფიტები:</h2>
                {item.benefitList.map((benefit) => (
                  <p>{benefit}</p>
                ))}
              </div>

              <button
                className={
                  !subscribeCtx.subscribed
                    ? // &&
                      // item.name === subscribeCtx.subscriptionType
                      styles.buyBtn
                    : `${styles.buyBtnInActive} ${styles.buyBtn}`
                }
                onClick={() => {
                  subscribeCtx.setSubscribed(true);
                  subscribeCtx.setSubscriptionType(item.name);
                  alert(`თქვენ შეიძინეთ პაკეტი ${item.name}`);
                }}
              >
                შეძენა
              </button>

              {subscribeCtx.subscribed ? (
                <div className={styles.status}>
                  <h4>აქტიური სტატუსი: </h4>
                  <div>
                    <p>Subscribed</p>
                    <p>{subscribeCtx.subscriptionType}</p>
                  </div>
                </div>
              ) : (
                <div className={styles.status}>
                  <h4>აქტიური სტატუსი: </h4>
                  <div>
                    <p>Not Subscribed</p>
                  </div>
                </div>
              )}
            </>
          );
        }
      })}
    </main>
  );
}
