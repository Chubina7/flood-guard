"use client";

import { Link as ReactLink, animateScroll as scroll } from "react-scroll";
import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import UserImgIcon from "./userImgIcon/UserImgIcon";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

import userImg from "/public/svg/incognitoUser.svg";
import MenuSVG from "/public/svg/menu.svg";
import LoadingSVG from "/public/svg/loading.svg";

const navRoutes = [
  { id: 0, title: "მთავარი", to: "getStarted" },
  { id: 1, title: "შესახებ", to: "aboutUs" },
  { id: 2, title: "სერვისები", to: "services" },
];

// User interfaces
let loginedUserImg;

export default function Dashboard() {
  const session = useSession();
  const pathName = usePathname();
  const [sideBar, setNavbarActive] = useState(false);

  // Functions
  const sideBarHandler = () => {
    setNavbarActive((prev) => !prev);
  };

  // Session
  if (session?.status === "authenticated") {
    loginedUserImg = session.data?.user?.image;
  }

  // Render Details
  useEffect(() => {
    setNavbarActive(false);
  }, [pathName]);

  return (
    <>
      <div className={styles.wrapper}>
        {pathName === "/user_profile" ? (
          <UserImgIcon img={MenuSVG} setterFunction={sideBarHandler} />
        ) : (
          <UserImgIcon
            img={
              session.status === "authenticated"
                ? loginedUserImg
                : session.status === "loading"
                ? LoadingSVG
                : userImg
            }
            setterFunction={sideBarHandler}
          />
        )}
      </div>

      {sideBar && (
        <>
          <div className={styles.popUpOverlay} onClick={sideBarHandler}></div>
          <div className={styles.popUpSidebar}>
            <Link
              href={
                session.status === "authenticated" ? "/user_profile" : "/login"
              }
            >
              <div
                className={`${
                  session.status === "authenticated"
                    ? styles.userBarActive
                    : styles.userBar
                } ${styles.userBar}`}
              >
                <UserImgIcon
                  img={
                    session.status === "authenticated"
                      ? loginedUserImg
                      : userImg
                  }
                />
                {session?.status === "authenticated" ? (
                  <p>{session.data.user?.name}</p>
                ) : (
                  <p>შესვლა</p>
                )}
              </div>
            </Link>
            {session.status === "authenticated" ? (
              <p className={styles.logOutBtn} onClick={() => signOut()}>
                გასვლა
              </p>
            ) : (
              <></>
            )}
            <hr
              style={{
                margin: "20px 0",
                border: "1px solid black",
                borderRadius: "16px",
              }}
            />
            <ul className={styles.popUpMenu}>
              {navRoutes.map((item) => {
                if (pathName === "/") {
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
                } else if (item.title === "მთავარი") {
                  return (
                    <Link href={"/"}>
                      <li key={item.id} className={styles.listItem}>
                        {item.title}
                      </li>
                    </Link>
                  );
                }
              })}
            </ul>
          </div>
        </>
      )}
    </>
  );
}
