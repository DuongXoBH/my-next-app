import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  Button,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useAtom } from "jotai";
import { userToken } from "@/store/user";
import { sidebarAtom } from "@/store";
import { useFetchUserApiBySession } from "@/api-hooks/user";
import Image from "next/image";
import { HEADINGMENU, IHeadingMenu } from "@/constants/common/header";
import LanguageSwitcher from "./locale-button";
import LinkTag from "../../global/link-tag";
import { useState } from "react";
import CartIcon from "./shopping-cart";

export default function Header() {
  const [token] = useAtom(userToken);
  const [dashboardOpen, setDashboardOpen] = useAtom(sidebarAtom);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  console.log("🚀 ~ Header ~ searchValue:", searchValue);

  const { data: auth } = useFetchUserApiBySession(token);

  const settings = HEADINGMENU;

  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);

  const open2 = Boolean(anchorEl2);

  const handleClickMenu2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl2(null);
  };
  return (
    <div id="#top" className="container">
      <Box
        sx={{
          width: "100%",
          height: 70,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "white",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          {/* Menu Button */}
          <Toolbar sx={{ padding: "0px !important" }}>
            <Tooltip title={dashboardOpen ? "Close menu" : "Open menu"}>
              <Button
                onClick={() => {
                  setDashboardOpen(!dashboardOpen);
                }}
                sx={{ paddingLeft: "0px" }}
              >
                <MenuIcon sx={{ color: "black" }} />
              </Button>
            </Tooltip>
          </Toolbar>

          {/* Search area */}
          <Toolbar sx={{ padding: "0px !important" }}>
            <TextField
              placeholder="Search "
              variant="outlined"
              size="small"
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="disabled" />
                  </InputAdornment>
                ),
                sx: {
                  fontSize: "14px",
                  width: "35%",
                  minWidth: "388px",
                  borderRadius: "50px",
                  backgroundColor: "white",
                },
              }}
            />
          </Toolbar>
        </Box>

        <div className="flex flex-row gap-10">
          {/* Shopping Cart Button*/}
          <LinkTag href="/shopping-cart" className="flex items-center">
            <CartIcon />
          </LinkTag>
          {/* Language */}
          <LanguageSwitcher />

          {/* Setting button */}
          {auth && (
            <Box
              sx={{
                flexGrow: 0,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleClickMenu2}
                  sx={{
                    p: 0,
                    gap: "5px",
                    ":hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <Avatar alt="Remy Sharp" src={auth?.avatar} />
                  <Box sx={{ marginRight: "10px" }}>
                    <Typography sx={{ color: "black", fontWeight: "600" }}>
                      {auth?.name}
                    </Typography>
                    <Typography sx={{ color: "gray", fontWeight: "500" }}>
                      {auth?.role}
                    </Typography>
                  </Box>
                  <Image alt="" src="/More.svg" width={25} height={25}></Image>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px", borderRadius: "14px", overflow: "hidden" }}
                id="menu-appbar"
                anchorEl={anchorEl2}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open2}
                onClose={handleClose}
              >
                {settings.map((setting: IHeadingMenu, index: number) => (
                  <MenuItem key={`locale-${index}`} onClick={handleClose}>
                    <LinkTag
                      href={setting.href}
                      className="flex flex-row gap-3 py-auto h-full justify-center items-center"
                    >
                      <div className="w-7 h-7 flex items-center">
                        <Image
                          alt=""
                          src={setting.img}
                          width={16}
                          height={16}
                        ></Image>
                      </div>
                      <Typography sx={{ textAlign: "center" }}>
                        {setting.text}
                      </Typography>
                    </LinkTag>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </div>
      </Box>
    </div>
  );
}
