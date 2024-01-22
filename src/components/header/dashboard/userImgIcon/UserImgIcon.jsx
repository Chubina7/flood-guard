import React from "react";
import styles from "./UserImgIcon.module.css";
import Image from "next/image";

export default function UserImgIcon({ img, setterFunction }) {
  return (
    <div className={styles.imageCont} onClick={setterFunction}>
      <Image src={img} width={40} height={40} className={styles.image} alt="user-profile-icon" />
    </div>
  );
}
