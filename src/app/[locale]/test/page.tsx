"use client";

import dynamic from "next/dynamic";

const Chat = dynamic(() => import("@/components/common/chatbox/chat"), {
  ssr: false,
});

export default function Test() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">Test Page</h1> 
      <Chat/>
    </div>
  )
}
