"use client";

import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent, useState } from "react";
import PageHeader from "@/components/common/global/page-header";
import { useTranslations } from "next-intl";


export default function StocksHeader() {
    const [searchValue, setSearchValue] = useState("");
    const t = useTranslations("Product Stock"); 
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    };
    console.log("🚀 ~ ProductStocks ~ searchValue:", searchValue);
  return (
    <div className="flex justify-between items-center mt-4 mb-10">
      <PageHeader page="Product Stock"/>
      <TextField
        placeholder={t("search")}
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
            width: "300px",
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
