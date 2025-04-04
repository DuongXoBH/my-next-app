"use client"

import InvoiceMainComponent from "@/components/page/invoice/invoice-main";
import { useEffect } from "react";

export default function InvoicePrintPage(){
    useEffect(()=>{
        if (document.visibilityState === "visible") {
            window.print();
            window.close();
        }
    },[])
    return (
        <InvoiceMainComponent/>
    )
}