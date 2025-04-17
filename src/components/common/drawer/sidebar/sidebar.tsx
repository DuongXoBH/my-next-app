"use client";

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
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useAtom } from "jotai";
import { userToken } from "@/stores/users";
import { sidebarAtom } from "@/stores";
import Link from "next/link";
import { Tooltip } from "@mui/material";
import ListNode from "./sidebar-list";
import { useTranslations } from "next-intl";
import LinkTag from "../../global/link-tag";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const t = useTranslations("Global");
  const pathName = usePathname();
  const [, setUser] = useAtom(userToken);
  const [open] = useAtom(sidebarAtom);

  return (
    <Drawer
      sx={{
        width: open ? 240 : 76,
        flexShrink: 0,
        maxHeight: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        "& .MuiDrawer-paper": {
          width: open ? 240 : 76,
          boxSizing: "border-box",
          position: "fixed",
          overflowX: "hidden",
          overflowY: "auto",
          marginLeft: "8px",
          borderRight: "none",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "white",
          },
          "&:hover": open
            ? {
                "&::-webkit-scrollbar": {
                  width: "8px",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#9F9F9F",
                  borderRadius: "2px",
                },
              }
            : {},
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
          sx={{
            marginY: "5px",
            color: pathName.includes("/settings") ? "white" : "black",
            backgroundColor: pathName.includes("/settings")
              ? "rgba(72, 128, 255, 1)"
              : "inherit",
            overflow: "hidden",
            height: "50px",
            width: open ? "224px" : "78px",
            borderRadius: open ? "8px" : "0",
            ":hover": {
              backgroundColor: "rgba(72, 128, 255, 1)",
              "& .MuiListItemButton-root": {
                backgroundColor: "inherit",
              },
              "& .MuiSvgIcon-root": {
                color: "white",
              },
            },
          }}
          disablePadding
        >
          <LinkTag
            href="/admin/settings"
            className={`hover:invert ${open ? "w-[224px]" : "w-[78px]"}`}
          >
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
                  <Image
                    alt="settings"
                    src="/sidebar/settings-icon.png"
                    width={20}
                    height={20}
                    className={`filter grayscale brightness-0 ${
                      pathName.includes("/settings") ? "invert" : ""
                    }`}
                  ></Image>
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
          sx={{
            marginY: "5px",
            overflow: "hidden",
            height: "50px",
            width: open ? "224px" : "78px",
            borderRadius: open ? "8px" : "0",
            ":hover": {
              backgroundColor: "rgba(72, 128, 255, 1)",
              "& .MuiListItemButton-root": {
                backgroundColor: "inherit",
                color: "white",
              },
              "& .MuiSvgIcon-root": {
                color: "white",
              },
            },
          }}
          disablePadding
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
