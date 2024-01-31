"use client";

import { get, ref } from "firebase/database";
import { dataBase } from "../firebaseConfig";
import { useSession } from "next-auth/react";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { SubscriptionContext } from "@/context/subscriptionCtx/SubscriptionCtx";
import Link from "next/link";
import { ToastContainer } from "react-toastify";

// Photo source import
import IncognitoUser from "/public/svg/incognitoUser.svg";
import premiumAlertSystem from "@/functions/premiumAlertSystem";

export default function UserPage() {
  const subscribeCtx = useContext(SubscriptionContext);
  const session = useSession();
  const [data, setData] = useState({ Humidity: null, Temperature: null });
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = () => {
      if (subscribeCtx.subscribed) {
        const dataRef = ref(dataBase, "DHT11");
        get(dataRef).then((snapshot) => {
          console.log("Checked");
          if (subscribeCtx.subscriptionType === "პრემიუმი") {
            premiumAlertSystem(snapshot.val());
            setData(snapshot.val());
            // setIsLoading(false);
          }
          if (subscribeCtx.subscriptionType === "სტანდარტული") {
            setData(snapshot.val());
            // setIsLoading(false);
          }
        });
      }
    };
    getData();

    const reFetching = setInterval(getData, 10000);
    return () => clearInterval(reFetching);
  }, []);

  const timeStamp = new Date();
  let hours = timeStamp.getHours().toString().padStart(2, "0");
  let minutes = timeStamp.getMinutes().toString().padStart(2, "0");
  let seconds = timeStamp.getSeconds().toString().padStart(2, "0");
  let milliseconds = timeStamp.getMilliseconds().toString().padStart(3, "0");
  const currentDate = `${hours}:${minutes}:${seconds}:${milliseconds}`;

  return (
    <main className={styles.main}>
      {/* Checking user information */}
      {session.status === "authenticated" ? (
        <div className={styles.userBar}>
          <Image
            src={
              session.status === "authenticated"
                ? session.data.user?.image
                : IncognitoUser
            }
            width={80}
            height={80}
            alt="user-profile-image"
            className={styles.userImage}
          />
          <div className={styles.userBarText}>
            <h2>
              გამარჯობა,{" "}
              {session.status === "authenticated"
                ? session.data.user?.name?.split(" ")[0]
                : "user"}
              !
            </h2>
            <p>
              {session.status === "authenticated"
                ? session.data.user?.email
                : "unauthenticated@mail.com"}
            </p>
          </div>
        </div>
      ) : (
        <i>Getting user infromation...</i>
      )}

      {/* checking subscribed or not */}
      <div className={styles.subscribtionContainer}>
        <h2>თქვენი პაკეტი</h2>
        {subscribeCtx.subscribed ? (
          <p>{subscribeCtx.subscriptionType}</p>
        ) : (
          <>
            <i>თქვენ ჯერ არ გაქვთ პაკეტი შეძენილი</i>
            <Link href={"/"}>
              <button className={styles.buyNowBtn}>ახლავე ყიდვა</button>
            </Link>
          </>
        )}
      </div>

      {/* Showing content depending on the subscription */}
      {subscribeCtx.subscribed && (
        <div className={styles.dataContainer}>
          <p>ბოლო შემოწმების დრო: {currentDate}</p>
          <div>
            <h3>მონაცემები</h3>
            <p>ტემპერატურა: {data.Temperature}°</p>
            <p>
              ტენიანობა: {data.Humidity}{" "}
              <span style={{ fontSize: "10px" }}>mm</span>
            </p>
          </div>
          <br />
          <div className={styles.status}>
            <h4>აქტიური სტატუსი: </h4>
            <div>
              <p>Subscribed - {subscribeCtx.subscriptionType}</p>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </main>
  );
}
