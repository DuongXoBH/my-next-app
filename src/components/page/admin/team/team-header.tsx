"use client";

import LinkTag from "@/components/common/globals/link-tag";
import PageHeader from "@/components/common/globals/page-header";
import React from "react";

const TeamHeader: React.FC = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full">
      <PageHeader page="Team" />
      <LinkTag
        className="w-[147px] h-12 bg-[#4880FF] text-white rounded-md text-sm flex items-center justify-center transform-none"
        href="/admin/team/create-member"
      >
        Add New Member
      </LinkTag>{" "}
    </div>
  );
};

export default TeamHeader;
