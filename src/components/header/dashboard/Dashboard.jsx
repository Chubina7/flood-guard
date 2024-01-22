"use client";

import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import UserImgIcon from "./userImgIcon/UserImgIcon";

import userImg from "/public/svg/incognitoUser.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navRoutes = [
  { id: 0, title: "მთავარი", href: "/" },
  { id: 1, title: "სერვისები", href: "/services" },
  { id: 2, title: "ადევნე თვალი", href: "/watch-now" },
  { id: 3, title: "შესახებ", href: "/about-us" },
  { id: 4, title: "გზამკვლევი", href: "/guide" },
];

export default function Dashboard() {
  const pathName = usePathname();
  const [sideBar, setNavbarActive] = useState(false);

  const sideBarHandler = () => {
    setNavbarActive((prev) => !prev);
  };

  useEffect(() => {
    setNavbarActive(false);
  }, [pathName]);
  
  return (
    <>
      <div className={styles.wrapper}>
        <UserImgIcon img={userImg} setterFunction={sideBarHandler} />
      </div>
      {/* Popup */}
      {sideBar && (
        <>
          <div className={styles.popUpOverlay} onClick={sideBarHandler}></div>
          <sidebar className={styles.popUpSidebar}>
            <Link href={"/login"}>
              <div className={styles.userBar}>
                <UserImgIcon img={userImg} />
                <p>შესვლა</p>
              </div>
            </Link>
            <hr
              style={{
                margin: "20px 0",
                border: "1px solid black",
                borderRadius: "16px",
              }}
            />
            <ul className={styles.popUpMenu}>
              {navRoutes.map((route) => {
                return (
                  <li
                    key={route.id}
                    className={
                      pathName == route.href
                        ? `${styles.active} ${styles.listItem}`
                        : styles.listItem
                    }
                  >
                    {route.title}
                  </li>
                );
              })}
            </ul>
          </sidebar>
        </>
      )}
    </>
  );
}
