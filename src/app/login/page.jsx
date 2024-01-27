"use client";

import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

import FBLogo from "/public/images/fbLogo.png";
import GoogleLogo from "/public/images/googleLogo.png";
import { signIn } from "next-auth/react";

export default function page() {
  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <main className={styles.main}>
      <h1>შესვლა</h1>
      <form onSubmit={submitHandler}>
        <input type="email" name="" id="login_email" placeholder="ელ-ფოსტა" />
        <input
          type="password"
          name=""
          id="login_password"
          placeholder="პაროლი"
        />
        <button>გაგზავნა</button>
      </form>
      <hr />
      <h1>რეგისტრაცია</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name=""
          id="register_username"
          placeholder="სახელი"
        />
        <input
          type="email"
          name=""
          id="register_email"
          placeholder="ელ-ფოსტა"
        />
        <input
          type="password"
          name=""
          id="register_password"
          placeholder="პაროლი"
        />
        <button>გაგზავნა</button>
      </form>
      <hr />
      <h1>ან</h1>
      <button className={styles.googleBtn} onClick={() => signIn("google")}>
        <Image
          src={GoogleLogo}
          alt="google"
          width={20}
          className={styles.loginLogos}
        />
        <p>შესვლა Google-ით</p>
      </button>
      <button className={styles.googleBtn}>
        <Image
          src={FBLogo}
          alt="facebook"
          width={20}
          className={styles.loginLogos}
        />
        <p>შესვლა Facebook-ით</p>
      </button>
    </main>
  );
}
