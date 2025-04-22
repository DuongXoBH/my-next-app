"use client";

import { ChannelProvider } from "ably/react";
import ChatBox from "./chatbox";
import { useAtom } from "jotai";
import { userToken } from "@/stores/auth";
import { useFetchUserApiBySession } from "@/api-hooks/user";
import BoxLoading from "../globals/box-loading";

export default function Chat() {
  const [token] = useAtom(userToken);
  const { data: auth, isLoading } = useFetchUserApiBySession(token);
  if (isLoading) return <BoxLoading />;
  return (
    <ChannelProvider channelName={`chat-room-${auth.id}`}>
      <ChatBox userId={auth.id} />
    </ChannelProvider>
  );
}
