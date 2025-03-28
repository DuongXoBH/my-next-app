"use client";

import * as Ably from "ably";
import { AblyProvider, ChannelProvider } from "ably/react";
import ChatBox from "./chatbox";
import { useAtom } from "jotai";
import { userToken } from "@/store/user";
import { useFetchUserApiBySession } from "@/api-hooks/user";

export default function Chat() {
  const client = new Ably.Realtime({ authUrl: "/api/ably-route" });
  const [token, ] = useAtom(userToken);
  const { data: user, isLoading } = useFetchUserApiBySession(token);
  if(isLoading) return <h1>Loading chat...</h1>
  return (
    <AblyProvider client={client}>
      <ChannelProvider channelName={`chat-room-${user.id}`}>
        <ChatBox userId={user.id}/>
      </ChannelProvider>
    </AblyProvider>
  );
}
