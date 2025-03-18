"use client";

import CreateMemberForm from "@/components/page/team/create-member";
import { Typography } from "@mui/material";

export default function CreateContact() {
  return (
    <div className="w-full pb-2 flex flex-col gap-6">
      <Typography
        sx={{
          mb: "12px",
          mt: "20px",
          fontSize: 32,
          lineHeight: "43.5px",
          textAlign: "start",
          fontWeight: 700,
        }}
      >
        Add New Member
      </Typography>
      <CreateMemberForm/>
    </div>
  );
}
