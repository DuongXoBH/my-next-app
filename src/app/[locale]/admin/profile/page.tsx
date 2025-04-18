"use client";

import { useFetchUserApiBySession } from "@/api-hooks/user";
import BoxLoading from "@/components/common/global/box-loading";
import PageHeader from "@/components/common/global/page-header";
import UpdateContactComponent from "@/components/page/admin/contact/update-contact";
import { userToken } from "@/stores/auth";
import { useAtom } from "jotai";

export default function ProfilePage() {
  const [token] = useAtom(userToken);
  const { data: auth, isLoading } = useFetchUserApiBySession(token);
  if (isLoading) return <BoxLoading />;
  return (
    <div>
      <PageHeader page="Profile" />
      <UpdateContactComponent userId={auth.id} />
    </div>
  );
}
