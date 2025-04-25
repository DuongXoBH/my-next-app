"use client";

import { getPathname } from "@/i18n/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function LinkTag({
  href,
  target,
  className,
  children,
}: {
  href: string;
  target?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <Link
      href={getPathname({
        href: href,
        locale: pathName.split("/")[1] as "vi" | "en",
      })}
      target={target}
      className={className}
    >
      {children}
    </Link>
  );
}
