"use client"

import { IPricingList } from "@/constants/pricing";
import Link from "next/link";

export default function PricingCard(props: { arr: IPricingList }) {
    const handleClick = (id:number)=>{
        console.log(id)
    }
  return (
    <div className="w-[30%] min-h-[780px] bg-pricing bg-center bg-no-repeat bg-cover flex flex-col justify-between items-center pt-10 pb-[55px] rounded-[30px]">
      <p className="text-2xl ">{props.arr.title}</p>
      <p className="text-lg ">Montly Charge</p>
      <p className="text-[36px] text-[#4581FF] font-bold ">
        $ {props.arr.price}
      </p>
      {/* line */}
      <div className="border-t border-[#9b9eaa] w-[70%] border-[2px]"></div>{" "}
      
      <p className={`text-lg font-medium`}>Free Setup</p>
      <p className={`text-lg font-medium`}>Bandwidth Limit 10 GB</p>
      <p className={`text-lg font-medium`}>20 User Connection</p>
      <p
        className={`text-lg font-medium ${
          props.arr.report ? "" : "text-[#83879b]"
        } `}
      >
        Analytics Report
      </p>
      <p
        className={`text-lg font-medium ${
          props.arr.access ? "" : "text-[#83879b]"
        }`}
      >
        Public API Access
      </p>
      <p
        className={`text-lg font-medium ${
          props.arr.intregation ? "" : "text-[#83879b]"
        }`}
      >
        Plugins Intregation
      </p>
      <p
        className={`text-lg font-medium ${
          props.arr.management ? "" : "text-[#83879b]"
        }`}
      >
        Custom Content Management
      </p>
      <div className="border-t border-[#9b9eaa] w-[70%] border-[2px] "></div>{" "}
      <button
        type="button"
        onClick={()=>handleClick(props.arr.id)}
        className="w-[180px] h-[60px] text-base text-[#4581FF] rounded-[30px] flex justify-center items-center hover:text-white hover:bg-[#4581FF] border-[3px] border-[#4581FF]"
      >
        Get Started
      </button>
      <Link href="#" className="text-sm font-bold decoration-solid underline ">
        Start Your 30 Day Free Trial
      </Link >
    </div>
  );
}
