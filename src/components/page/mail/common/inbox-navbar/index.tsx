"use client";
import { styled, alpha } from "@mui/material/styles";
import { Box, Button, InputBase, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SyncProblemIcon from "@mui/icons-material/SyncProblem";
import DeleteIcon from "@mui/icons-material/Delete";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function InboxNavbar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "40px",
        marginBottom: "32px",
      }}
    >
      <Search sx={{ padding: "0 !important", margin: "0 !important" }}>
        <SearchIconWrapper>
          <SearchIcon sx={{ color: "gray" }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search mail"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          borderRadius: "12px",
          borderColor: "rgba(213, 213, 213, 1)",
          borderWidth: "0.6px",
          borderStyle: "solid",
          overflow: "hidden",
        }}
      >
        <Tooltip title="Download">
          <Button
            sx={{
              borderRightWidth: "0.6px",
              borderRightColor: "rgba(213, 213, 213, 1)",
              borderRightStyle: "solid",
              borderRadius: "0 !important",
            }}
          >
            <ArrowDownwardIcon sx={{ color: "black" }} />
          </Button>
        </Tooltip>
        <Tooltip title="Warning">
          <Button
            sx={{
              borderRightWidth: "0.6px",
              borderRightColor: "rgba(213, 213, 213, 1)",
              borderRightStyle: "solid",
              borderRadius: "0 !important",
            }}
          >
            <SyncProblemIcon sx={{ color: "black" }} />
          </Button>
        </Tooltip>
        <Tooltip title="Delete">
          <Button>
            <DeleteIcon sx={{ color: "black" }} />
          </Button>
        </Tooltip>
      </Box>
    </Box>
  );
}
