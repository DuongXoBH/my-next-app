import {  Typography } from "@mui/material";
import Link from "next/link";

export default function ContactHeader() {
  return (
    <div className="flex justify-between items-center mt-4 mb-10">
      <Typography
        sx={{
          mb: 1,
          fontSize: 32,
          lineHeight: "43.5px",
          textAlign: "start",
          fontWeight: 700,
        }}
      >
        Contact
      </Typography>
      <Link
        className="w-[147px] h-[48px] bg-[#4880FF] text-white rounded-[6px] text-[14px] flex justify-center items-center"
        href="/contact/create"
      >
        Add New Contact
      </Link>
    </div>
  );
}
