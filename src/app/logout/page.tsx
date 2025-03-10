"use client"
import { userToken } from "@/store/user";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function LogOut(){
    const [user,setUser] = useAtom(userToken);
    const route = useRouter();
    useEffect(()=>{
        if(user) {
            setUser("");
            toast("Logout")
            route.push("/login");
        }
    },[user,route,setUser])
    return null;
    
}