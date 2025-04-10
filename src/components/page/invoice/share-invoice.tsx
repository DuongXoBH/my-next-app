"use client";

import { Dialog, Divider, Tooltip } from "@mui/material";
import { useTranslations } from "next-intl";
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  TwitterShareButton,
  TelegramShareButton,
  EmailShareButton,
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  TwitterIcon,
  TelegramIcon,
} from "react-share";
import Image from "next/image";
import { useState } from "react";
import CopyButton from "@/components/common/global/copy-button";
import LinkTag from "@/components/common/global/link-tag";

export default function ShareInvoice({ shareUrl }: { shareUrl?: string }) {
  const t = useTranslations("Invoice");
  const messengerAppId = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || "";
  const [open, setOpen] = useState(false);
  if (!shareUrl) return null;
  const title = t("share invoice title");
  return (
    <div>
      {/*open dialog button */}
      <Tooltip title={t("send")}>
        <button
          onClick={() => setOpen(true)}
          className="w-[174px] h-[54px] rounded-xl bg-[#4880FF] flex flex-row items-center justify-end gap-10 pr-2 text-white font-medium capitalize"
        >
          {t("send")}
          <Image alt="" src="/send-button.png" width={46} height={38}></Image>
        </button>
      </Tooltip>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        maxWidth="xl"
        PaperComponent={({ children }) => (
          <div className="min-w-[540px] min-h-[240px] rounded-lg bg-white p-3 flex flex-col gap-8">
            {children}
          </div>
        )}
      >
        <p className="w-full text-2xl font-bold text-center">
          {t("share invoice title")}
        </p>
        <Divider />
        <div className="flex gap-4 items-center w-full justify-center">
          <FacebookShareButton url={shareUrl} about={title}>
            <FacebookIcon size={60} round />
          </FacebookShareButton>

          <FacebookMessengerShareButton url={shareUrl} appId={messengerAppId}>
            <FacebookMessengerIcon size={60} round />
          </FacebookMessengerShareButton>

          <EmailShareButton url={shareUrl} subject={title}>
            <EmailIcon size={60} round />
          </EmailShareButton>

          <TwitterShareButton url={shareUrl} title={title}>
            <TwitterIcon size={60} round />
          </TwitterShareButton>

          <TelegramShareButton url={shareUrl} title={title}>
            <TelegramIcon size={60} round />
          </TelegramShareButton>
        </div>
        <Divider />
        <div className="w-full flex flex-row justify-between items-center rounded-lg p-4 border border-gray-300 text-black">
          <LinkTag href={shareUrl} className="hover:underline hover:text-blue-600">{shareUrl}</LinkTag>
          <CopyButton copyText={shareUrl}/>
        </div>
      </Dialog>
    </div>
  );
}
