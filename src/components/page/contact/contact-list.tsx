"use client";

import { useFetchUserApi } from "@/api-hooks/user";
import CardLoading from "@/components/common/card-loading";
import { CardMedia } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function ContactList() {
  const { data: users,isLoading } = useFetchUserApi();
  const [visibleCount, setVisibleCount] = useState<number>(6);
  // console.log("🚀 ~ ContactList ~ data:", users);
  if (isLoading) {
    return (<CardLoading/>)
  }
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex flex-wrap gap-[3.5%]">
        {users?.slice(0, visibleCount).map(
          (
            user: {
              id: number;
              avatar: string;
              email: string;
              name: string;
              role: string;
            },
            index: number
          ) => {
            return (
              <div
                key={`user-${index}`}
                className="w-[31%]  max-h-[415px] rounded-[16px] border-[2px] border-gray-300 mb-[30px] overflow-hidden"
              >
                <div className="w-full max-h-[276px] bg-gray-200 overflow-hidden">
                  <CardMedia
                    component="img"
                    image={user.avatar}
                    alt={user.name}
                    sx={{
                      maxWidth: "100%",
                      maxHeight: "276px",
                      objectFit:"contain",
                    }}
                  />
                </div>
                <div className="w-full flex flex-col justify-center items-center min-h-[150px]">
                  <p className="text-base font-bold text-black">{user.name}</p>
                  <p className="text-sm text-gray-400 font-normal">
                    {user.email}
                  </p>
                  <button
                    className="w-[137px] h-[40px] border-[1px] border-gray-300 rounded-[8px] mt-5 flex flex-row gap-2 items-center justify-center text-gray-500 hover:bg-gray-300"
                  >
                    <Image alt="" src="/message-icon.svg" width={14} height={16}></Image>
                    Message
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
      {visibleCount < users?.length && (
        <button
          className="w-[100px] h-[50px] border-[1px] border-gray-300 rounded-[8px] hover:bg-gray-300"
          onClick={() => setVisibleCount((count) => count + 3)}
        >
          See More
        </button>
      )}
    </div>
  );
}
