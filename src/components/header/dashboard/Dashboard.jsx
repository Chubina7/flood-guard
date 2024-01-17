import React from "react";
import styles from "./Dashboard.module.css";
import UserImgIcon from "./userImgIcon/UserImgIcon";

import userImg from "/public/svg/incognitoUser.svg";

export default function Dashboard() {
  return (
    <div className={styles.wrapper}>
      <UserImgIcon img={userImg} />
      <p className={styles.loginStatus}>შესვლა</p>
    </div>
  );
}
