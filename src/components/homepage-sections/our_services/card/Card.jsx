"use client";

import React, { useState } from "react";
import styles from "./Card.module.css";
import Image from "next/image";
// Photos
import WhiteDoneSvg from "public/svg/whiteDone.svg";
import BlueDoneSvg from "public/svg/BlueDone.svg";

export default function Card({ name, price, description, benefitList }) {
  const [isHovered, setIsHovered] = useState(false);
  const DoneSvg = isHovered ? BlueDoneSvg : WhiteDoneSvg;

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
                  justifyContent: "flex-start",
                  alignItems: "flexs",
                  gap: "10px",
                }}
              >
                <Image
                  src={DoneSvg}
                  width={20}
                  height={20}
                  alt="done-checkmark"
                />
                <li>{item}</li>
              </div>
            );
          })}
      </ul>
      <p className={styles.italicText}>ასარჩევად დააკლიკეთ ბარათს</p>
    </div>
  );
}
