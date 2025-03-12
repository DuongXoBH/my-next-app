"use client";

import { useFetchUserApi } from "@/api-hooks/user";
import MemberCard from "./member-card";
import CardLoading from "@/components/common/card-loading";
import { useState } from "react";

export interface IUser{
    id: number;
    avatar: string;
    email: string;
    name: string;
    role: string;
}        

export default function MemberList() {
    const [count, ] = useState<number>(12);
    const { data: users,isLoading } = useFetchUserApi();
    if (isLoading) {
        return (<CardLoading/>)
    }
    return (
        <div className="w-full flex flex-row  flex-wrap justify-start gap-[2.6%]">
           {users?.slice(0,count).map((user : IUser)=>{
                return <MemberCard key={user.id} member={user} />
           })}
        </div>
    )   
} 