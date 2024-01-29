"use client";

import { get, ref } from "firebase/database";
import { dataBase } from "../firebaseConfig";
import { useSession } from "next-auth/react";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

// Photo source import
import IncognitoUser from "/public/svg/incognitoUser.svg";
import { SubscriptionContext } from "@/context/subscriptionCtx/SubscriptionCtx";
import Link from "next/link";

export default function UserPage() {
  const session = useSession();
  const subscribeCtx = useContext(SubscriptionContext);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const dataRef = ref(dataBase, "DHT11");
    get(dataRef).then((snapshot) => {
      setData(snapshot.val());
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {!isLoading && data ? (
        <main className={styles.main}>
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

          <div className={styles.dataContainer}>
            <h2>მონაცემები</h2>
            <p>ტემპერატურა არის {data.Temperature}°</p>
            <p>
              ტენიანობა არის {data.Humidity}{" "}
              <span style={{ fontSize: "10px" }}>mm</span>
            </p>
          </div>

          <div className={styles.subscribtionContainer}>
            <h2>თქვენი პაკეტი</h2>
            {subscribeCtx.subscribed ? (
              <p>{subscribeCtx.subscriptionType}</p>
            ) : (
              <>
                <i>თქვენ ჯერ არ გაქვს შეძენილი პაკეტი</i>
                <Link href={"/services"}>
                  <button>ახლავე ყიდვა</button>
                </Link>
              </>
            )}
          </div>
          <div>
            {/* {subscribeCtx.subscribed ? (
              <>
                <p>Subscribed</p>
                <p>{subscribeCtx.subscriptionType}</p>
              </>
            ) : (
              <p>not Subscribed</p>
            )} */}
          </div>
        </main>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
