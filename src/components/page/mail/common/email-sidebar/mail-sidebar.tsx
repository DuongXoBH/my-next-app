"use client";

import { EMAILPAGES } from "@/constants/mail";
import useHash from "@/hooks/use-hash";
import { labelColor } from "@/store/mail";
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  // ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useAtom } from "jotai";
import React from "react";

export default function EmailSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  const hash = useHash();
  const [labels] = useAtom(labelColor);
  console.log("🚀 ~ labels:", labels);
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Drawer
        sx={{
          width: 286,
          flexShrink: 0,
          borderRadius: "8px",
          borderColor: "rgba(213, 213, 213, 1)",
          borderWidth: "0.6px",
          borderStyle: "solid",
          overflow: "hidden",
          "& .MuiDrawer-paper": {
            width: 286,
            boxSizing: "border-box",
            position: "relative",
          },
        }}
        variant="permanent"
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              width: "238px",
              height: "43px",
              mt: "24px",
              bgcolor: "rgba(72, 128, 255, 1)",
              color: "white",
              borderRadius: "8px",
              textTransform: "none",
            }}
          >
            Compose
          </Button>
        </Toolbar>

        {/* My Email List */}
        <List>
          <ListItem>
            <Typography
              sx={{ fontWeight: "600", fontSize: "1rem", color: "black" }}
            >
              My Email
            </Typography>
          </ListItem>
          {EMAILPAGES.map((element, index) => (
            <ListItem
              key={`mail-1-${index}`}
              sx={{
                overflow: "hidden",
                ":active": { backgroundColor: "inherit" },
              }}
              disablePadding
            >
              <Button
                className="w-[286px] bg-inherit active:bg-none"
                href={element.href}
              >
                <ListItemButton
                  sx={{
                    overflow: "hidden",
                    textTransform: "none",
                    backgroundColor:
                      `${hash}` === element.href.trim()
                        ? "rgba(72, 128, 255, 0.1)"
                        : "inherit",
                  }}
                >
                  <ListItemIcon>
                    {React.createElement(element.icon, {
                      sx: {
                        color:
                          `${hash}` === element.href.trim()
                            ? "rgba(72, 128, 255, 1) !important"
                            : "black",
                      },
                    })}
                  </ListItemIcon>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "14px",
                      color:
                        `${hash}` === element.href.trim()
                          ? "rgba(72, 128, 255, 1)"
                          : "black",
                    }}
                  >
                    {element.text}
                  </Typography>
                </ListItemButton>
              </Button>
            </ListItem>
          ))}
        </List>
        <Divider />

        {/* Label List  */}
        <List>
          <ListItem>
            <Typography
              sx={{ fontWeight: "600", fontSize: "1rem", color: "black" }}
            >
              Label
            </Typography>
          </ListItem>
          {labels?.map((element, index) => (
            <ListItem
              key={`label-1-${index}`}
              sx={{
                overflow: "hidden",
              }}
              disablePadding
            >
              <Button
                className="w-full h-12 flex flex-row justify-start px-7"
                href="#"
              >
                <div
                  className="w-6 h-6 rounded-md border-2 transition-all"
                  style={{
                    backgroundColor: "white",
                    borderColor: element.attr,
                  }}
                ></div>
                <p className="normal-case text-black ml-8 text-sm">
                  {element.name}
                </p>
              </Button>
            </ListItem>
          ))}
        </List>
        {/* <Divider /> */}
      </Drawer>
      {/* Mail Main */}
      <Box
        sx={{
          width: "100%",
          minHeight: "screen",
          marginLeft: "21px",
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "24px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
