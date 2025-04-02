"use client"

import InvoicePrintComponent from "@/components/page/invoice/invoice-print";
import { useEffect } from "react";

export default function InvoicePrintPage(){
    useEffect(()=>{
        if (document.visibilityState === "visible") {
            window.print();
            window.close();
        }
    },[])
    return (
        <InvoicePrintComponent/>
    )
}