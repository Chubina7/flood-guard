"use client";

import { Link as ReactLink, animateScroll as scroll } from "react-scroll";
import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import UserImgIcon from "./userImgIcon/UserImgIcon";

import userImg from "/public/svg/incognitoUser.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navRoutes = [
  { id: 0, title: "მთავარი", to: "getStarted" },
  { id: 1, title: "შესახებ", to: "aboutUs" },
  { id: 2, title: "სერვისები", to: "services" },
  // { id: 2, title: "ადევნე თვალი", to: "" },
  // { id: 4, title: "გზამკვლევი", to: "" },
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
              {navRoutes.map((item) => {
                return (
                  <ReactLink
                    activeClass={styles.listItem_active}
                    spy={true}
                    to={item.to}
                    smooth={true}
                    offset={-60}
                    duration={500}
                    onClick={sideBarHandler}
                  >
                    <li key={item.id} className={styles.listItem}>
                      {item.title}
                    </li>
                  </ReactLink>
                );
              })}
            </ul>
          </sidebar>
        </>
      )}
    </>
  );
}
