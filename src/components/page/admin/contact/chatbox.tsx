"use client";

import { useFetchUserApiById } from "@/api-hooks/user";
import BoxLoading from "@/components/common/globals/box-loading";
import { CardMedia } from "@mui/material";
import dynamic from "next/dynamic";

const Chat = dynamic(() => import("@/components/common/chatbox/chat"), {
  ssr: false,
});

export default function ChatboxComponent({ id }: { id: string }) {
  const { data: user, isLoading } = useFetchUserApiById(id);

  return (
    <div className="w-full rounded-lg bg-white border-[2px] border-[#B9B9B9]">
      {isLoading ? (
        <BoxLoading />
      ) : (
        <div className="w-full flex flex-col p-5 gap-5">
          <div className="flex flex-row gap-5 items-center">
            <CardMedia
              component="img"
              image={user.avatar}
              alt={user.name}
              sx={{
                width: "44px",
                height: "44px",
                borderRadius: "100%",
                objectFit: "contain",
                boxShadow: "6px 6px 54px #00000008",
              }}
            />
            <p className="text-black font-bold capitalize text-xl">
              {user.name}
            </p>
            <p className="text-[#B9B9B9] font-bold capitalize text-base">
              {user.role}
            </p>
          </div>
          <Chat />
        </div>
      )}
    </div>
  );
}
