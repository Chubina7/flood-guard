"use client";

import { get, ref } from "firebase/database";
import { dataBase } from "../firebaseConfig";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

// Photo source import
import IncognitoUser from "/public/svg/incognitoUser.svg";
// import IncognitoUser from "/public/images/user-profile-pic.jpg";

export default function UserPage() {
  const session = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const dataRef = ref(dataBase, "DHT11");
    get(dataRef).then((snapshot) => {
      setData(snapshot.val());
      setIsLoading(false);
    });
  }, []);

  // if (session.status === "authenticated") console.log(session.data.user);
  // if (session.status === "unauthenticated") console.log(session.status);
  // if (session.status === "loading") console.log(session.status);

  // console.log("დატა", data);

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
              <h1>
                Hello,{" "}
                {session.status === "authenticated"
                  ? session.data.user?.name
                  : "user"}
                !
              </h1>
              <p>
                {session.status === "authenticated"
                  ? session.data.user?.email
                  : "unauthenticated@mail.com"}
              </p>
            </div>
          </div>

          <div className={styles.dataContainer}>
            <p>Temperature is {data.Temperature}°</p>
            <p>Humidity is {data.Humidity}°</p>
          </div>
        </main>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
