// src/app/mail/u/[userId]/page.tsx
"use client";

import InboxList from "@/components/page/mail/inbox/mail";
import InboxNavbar from "@/components/page/mail/common/inbox-navbar";
import useHash from "@/hooks/use-hash";
import { Typography } from "@mui/material";
import EmailSidebar from "@/components/page/mail/common/email-sidebar/mail-sidebar";

export default function MailPage() {
  const hash = useHash();
  const title = hash ? hash.slice(1) :"inbox" ;
  return (
    
    <div className="w-full pb-2">
      <Typography
        sx={{
          mb: 1,
          fontSize: 32,
          lineHeight: "43.5px",
          textAlign: "start",
          fontWeight: 600,
        }}
      >
        Inbox
      </Typography>
      <EmailSidebar>
        <InboxNavbar />
        <InboxList title={title}/>
      </EmailSidebar>
    </div>
  );
}
