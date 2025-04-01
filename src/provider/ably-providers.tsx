"use client"


import { useEffect } from "react";
import Ably from "ably";
import { AblyProvider } from "ably/react";
import { useAtom } from "jotai";
import { AblyAtom } from "@/store/contact";


export function CustomAblyProvider({ children }: { children: React.ReactNode }) {
  const [ably, setAbly] = useAtom(AblyAtom);

  useEffect(() => {
    const client = new Ably.Realtime({ authUrl: "/api/ably-route" });
    client.connection.on("connected", () => console.log("✅ Ably Connected"));
    client.connection.on("failed", (err) => console.error("❌ Ably Failed:", err));

    setAbly(client);
    return () => client.close();
  }, [setAbly]);

  return ably ? <AblyProvider client={ably}>{children}</AblyProvider> : null;
}

