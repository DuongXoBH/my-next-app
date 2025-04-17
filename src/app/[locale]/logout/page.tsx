"use client";
import { getPathname } from "@/i18n/navigation";
import { userToken } from "@/stores/users";
import { useAtom } from "jotai";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LogOut() {
  const [user, setUser] = useAtom(userToken);
  const pathName = usePathname();
  const locale = pathName.split("/")[1];
  const route = useRouter();
  useEffect(() => {
    if (user) {
      setUser("");
      route.push(
        getPathname({ href: "/login", locale: locale as "vi" | "en" })
      );
    }
  }, [user, route, locale, setUser]);
  return null;
}
