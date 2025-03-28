"use client"

import dynamic from "next/dynamic";

const Chat = dynamic(() => import("@/components/common/chatbox/chat"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Chat/>
    </div>
  );
}
