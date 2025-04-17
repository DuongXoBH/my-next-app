"use client";

import PageHeader from "@/components/common/global/page-header";
import ChatboxComponent from "@/components/page/admin/contact/chatbox";
import { use } from "react";

export default function ChatPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  return (
    <div>
      <PageHeader page="Chatbox" />
      <ChatboxComponent id={id} />
    </div>
  );
}
