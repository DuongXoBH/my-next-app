"use client";

import { Box, Tooltip, Typography } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Image from "next/image";
import DateFilter from "./date-filter";
import TypesFilter from "./types-filter";
import StatusFilter from "./status-filter";
import { useAtom } from "jotai";
import { orderListAtom, searchAtom } from "@/stores/order-filter";
import { ORDERLIST } from "@/constants/order";
import { useTranslations } from "next-intl";

export default function FilterGroup() {
  const t = useTranslations("Order Lists");
  const [, setOrderSearch] = useAtom(searchAtom);
  const [, setData] = useAtom(orderListAtom);
  return (
    <Box
      sx={{
        display: "flex",
        width: "780px",
        height: "70px",
        flexDirection: "row",
        borderRadius: "12px",
        borderColor: "rgba(213, 213, 213, 1)",
        borderWidth: "0.6px",
        borderStyle: "solid",
        marginBottom: "24px",
      }}
    >
      <Tooltip title="Filter">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingX: "20px",
            textTransform: "none",
            borderRightWidth: "0.6px",
            borderRightColor: "rgba(213, 213, 213, 1)",
            borderRightStyle: "solid",
            borderRadius: "0 !important",
          }}
        >
          <FilterAltIcon sx={{ color: "black" }} />
          <Typography
            sx={{ color: "black", marginLeft: "10px", fontWeight: "600" }}
          >
            {t("filter")}
          </Typography>
        </Box>
      </Tooltip>
      <DateFilter />
      <TypesFilter />
      <StatusFilter />
      {/* Reset Button  */}
      <div className="relative flex justify-center items-center">
        <button
          onClick={() => {
            setOrderSearch({ date: [], type: [], status: [] });
            setData(ORDERLIST);
          }}
          className="flex flex-row justify-between px-6 items-center gap-6 rounded-lg text-red-700 font-bold"
        >
          <Image
            alt=""
            src="/ic-replay-24px.png"
            width={18}
            height={18}
          ></Image>
          {t("reset")}
        </button>
      </div>
    </Box>
  );
}
