import { sidebarAtom } from "@/stores/admin";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Tooltip,
} from "@mui/material";
import { useAtom } from "jotai";
import { usePathname } from "next/navigation";
import React from "react";
import Note from "./sidebar-node";
import LinkTag from "../../globals/link-tag";
import Image from "next/image";

export default function ListNode({
  list,
}: {
  list: {
    text: string;
    icon: string;
    href: string;
  }[];
}) {
  const [open] = useAtom(sidebarAtom);
  const pathName = usePathname();
  return (
    <List
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {list.map((element, index) => (
        <ListItem
          key={`dashboard-1-${index}`}
          sx={{
            marginY: "5px",
            color: pathName.includes(element.href) ? "white" : "black",
            backgroundColor: pathName.includes(element.href)
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
            className={`hover:invert ${open ? "w-[224px]" : "w-[78px]"}`}
            href={element.href}
          >
            <Tooltip title={open ? "" : element.text}>
              <ListItemButton
                sx={{
                  overflow: "hidden",
                  padding: open ? "30px" : "0 12px",
                  height: "50px",
                  width: open ? "224px" : "78px",
                }}
              >
                <ListItemIcon
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Image
                    alt={element.text}
                    src={element.icon}
                    width={18}
                    height={18}
                    className={`filter grayscale brightness-0 ${
                      pathName.includes(element.href.trim()) ? "invert" : ""
                    }`}
                  ></Image>
                </ListItemIcon>
                {open && <Note page={element.text} />}
              </ListItemButton>
            </Tooltip>
          </LinkTag>
        </ListItem>
      ))}
    </List>
  );
}
