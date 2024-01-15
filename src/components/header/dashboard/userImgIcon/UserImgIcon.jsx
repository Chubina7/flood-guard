import React from "react";
import styles from "./UserImgIcon.module.css";
import Image from "next/image";

export default function UserImgIcon({ img }) {
  return (
    <div className={styles.imageCont}>
      <Image src={img} width={40} height={40} className={styles.image} />
    </div>
  );
}
