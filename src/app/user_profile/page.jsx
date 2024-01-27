"use client";

import { get, ref } from "firebase/database";
import { dataBase } from "../firebaseConfig";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

export default function UserPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataRef = ref(dataBase, "DHT11");
    get(dataRef).then((snapshot) => console.log(snapshot.val()));
  }, []);

  const session = useSession();

  if (session.status === "authenticated") console.log(session.data.user);
  if (session.status === "unauthenticated") console.log(session.status);
  if (session.status === "loading") console.log(session.status);

  return (
    <div>
      <h1>User Page</h1>
    </div>
  );
}
