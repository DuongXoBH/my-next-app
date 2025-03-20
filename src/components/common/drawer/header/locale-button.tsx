"use client";
import { IHeadingMenu, LOCALE } from "@/constants/common/header";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
  const [language, setLanguage] = useState<IHeadingMenu | null>();
  const settings = LOCALE;
  const open1 = Boolean(anchorEl1);
  useEffect(() => {
    setLanguage(
      settings.find((setting) => setting.href == pathname.slice(1, 3))
    );
  }, [pathname, setLanguage,settings]);
  const handleClickMenu1 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl1(null);
  };

  const switchLocale = (locale: string) => {
    const newPath = `/${locale}${pathname.replace(/^\/(en|vi)/, "")}`;
    return newPath;
  };

  return (

      <Box
        sx={{
          flexGrow: 0,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Tooltip title="Open Language Settings" sx={{ display:"flex", justifyContent:"center", alignItems:"center", width:"full" }}>
          <IconButton onClick={handleClickMenu1} sx={{ p: 0, gap: "5px" }}>
            <Avatar alt="Remy Sharp" src={language?.img} />
            <Box sx={{ marginRight: "5px" }}>
              <Typography sx={{ color: "gray", fontWeight: "600" }}>
                {language?.text}
              </Typography>
            </Box>
            <Image alt="" src="/More.svg" width={25} height={25}></Image>
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px", borderRadius: "14px", overflow: "hidden" }}
          id="menu-appbar"
          anchorEl={anchorEl1}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open1}
          onClose={handleClose}
        >
          <p>Select Language</p>
          <Divider />
          {settings.map((setting: IHeadingMenu, index: number) => (
            <MenuItem key={`locale-${index}`} onClick={handleClose}>
              <Link
                href={switchLocale(`${setting.href}`)}
                className="flex flex-row gap-3 py-auto h-full items-center"
              >
                <div className="w-10 h-7 flex items-center">
                  <Image
                    alt=""
                    src={setting.img}
                    width={44}
                    height={30}
                  ></Image>
                </div>
                <Typography sx={{ textAlign: "center" }}>
                  {setting.text}
                </Typography>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Box>
  );
}
