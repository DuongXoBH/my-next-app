"use client";

import React, {
  useState,
  useRef,
  FormEvent,
  KeyboardEvent,
  useEffect,
} from "react";
import { useChannel } from "ably/react";
import { Message } from "ably";
import { useTranslations } from "next-intl";
import { useAtom } from "jotai";
import { AblyAtom } from "@/stores/contact";
import BoxLoading from "../global/box-loading";

export default function ChatBox({ userId }: { userId?: number }) {
  const t = useTranslations("Inbox");
  const [ably] = useAtom(AblyAtom);
  const inputBox = useRef<HTMLTextAreaElement | null>(null);
  const messageEnd = useRef<HTMLDivElement | null>(null);
  const [messageText, setMessageText] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const messageTextIsEmpty = messageText.trim().length === 0;

  const { channel } = useChannel(`chat-room-${userId}`, (message: Message) => {
    setMessages((prevMessages) => [...prevMessages.slice(-199), message]);
  });

  const sendChatMessage = (messageText: string) => {
    if (!messageText.trim()) return;
    channel.publish({ name: "chat-message", data: messageText });
    setMessageText("");

    if (inputBox.current) {
      inputBox.current.focus();
    }
  };

  const handleFormSubmission = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendChatMessage(messageText);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey && !messageTextIsEmpty) {
      event.preventDefault();
      sendChatMessage(messageText);
    }
  };

  useEffect(() => {
    messageEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!ably) {
    return <BoxLoading />;
  }

  return (
    <div className="w-full h-[70vh] flex flex-col border-[2px] rounded-lg border-gray-300 bg-white shadow-md p-4">
      <div className="flex flex-col flex-grow overflow-y-auto mb-4">
        {messages.map((message, index) => {
          const author = message.connectionId === ably?.connection.id;
          return (
            <span
              key={index}
              className={`py-2 px-3 mt-1 rounded-[18px] break-words text-[14px] ${
                author
                  ? "bg-blue-500 text-white self-end"
                  : "bg-gray-300 text-black self-start"
              }`}
            >
              {message.data}
            </span>
          );
        })}
        <div ref={messageEnd}></div>
      </div>
      <form
        onSubmit={handleFormSubmission}
        className="flex p-[10px] bg-white border-t-2 border-gray-300 rounded-b-lg"
      >
        <textarea
          ref={inputBox}
          value={messageText}
          placeholder={t("message")}
          onChange={(e) => setMessageText(e.target.value)}
          onKeyDown={handleKeyPress}
          className="flex-grow p-2 border-2 border-gray-300 rounded-lg resize-none focus:outline-none focus:border-blue-500"
        ></textarea>
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 disabled:opacity-50"
          disabled={messageTextIsEmpty}
        >
          {t("send")}
        </button>
      </form>
    </div>
  );
}
