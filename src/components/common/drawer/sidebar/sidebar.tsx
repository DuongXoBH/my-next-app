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
import { usePathname } from "next/navigation";
import { userToken } from "@/store/user";
import { sidebarAtom } from "@/store";
import Link from "next/link";
import { Tooltip } from "@mui/material";

export default function Sidebar() {
  const [, setUser] = useAtom(userToken);
  const [open] = useAtom(sidebarAtom);
  const pathName = usePathname();

  return (
    <Drawer
      sx={{
        width: open ? 240 : 88,
        flexShrink: 0,
        overflow: "hidden",
        "& .MuiDrawer-paper": {
          width: open ? 240 : 88,
          boxSizing: "border-box",
          position: "relative",
        },
      }}
      variant="permanent"
    >
      <Toolbar sx={{ pl: 2, py: 1, height: "74px" }}>
        <Link
          href="/"
          className="w-full h-full flex justify-center items-center pl-5"
        >
          {open && (
            <Image
              src="/Logo.svg"
              alt="Logo"
              width={128}
              height={28}
              priority
            ></Image>
          )}
        </Link>
      </Toolbar>
      {/* <Divider /> */}
      <List
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {DASHBOARD.map((element, index) => (
          <ListItem
            key={`dashboard-1-${index}`}
            sx={{
              color: pathName === element.href ? "white" : "black",
              backgroundColor:
                pathName === element.href ? "rgba(72, 128, 255, 1)" : "inherit",
              overflow: "hidden",
              height: "50px",
              width: open ? "180px" : "88px",
              borderRadius: open ? "8px" : "0",
            }}
            disablePadding
          >
            <Tooltip title={open ? "" : `${element.text}`}>
              <Link className="w-[240px]" href={element.href}>
                <ListItemButton
                  sx={{
                    overflow: "hidden",
                    padding: open ? "0" : "0 16px",
                    height: "50px",
                  }}
                >
                  <ListItemIcon
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    {React.createElement(element.icon, {
                      sx: {
                        color:
                          pathName === element.href.trim() ? "white" : "black",
                        width: "24px",
                      },
                    })}
                  </ListItemIcon>
                  {open && (
                    <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
                      {element.text}
                    </Typography>
                  )}
                </ListItemButton>
              </Link>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <ListItem>
          {open && (
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "0.75rem",
                color: "gray",
                paddingLeft: "16px",
              }}
            >
              PAGES
            </Typography>
          )}
        </ListItem>
        {PAGE_DASHBOARD.map((element, index) => (
          <ListItem
            key={`dashboard-1-${index}`}
            sx={{
              color: pathName === element.href ? "white" : "black",
              backgroundColor:
                pathName === element.href ? "rgba(72, 128, 255, 1)" : "inherit",
              overflow: "hidden",
              height: "50px",
              width: open ? "180px" : "88px",
              borderRadius: open ? "8px" : "0",
            }}
            disablePadding
          >
            <Tooltip title={open ? "" : `${element.text}`}>
              <Link className="w-[240px]" href={element.href}>
                <ListItemButton
                  sx={{
                    overflow: "hidden",
                    padding: open ? "0" : "0 16px",
                    height: "50px",
                  }}
                >
                  <ListItemIcon
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    {React.createElement(element.icon, {
                      sx: {
                        color:
                          pathName === element.href.trim() ? "white" : "black",
                        width: "24px",
                      },
                    })}
                  </ListItemIcon>
                  {open && (
                    <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
                      {element.text}
                    </Typography>
                  )}
                </ListItemButton>
              </Link>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <ListItem
          disablePadding
          sx={{ height: "50px", width: open ? "180px" : "88px" }}
        >
          <Tooltip title={open ? "" : "Settings"}>
            <ListItemButton
              sx={{
                overflow: "hidden",
                padding: open ? "0" : "0 16px",
                height: "50px",
              }}
            >
              <ListItemIcon sx={{ display: "flex", justifyContent: "center" }}>
                <SettingsIcon sx={{ color: "black" }} />
              </ListItemIcon>
              {open && (
                <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
                  Settings
                </Typography>
              )}
            </ListItemButton>
          </Tooltip>
        </ListItem>
        <ListItem
          disablePadding
          sx={{ height: "50px", width: open ? "180px" : "88px" }}
        >
          <Tooltip title={open ? "" : "Logout"}>
            <ListItemButton
              sx={{
                overflow: "hidden",
                padding: open ? "0" : "0 16px",
                height: "50px",
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
                  Logout
                </Typography>
              )}
            </ListItemButton>
          </Tooltip>
        </ListItem>
      </List>
    </Drawer>
  );
}
