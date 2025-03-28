'use client'

import * as Ably from 'ably';
import { AblyProvider, ChannelProvider } from 'ably/react';
import ChatBox from './chatbox';

export default function Chat() {
  const client = new Ably.Realtime({ authUrl: '/api' });
  const user = {
    id: "user-1",
    name: "User 1",
  };

  return (
    <AblyProvider client={client}>
      <ChannelProvider channelName={`chat-room-${user.id}`}>
        <ChatBox />
      </ChannelProvider>
    </AblyProvider>
  );
}
