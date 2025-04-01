"use client";

import { ChannelProvider } from "ably/react";
import ChatBox from "./chatbox";
import { useAtom } from "jotai";
import { userToken } from "@/store/user";
import { useFetchUserApiBySession } from "@/api-hooks/user";

export default function Chat() {
  const [token, ] = useAtom(userToken);
  const { data: user, isLoading } = useFetchUserApiBySession(token);
  if(isLoading) return <h1>Loading chat...</h1>
  return (
      <ChannelProvider channelName={`chat-room-${user.id}`}>
        <ChatBox userId={user.id}/>
      </ChannelProvider>
  );
}
