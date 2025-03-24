// src/app/mail/u/[userId]/page.tsx
"use client";

import InboxList from "@/components/page/mail/inbox/mail";
import InboxNavbar from "@/components/page/mail/common/inbox-navbar";
import useHash from "@/hooks/use-hash";
import EmailSidebar from "@/components/page/mail/common/email-sidebar/mail-sidebar";
import PageHeader from "@/components/common/global/page-header";

export default function MailPage() {
  const hash = useHash();
  const title = hash ? hash.slice(1) :"inbox" ;
  return (
    
    <div className="w-full pb-2">
      <PageHeader page="Inbox"/>
      <EmailSidebar>
        <InboxNavbar />
        <InboxList title={title}/>
      </EmailSidebar>
    </div>
  );
}
