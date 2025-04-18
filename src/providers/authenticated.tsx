"use client";

import { getPathname } from "@/i18n/navigation";
import { userToken } from "@/stores/auth";
import { useAtom } from "jotai";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

export default function AuthenticateMiddlewareProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [token] = useAtom(userToken);
  const pathName = usePathname();
  const route = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!token) {
        toast.error("You are not signed in");
        route.push(
          getPathname({
            href: "/login",
            locale: pathName.split("/")[1] as "vi" | "en",
          })
        );
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [token, route, pathName]);

  return <div className="w-full">{children}</div>;
}
