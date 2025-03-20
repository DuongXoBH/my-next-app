"use client";

import UpdateContactComponent from "@/components/page/contact/update-contact";
import { use } from "react";

export default function UpdateContact({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const {id} = use(params);
  return (
    <UpdateContactComponent userId={id}/>
  )
}
