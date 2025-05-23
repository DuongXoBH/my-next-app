import EmailSidebar from "@/components/page/admin/mail/common/email-sidebar/mail-sidebar";
import PageHeader from "@/components/common/globals/page-header";

export default function MailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full pb-2">
      <PageHeader page="Inbox" />
      <div className="w-full container flex flex-row gap-5">
        <EmailSidebar />
        {children}
      </div>
    </div>
  );
}
