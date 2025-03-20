import PageHeader from "@/components/common/page-header";
import Link from "next/link";
import React from "react";

const TeamHeader: React.FC = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full">
      <PageHeader page="Team"/>
      <Link className="w-[147px] h-12 bg-[#4880FF] text-white rounded-md text-sm flex items-center justify-center transform-none"
        href="/team/create-member"
      >
        Add New Member
      </Link>{" "}
    </div>
  );
};

export default TeamHeader;
