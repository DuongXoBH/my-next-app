import { sidebarAtom } from "@/store";
import {
    List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  SvgIconProps,
  Tooltip,
  Typography,
} from "@mui/material";
import { useAtom } from "jotai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function ListNode({
  list,
}: {
  list: {
    text: string;
    icon: React.FC<SvgIconProps>;
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
              color: pathName === element.href ? "white" : "black",
              backgroundColor:
                pathName === element.href ? "rgba(72, 128, 255, 1)" : "inherit",
              overflow: "hidden",
              height: "50px",
              width: open ? "240px" : "88px",
              borderRadius: open ? "8px" : "0",
              ":hover": {
                width: open ? "240px" : "88px",
                backgroundColor: "rgba(72, 128, 255, 1)",
                color: "white",
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
            <Tooltip title={open ? "" : `${element.text}`}>
              <Link className="w-[240px]" href={element.href}>
                <ListItemButton
                  sx={{
                    overflow: "hidden",
                    padding: open ? "30px" : "0 16px",
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
  );
}
