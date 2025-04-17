"use client";

import InboxNavbar from "@/components/page/admin/mail/common/inbox-navbar";
import InboxList from "@/components/page/admin/mail/inbox/mail";
import useHash from "@/hooks/use-hash";
export default function MailPage() {
  const hash = useHash();
  const title = hash ? hash.slice(1) : "inbox";
  return (
    <div className="w-full">
      <div className="w-full min-h-[100px] flex flex-col rounded-xl bg-white gap-8">
        <InboxNavbar />
        <InboxList title={title} />{" "}
      </div>
    </div>
  );
}
