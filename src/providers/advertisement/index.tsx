"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
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
      <div className="w-full">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-[800px]">
            <DialogTitle></DialogTitle>
            <div className="w-[750px] h-[400px] flex justify-center items-center">
              <Image
                alt=""
                src="/advertisement/advertisement.png"
                width={750}
                height={400}
              ></Image>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
