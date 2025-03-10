"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { useAtom } from "jotai";
import { userToken } from "@/store/user";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import { CircularProgress } from "@mui/material";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  const [user] = useAtom(userToken);
  const route = useRouter();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (!user) {
        toast.error("You are not signed in");
        route.push("login");
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [user, route]);

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
    <div className="flex overflow-auto !p-0 w-full">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <Header />
        {/* Main */}
        <div className="bg-[#F5F6FA] w-full">
          <div className="container">
            <Box
              sx={{
                width: "100%",
                paddingTop: 2,
                paddingBottom: 4,
              }}
            >
              {children}
            </Box>
          </div>
        </div>
      </Box>
    </div>
  );
}
