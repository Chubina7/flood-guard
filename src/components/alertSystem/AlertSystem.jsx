"use client";

import React, { useCallback, useEffect } from "react";

export default function AlertSystem() {
  const sendNotification = () => {
    if ("Notification" in window && Notification.permission === "granted") {
      console.log("clicked");
      new Notification("Hello TEST!!", {
        body: "This is body",
        icon: "/svg/loading.svg",
      });
    }
  };

  const requestNotifPermission = useCallback(() => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("premission granted");
      }
    });
  });

  useEffect(() => {
    if ("Notification" in window) {
      requestNotifPermission();
    }
  }, [requestNotifPermission]);

  return (
    <div>
      <button onClick={sendNotification}>trigger</button>
    </div>
  );
}
