"use client";

import React from "react";
import styles from "./GetStarted.module.css";
import Image from "next/image";
import Hero from "/public/images/hero.png";
import Button from "../../button/Button";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function GetStarted({ onClick, id }) {
  const router = useRouter();
  const session = useSession();

  return (
    <section className={styles.section} id={id}>
      <div className={styles.wrapper}>
        <div className={styles.textArea}>
          <h1 className={styles.title}>უსაფრთხოების ჭკვიანი გადაწყვეტა</h1>
          <Button
            title={"Get Started"}
            onClick={() => {
              if (session.status === "unauthenticated") router.push("/login");
              if (session.status === "authenticated")
                router.push("/services");
            }}
          />
        </div>
        <div className={styles.imgBg}>
          <Image
            src={Hero}
            width={300}
            className={styles.heroImage}
            alt="hero-image"
          />
        </div>
      </div>
    </section>
  );
}
