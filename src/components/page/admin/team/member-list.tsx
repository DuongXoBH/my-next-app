"use client";

import { useFetchUserApi } from "@/api-hooks/user";
import MemberCard from "./member-card";
import CardLoading from "@/components/common/global/card-loading";
import { useState } from "react";
import { useTranslations } from "next-intl";
import DeleteMember from "./delete-member";

export interface IUser {
  id: number;
  avatar: string;
  email: string;
  name: string;
  role: string;
}

export default function MemberList() {
  const t = useTranslations("Team");
  const [count, setCount] = useState<number>(12);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState<{ [key: string]: boolean }>({});
  // Fetch users from the API
  const { data: users, isLoading } = useFetchUserApi();
  if (isLoading) {
    return <CardLoading />;
  }
  return (
    <div className="w-full flex flex-col gap-7 items-center">
      <div className="w-full flex flex-row  flex-wrap justify-start gap-[2.6%]">
        {users?.slice(0, count).map((user: IUser) => {
          return (
            <div key={user.id} className="w-[23%]">
              <button
                className="w-full h-full"
                type="button"
                onClick={() =>
                  setDeleteDialogOpen((prev) => ({ ...prev, [user.id]: true }))
                }
              >
                <MemberCard member={user} />
              </button>
              <DeleteMember
                open={deleteDialogOpen[user.id] || false}
                setOpen={(status) =>
                  setDeleteDialogOpen((prev) => ({ ...prev, [user.id]: status }))
                }
                id={user.id}
              />
            </div>
          );
        })}
      </div>
      {count < users?.length && (
        <button
          className="w-[25%] h-[50px] border-[1px] border-gray-300 rounded-[8px] hover:bg-gray-300"
          onClick={() => setCount((count) => count + 4)}
        >
          {t("more")}
        </button>
      )}
    </div>
  );
}
