import MemberList from "@/components/page/team/member-list";
import TeamHeader from "@/components/page/team/team-header";
import React from "react";

const Team: React.FC = () => {
  return (
    <div className="w-full pb-2">
      <TeamHeader/>
      <MemberList/>
    </div>
  );
};

export default Team;
