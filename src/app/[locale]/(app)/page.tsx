"use client";

import { getPathname } from "@/i18n/navigation";
import { redirect, usePathname } from "next/navigation";

export default function Home() {
  const pathName = usePathname();
  redirect(getPathname({href:"/dashboard", locale : pathName.split("/")[1] as "vi" | "en"}))
}
