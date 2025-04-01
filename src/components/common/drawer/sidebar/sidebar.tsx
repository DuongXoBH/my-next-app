"use client";

import * as React from "react";
import Image from "next/image";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { DASHBOARD, PAGE_DASHBOARD } from "@/constants/dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useAtom } from "jotai";
import { userToken } from "@/store/user";
import { sidebarAtom } from "@/store";
import Link from "next/link";
import { Tooltip } from "@mui/material";
import ListNode from "./sidebar-list";
import { useTranslations } from "next-intl";
import LinkTag from "../../global/link-tag";

export default function Sidebar() {
  const t = useTranslations("Global");
  const [, setUser] = useAtom(userToken);
  const [open] = useAtom(sidebarAtom);

  return (
    <Drawer
      sx={{
        width: open ? 240 : 80,
        flexShrink: 0,
        maxHeight: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        "&::-webkit-scrollbar": {
          width: "4px",
          opacity: 0,
          transition: "opacity 0.3s ease",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "3px",
          opacity: 0, 
          transition: "opacity 0.3s ease",
        },
        "&:hover": {
          "&::-webkit-scrollbar": {
            opacity: 1, 
          },
          "&::-webkit-scrollbar-thumb": {
            opacity: 1,
          },
        },
        "& .MuiDrawer-paper": {
          width: open ? 240 : 80,
          boxSizing: "border-box",
          position: "fixed",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "4px",
            opacity: 0,
            transition: "opacity 0.3s ease",
          },       
        },
      }}
      variant="permanent"
    >
      <Toolbar sx={{ pl: 2, py: 1, height: "74px" }}>
        <Link
          href="/"
          className={`w-[224px] h-full flex justify-center items-center overflow-hidden ${open ? "pl-5" : ""}`}
        >
          {open ? (
            <Image
              src="/Logo.svg"
              alt="Logo"
              width={128}
              height={28}
              priority
            ></Image>
          ) : (
            <Image
              src="/logo47.png"
              alt="Logo"
              width={39}
              height={39}
              priority
            ></Image>
          )}
        </Link>
      </Toolbar>

      <ListNode list={DASHBOARD} />
      <Divider />

      {open && (
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "0.75rem",
            color: "gray",
            paddingLeft: "16px",
            mt: "16px",
            textTransform: "uppercase",
          }}
        >
          {t("page")}
        </Typography>
      )}

      <ListNode list={PAGE_DASHBOARD} />
      <Divider />

      <List
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {/* Settings Items */}
        <ListItem
          disablePadding
          sx={{
            height: "60px",
            width: open ? "224px" : "78px",
            borderRadius: "8px",
            overflowY: "auto",
            ":hover": {
              backgroundColor: "rgba(72, 128, 255, 1)",
              color: "white",
              "& .MuiSvgIcon-root": {
                color: "white",
              },
            },
          }}
        >
          <LinkTag href="/settings" className={open ? "w-[224px]" : "w-[78px]"}>
            <Tooltip title={open ? "" : "Settings"}>
              <ListItemButton
                sx={{
                  overflow: "hidden",
                  padding: open ? "30px" : "0 12px",
                  height: "60px",
                }}
              >
                <ListItemIcon
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <SettingsIcon sx={{ color: "black" }} />
                </ListItemIcon>
                {open && (
                  <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
                    {t("settings")}
                  </Typography>
                )}
              </ListItemButton>
            </Tooltip>
          </LinkTag>
        </ListItem>

        {/* Logout Items */}
        <ListItem
          disablePadding
          sx={{
            height: "60px",
            width: open ? "224px" : "78px",
            borderRadius: "8px",
            ":hover": {
              backgroundColor: "rgba(72, 128, 255, 1)",
              color: "white",
              "& .MuiSvgIcon-root": {
                color: "white",
              },
            },
          }}
        >
          <Tooltip title={open ? "" : "Logout"}>
            <ListItemButton
              sx={{
                overflow: "hidden",
                padding: open ? "30px" : "0 12px",
                height: "60px",
              }}
              onClick={() => {
                setUser("");
              }}
            >
              <ListItemIcon sx={{ display: "flex", justifyContent: "center" }}>
                <PowerSettingsNewIcon sx={{ color: "black" }} />
              </ListItemIcon>
              {open && (
                <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
                  {t("logout")}
                </Typography>
              )}
            </ListItemButton>
          </Tooltip>
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
}
