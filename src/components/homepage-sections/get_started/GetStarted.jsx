"use client";

import { Link as ReactLink, animateScroll as scroll } from "react-scroll";
import React from "react";
import styles from "./GetStarted.module.css";
import Button from "../../button/Button";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import alertSender from "@/functions/alertSender";

export default function GetStarted({ onClick, id }) {
  const router = useRouter();
  const session = useSession();

  return (
    <section className={styles.section} id={id}>
      <div className={styles.wrapper}>
        <div className={styles.textArea}>
          <h1 className={styles.title}>Smart solutions for safety</h1>

          {session.status === "unauthenticated" ? (
            <Button
              title={"დაწყება"}
              onClick={() => {
                router.push("/login");
                alertSender(
                  "ჯერ გაიარეთ რეგისტრაცია, ან შედით არსებული პროფილით",
                  "error"
                );
              }}
            />
          ) : (
            <ReactLink
              to={"services"}
              smooth={true}
              offset={-60}
              duration={500}
            >
              <Button title={"დაწყება"} />
            </ReactLink>
          )}
        </div>
        <div className={styles.imgBg}></div>
      </div>
    </section>
  );
}
