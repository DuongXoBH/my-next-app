"use client"

import { useTranslations } from "next-intl";
import { useState } from "react";
import { toast } from "react-toastify";

export default function CopyButton({copyText}: {copyText: string}) {
    const t = useTranslations("Global")
    const [copied, setCopied] = useState(false);
    const handleCopy = async () => {
        if(document.hasFocus()){
            try {
                await navigator.clipboard.writeText(copyText);
                setCopied(true);
                toast(`${t("copied to clipboard")}`)
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                console.error("Failed to copy: ", err);
            }
        }else{
            toast.error(`${t("documenet is not focused")}`)
        }
    }
    return (
        <button
        onClick={handleCopy}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition relative"
      >
        {copied ? t("copied") : t("copy")}
      </button>
    )
        
}