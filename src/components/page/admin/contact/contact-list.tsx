"use client";

import { useFetchUserApi, useFetchUserApiBySession } from "@/api-hooks/user";
import CardLoading from "@/components/common/global/card-loading";
import LinkTag from "@/components/common/global/link-tag";
import { userToken } from "@/stores/auth";
import { CardMedia, Skeleton } from "@mui/material";
import { useAtom } from "jotai";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

interface IUser {
  avatar: string;
  name: string;
  id: number;
  email: string;
  role: string;
}

export default function ContactList() {
  const t = useTranslations("admin.Contact");
  const [token] = useAtom(userToken);
  const { data: auth } = useFetchUserApiBySession(token);
  const { data: users, isLoading } = useFetchUserApi();
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [data, setData] = useState<IUser[]>([]);

  useEffect(() => {
    const newData = users?.filter((user: IUser) => {
      return user.id != auth?.id;
    });
    setData(newData);
  }, [users, auth, setData]);
  if (isLoading) {
    return <CardLoading />;
  }
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex flex-wrap gap-[3.5%]">
        {data?.slice(0, visibleCount).map(
          (
            user: {
              avatar: string;
              name: string;
              id: number;
              email: string;
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
                  {!isLoaded && (
                    <Skeleton
                      sx={{ bgcolor: "grey.600" }}
                      variant="rectangular"
                      width="100%"
                      height={276}
                      animation="wave"
                    />
                  )}
                  <CardMedia
                    component="img"
                    image={user.avatar}
                    alt={user.name}
                    sx={{
                      maxWidth: "100%",
                      maxHeight: "276px",
                      objectFit: "contain",
                    }}
                    onLoad={() => setIsLoaded(true)}
                  />
                </div>
                <div className="w-full flex flex-col justify-center items-center min-h-[150px]">
                  <p className="text-base font-bold text-black">{user.name}</p>
                  <p className="text-sm text-gray-400 font-normal">
                    {user.email}
                  </p>
                  <div className="w-full flex flex-row gap-5 justify-center">
                    <LinkTag
                      href={`/admin/contact/${user.id}/update`}
                      className="w-[137px] h-[40px] border-[1px] border-gray-300 rounded-[8px] mt-5 flex flex-row gap-2 items-center justify-center text-gray-500 capitalize hover:bg-gray-300"
                    >
                      <Image
                        alt=""
                        src="/message-icon.svg"
                        width={14}
                        height={16}
                      ></Image>
                      {t("profile")}
                    </LinkTag>
                    <LinkTag
                      href={`/admin/contact/${user.id}/chat`}
                      className="w-[137px] h-[40px] border-[1px] border-gray-300 rounded-[8px] mt-5 flex flex-row gap-2 items-center justify-center text-gray-500 capitalize hover:bg-gray-300"
                    >
                      <Image
                        alt=""
                        src="/message-icon.svg"
                        width={14}
                        height={16}
                      ></Image>
                      {t("message")}
                    </LinkTag>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
      {visibleCount < data?.length && (
        <button
          className="w-[100px] h-[50px] border-[1px] border-gray-300 rounded-[8px] hover:bg-gray-300"
          onClick={() => setVisibleCount((count) => count + 3)}
        >
          {t("more")}
        </button>
      )}
    </div>
  );
}
