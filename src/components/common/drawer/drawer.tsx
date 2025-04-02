"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { useAtom } from "jotai";
import { userToken } from "@/store/user";
import { toast } from "react-toastify";
import { usePathname, useRouter } from "next/navigation";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import { CircularProgress } from "@mui/material";
import { getPathname } from "@/i18n/navigation";
import { sidebarAtom } from "@/store";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  const [open] = useAtom(sidebarAtom);
  const [user] = useAtom(userToken);
  const route = useRouter();
  const [loading, setLoading] = React.useState(true);
  const pathName = usePathname();

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (!user) {
        toast.error("You are not signed in");
        route.push(
          getPathname({
            href: "/login",
            locale: pathName.split("/")[1] as "vi" | "en",
          })
        );
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [user, route, pathName]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress size={60} />
      </Box>
    );
  }

  return (
    <div className="flex flex-row overflow-hidden !p-0 w-full">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          marginLeft: open ? "240px" : "82px",
          transition: "margin 0.1s ease-in-out",
        }}
      >
        {/* Header */}
        <Header />

        {/* Main */}
        <div className="bg-[#F5F6FA] w-full">
          <div className="container w-full pt-2 pb-4 overflow-auto">
            {children}
          </div>
        </div>
      </Box>
    </div>
  );
}
