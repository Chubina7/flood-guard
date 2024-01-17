import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";

import DoneSvg from "/public/svg/done.svg";

export default function Card({ name, price, description, benefitList }) {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <h1 className={styles.price}>
        ₾ {price}
        <span> /month</span>
      </h1>
      <p className={styles.description}>{description}</p>
      <hr
        style={{
          width: "100%",
          borderRadius: "16px",
          border: "1px solid",
          opacity: "60%",
        }}
      />
      <ul>
        {Array.isArray(benefitList) &&
          benefitList.map((item) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Image src={DoneSvg} width={20} height={20} />
                <li>{item}</li>
              </div>
            );
          })}
      </ul>
      <p className={styles.italicText}>ასარჩევად დააკლიკეთ აქ</p>
    </div>
  );
}
