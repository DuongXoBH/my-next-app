"use client";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Toolbar,
  Tooltip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SyncProblemIcon from "@mui/icons-material/SyncProblem";
import DeleteIcon from "@mui/icons-material/Delete";

export default function InboxNavbar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "24px",
        paddingX:"24px"
      }}
    >
      {/* Search area */}
      <Toolbar sx={{ padding: "0px !important" }}>
        <TextField
          placeholder="Search mail "
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="disabled" />
              </InputAdornment>
            ),
            sx: {
              fontSize: "14px",
              width: "25%",
              minWidth: "288px",
              borderRadius: "50px",
              backgroundColor: "#F5F6FA",
            },
          }}
        />
      </Toolbar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          borderRadius: "12px",
          borderColor: "rgba(213, 213, 213, 1)",
          borderWidth: "0.6px",
          height:"40px",
          backgroundColor: "#F5F6FA",
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
            <ArrowDownwardIcon sx={{ color: "black", width: "16px" }} />
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
            <SyncProblemIcon sx={{ color: "black", width: "16px" }} />
          </Button>
        </Tooltip>
        <Tooltip title="Delete">
          <Button>
            <DeleteIcon sx={{ color: "black", width: "16px" }} />
          </Button>
        </Tooltip>
      </Box>
    </Box>
  );
}
