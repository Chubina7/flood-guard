"use client";

import { createContext, useState } from "react";

export const SubscriptionContext = createContext({
  subscribed: false,
  subscriptionType: null,
  setSubscribed: () => {},
  setSubscriptionType: () => {},
});

export default function SubscriptionCtx({ children }) {
  const [subscribed, setSubscribed] = useState(false);
  const [subscriptionType, setSubscriptionType] = useState(null);

  return (
    <SubscriptionContext.Provider
      value={{
        subscribed,
        subscriptionType,
        setSubscribed,
        setSubscriptionType,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
}
