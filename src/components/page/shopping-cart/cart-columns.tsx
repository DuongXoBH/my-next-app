"use client";

import { CardMedia, Tooltip } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import DeteleCardDialog from "./delete-cart-dialog";
import { useTranslations } from "next-intl";
import { ChangeEvent, useState } from "react";

export default function CartColumns() {
  const [, setQuantity] = useState<{ [key: string]: number }>({});
  const handleChangeQuantity = (
    e: ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setQuantity((prev) => {
      return {
        ...prev,
        [key]: Number(e.target.value),
      };
    });
  };

  const t = useTranslations("ShoppingCart");
  const cartColumns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.03,
      renderHeader: () => <p className="font-bold px-4">ID</p>,
      renderCell: (params) => <p className="px-4">{params.value}</p>,
    },
    {
      field: "images",
      headerName: "Image",
      flex: 0.1,
      renderCell: (params) => (
        <div className="flex h-full items-center justify-start">
          <CardMedia
            component="img"
            image={params.value[0]}
            sx={{ width: "60px", height: "60px", borderRadius: "8px" }}
          />
        </div>
      ),
      renderHeader: () => <p className="font-bold">{t("images")}</p>,
    },
    {
      field: "title",
      headerName: "Product Name",
      flex: 0.2,
      renderCell: (params) => (
        <Tooltip title={params.value}>
          <div className="max-w-[200px] h-full text-left overflow-hidden">
            {params.value}
          </div>
        </Tooltip>
      ),
      renderHeader: () => <p className="font-bold">{t("products")}</p>,
    },

    {
      field: "price",
      headerName: "Price",
      flex: 0.1,
      renderCell: (params) => <p>{`$${params.value}`}</p>,
      renderHeader: () => <p className="font-bold">{t("price")}</p>,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 0.07,
      renderHeader: () => <p className="font-bold">{t("quantity")}</p>,
      renderCell: (params) => (
        <input
          type="number"
          onChange={(e) => handleChangeQuantity(e, params.id as string)}
          defaultValue={params.value}
          min={1}
          className="w-full flex justify-center p-6 h-20 no-spinner bg-inherit"
        />
      ),
    },
    {
      field: "",
      headerName: "Amount",
      flex: 0.07,
      renderHeader: () => <p className="font-bold capitalize">{t("amount")}</p>,
      renderCell: (params) => <p className="px-4"> {[params.id]}</p>,
    },

    {
      field: "action",
      headerName: "Action",
      flex: 0.13,
      renderHeader: () => (
        <p className="font-bold w-[160px] text-center">{t("action")}</p>
      ),
      renderCell: (params) => (
        <div className="w-full h-full flex justify-center items-center">
          <div className="h-[32px] w-[48px] flex justify-between rounded-lg border-[#D5D5D5] border-[1px] bg-[#F5F6FA]">
            <DeteleCardDialog id={params.id as number} />
          </div>
        </div>
      ),
    },
  ];

  return cartColumns;
}
