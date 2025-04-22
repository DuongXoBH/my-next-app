"use client";

import PageHeader from "@/components/common/globals/page-header";
import UpdateContactComponent from "@/components/page/admin/contact/update-contact";
import { use } from "react";

export default function UpdateContact({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  return (
    <div>
      <PageHeader page="UpdateContact" />
      <UpdateContactComponent userId={id} />
    </div>
  );
}
