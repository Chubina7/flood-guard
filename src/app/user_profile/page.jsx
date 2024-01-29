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
  // const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    console.log("გაეშვა იუზ ეფექტი");
    const gettingData = () => {
      console.log("გაეშვა ფუნქცია");
      if (subscribeCtx.subscribed) {
        const dataRef = ref(dataBase, "DHT11");
        get(dataRef).then((snapshot) => {
          premiumAlertSystem(snapshot.val());
          // setIsLoading(false);
        });
      }
    };
    gettingData();

    const reFetching = setInterval(gettingData, 10000);
    return () => clearInterval(reFetching);
  }, []);

  return (
    <main className={styles.main}>
      {session.status === "authenticated" && (
        <div className={styles.userBar}>
          <Image
            src={
              session.status === "authenticated"
                ? session.data.user?.image
                : IncognitoUser
            }
            width={70}
            height={70}
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
      )}

      <div className={styles.dataContainer}>
        {subscribeCtx.subscriptionType === "სტანდარტული" ? (
          <>
            {/* <h2>მონაცემები</h2>
              <p>ტემპერატურა არის {data}°</p>
              <p>
                ტენიანობა არის {data}{" "}
                <span style={{ fontSize: "10px" }}>mm</span>
              </p> */}
            <p>კონტენტი რომელიც გამოვა სტანდარტულზე</p>
            <p>კონტენტი რომელიც გამოვა სტანდარტულზე</p>
            <p>კონტენტი რომელიც გამოვა სტანდარტულზე</p>
          </>
        ) : (
          subscribeCtx.subscriptionType === "პრემიუმი" && (
            <>
              <p>კონტენტი რომელიც გამოვა პრემიუმზე</p>
              <p>კონტენტი რომელიც გამოვა პრემიუმზე</p>
              <p>კონტენტი რომელიც გამოვა პრემიუმზე</p>
            </>
          )
        )}
      </div>

      <div className={styles.subscribtionContainer}>
        <h2>თქვენი პაკეტი</h2>
        {subscribeCtx.subscribed ? (
          <p>{subscribeCtx.subscriptionType}</p>
        ) : (
          <>
            <i>თქვენ ჯერ არ გაქვთ პაკეტი შეძენილი</i>
            <Link href={"/"}>
              <button>ახლავე ყიდვა</button>
            </Link>
          </>
        )}
      </div>

      <ToastContainer />
    </main>
  );
}
