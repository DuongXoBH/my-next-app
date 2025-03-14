"use client";

import { useFetchUserApi } from "@/api-hooks/user";
import MemberCard from "./member-card";
import CardLoading from "@/components/common/card-loading";
import { useState } from "react";

export interface IUser {
  id: number;
  avatar: string;
  email: string;
  name: string;
  role: string;
}

export default function MemberList() {
  const [count, setCount] = useState<number>(12);
  const { data: users, isLoading } = useFetchUserApi();
  if (isLoading) {
    return <CardLoading />;
  }
  return (
    <div className="w-full flex flex-col gap-7 items-center">
      <div className="w-full flex flex-row  flex-wrap justify-start gap-[2.6%]">    
        {users?.slice(0, count).map((user: IUser) => {
          return <MemberCard key={user.id} member={user} />;
        })}
      </div>
      {count < users?.length && (
        <button
          className="w-[25%] h-[50px] border-[1px] border-gray-300 rounded-[8px] hover:bg-gray-300"
          onClick={() => setCount((count) => count + 4)}
        >
          See More
        </button>
      )}
    </div>
  );
}
