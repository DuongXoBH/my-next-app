"use client";

import { Dialog } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function AdvertisementProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      {children}
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        maxWidth="xl"
        PaperComponent={({ children }) => (
          <div className="min-w-[750px] min-h-[400px]">{children}</div>
        )}
      >
        <Image
          alt=""
          src="/advertisement/advertisement.png"
          width={750}
          height={400}
        ></Image>
      </Dialog>
    </div>
  );
}
