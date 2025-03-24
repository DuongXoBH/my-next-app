"use client"
import { getPathname } from "@/i18n/navigation";
import { userToken } from "@/store/user";
import { useAtom } from "jotai";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function LogOut(){
    const [user,setUser] = useAtom(userToken);
    const pathName = usePathname();
    const locale = pathName.split('/')[1];
    const route = useRouter();
    useEffect(()=>{
        if(user) {
            setUser("");
            toast("Logout")
            route.push(getPathname({href: "/login", locale : locale as "vi"|"en"}));
        }
    },[user,route,locale,setUser])
    return null;
    
}