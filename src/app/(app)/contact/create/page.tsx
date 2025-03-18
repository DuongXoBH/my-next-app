"use client";

import CreateContactForm from "@/components/page/contact/create-contact";
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
        Add New Contact
      </Typography>
      <CreateContactForm />
    </div>
  );
}
