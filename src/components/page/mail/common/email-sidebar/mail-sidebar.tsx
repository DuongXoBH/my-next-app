"use client";

import { EMAILPAGES } from "@/constants/mail";
import useHash from "@/hooks/use-hash";
import { labelAtom, labelColor } from "@/store/mail";
import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useAtom } from "jotai";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import translationData from "@/messages/en.json";
import CreateMail from "../../inbox/create-mail";
type IMailSidebar = keyof typeof translationData.Inbox;

export default function EmailSidebar() {
  const [label, setLabel] = useAtom(labelAtom);
  const hash = useHash();
  const t = useTranslations("Inbox");
  const [labels] = useAtom(labelColor);
  return (
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
        <CreateMail />
      </Toolbar>

      {/* My Email List */}
      <List>
        <ListItem>
          <Typography
            sx={{ fontWeight: "600", fontSize: "1rem", color: "black" }}
          >
            {t("email")}
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
                <div className="relative w-5 h-5 mr-8">
                  <Image
                    src={element.icon}
                    alt={element.text}
                    fill
                    className="object-contain"
                  />
                  {hash === element.href.trim() && (
                    <div className="absolute inset-0 bg-blue-700 mix-blend-screen opacity-70" />
                  )}
                </div>
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
                  {t(element.text as IMailSidebar)}
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
            sx={{
              fontWeight: "600",
              fontSize: "1rem",
              color: "black",
              textTransform: "capitalize",
            }}
          >
            {t("label")}
          </Typography>
        </ListItem>
        {labels?.map((element, index) => {
          const check = element.name === label;
          return (
            <ListItem
              key={`label-1-${index}`}
              sx={{
                overflow: "hidden",
              }}
              disablePadding
            >
              <Button
                className={`w-full h-12 flex flex-row justify-start mx-2 px-4 rounded-lg ${check ? `bg-blue-400` : ""}`}
                onClick={() => {
                  setLabel(element.name);
                }}
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
          );
        })}
        <ListItem
          sx={{
            overflow: "hidden",
          }}
          disablePadding
        >
          <Button
            className="w-full h-12 flex flex-row justify-start mx-2 px-4"
            onClick={() => {
              setLabel(null);
            }}
          >
            <Image
              alt=""
              src="/ic-replay-24px.png"
              width={24}
              height={24}
            ></Image>
            <p className="normal-case text-black ml-8 text-sm">{t("reset")}</p>
          </Button>
        </ListItem>
      </List>
      {/* <Divider /> */}
    </Drawer>
  );
}
