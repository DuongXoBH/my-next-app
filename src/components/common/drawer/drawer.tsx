"use client";

import Box from "@mui/material/Box";
import { useAtom } from "jotai";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import { CircularProgress } from "@mui/material";
import { sidebarAtom } from "@/stores/admin";
import { useEffect, useState } from "react";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  const [open] = useAtom(sidebarAtom);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

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
        <div className="bg-[#F5F6FA] w-full min-h-[92vh] flex flex-col">
          <div className="container w-full pt-2 pb-4 overflow-auto">
            {children}
          </div>
        </div>
      </Box>
    </div>
  );
}
