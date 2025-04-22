"use client"

import { getPathname } from "@/i18n/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function LinkTag({href, className,children} : {href:string;className? :string;children: React.ReactNode}){
    const pathName = usePathname();
    return (
        <Link href = {getPathname({href: href, locale : pathName.split("/")[1] as "vi" | "en"})} className={className}>
            {children}
        </Link>
    )

}