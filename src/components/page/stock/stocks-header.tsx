"use client";

import { InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent, useState } from "react";


export default function StocksHeader() {
    const [searchValue, setSearchValue] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    };
    console.log("🚀 ~ ProductStocks ~ searchValue:", searchValue);
  return (
    <div className="flex justify-between items-center mt-4 mb-10">
      <Typography
        sx={{
          mb: 1,
          fontSize: 32,
          lineHeight: "43.5px",
          textAlign: "start",
          fontWeight: 700,
        }}
      >
        Product Stocks
      </Typography>
      <TextField
        placeholder="Search product name"
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
            borderRadius: "50px",
            backgroundColor: "white",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#E2E4ED",
            },
          },
        }}
      />
    </div>
  );
}
