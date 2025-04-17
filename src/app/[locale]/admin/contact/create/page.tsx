"use client";

import PageHeader from "@/components/common/global/page-header";
import CreateContactForm from "@/components/page/admin/contact/create-contact";

export default function CreateContact() {
  return (
    <div className="w-full pb-2 flex flex-col gap-6">
      <PageHeader page="AddNewContact" />
      <CreateContactForm />
    </div>
  );
}
