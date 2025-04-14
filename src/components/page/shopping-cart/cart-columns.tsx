"use client";

import { CardMedia, Tooltip } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import DeteleCardDialog from "./delete-cart-dialog";
import { useTranslations } from "next-intl";
import { ChangeEvent, useEffect, useState } from "react";
import { useAtom } from "jotai";
import { authShoppingCart, userToken } from "@/store/user";
import { useFetchUserApiBySession } from "@/api-hooks/user";
import { totalCartAmountAtom } from "@/store/product";

export default function CartColumns() {
  const [cart] = useAtom(authShoppingCart);
  const [token] = useAtom(userToken);
  const { data: auth } = useFetchUserApiBySession(token);
  const cartList = auth ? cart[auth.id] : [];
  const [quantityList, setQuantityList] = useState(new Map<number, number>());
  const [, setTotalCartAmount] = useAtom(totalCartAmountAtom);

  const calculateTotalAmount = (): number => {
    return cartList.reduce((total, item) => {
      const quantity = quantityList.get(item.id) ?? 1;
      return total + quantity * item.price;
    }, 0);
  };

  useEffect(() => {
    const newMap = new Map<number, number>();
    cartList?.forEach((item) => {
      newMap.set(item.id, item.quantity);
    });
    setQuantityList(newMap);

    calculateTotalAmount();
  }, [auth, cartList, calculateTotalAmount()]);

  useEffect(() => {
    setTotalCartAmount(calculateTotalAmount());
  }, [calculateTotalAmount(), setTotalCartAmount]);

  const handleChangeQuantity = (
    e: ChangeEvent<HTMLInputElement>,
    key: number
  ) => {
    const value = parseInt(e.target.value);
    const newMap = new Map(quantityList);
    newMap.set(key, isNaN(value) ? 0 : value);
    setQuantityList(newMap);
    calculateTotalAmount();
  };

  const handleChangeQuantityByStep = (id: number, step: number) => {
    setQuantityList((prev) => {
      const current = prev.get(id) ?? 1;
      const updated = Math.max(1, current + step);
      const newMap = new Map(prev);
      newMap.set(id, updated);
      return newMap;
    });
    calculateTotalAmount();
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
      flex: 0.12,
      renderHeader: () => (
        <p className="font-bold text-center w-full">{t("quantity")}</p>
      ),
      renderCell: (params) => (
        <div className="flex items-center gap-2 w-full h-20">
          <button
            type="button"
            onClick={() => handleChangeQuantityByStep(params.id as number, -1)}
            className="w-12 h-[50%] text-2xl hover:bg-gray-300 rounded"
          >
            −
          </button>

          <input
            type="number"
            onChange={(e) => handleChangeQuantity(e, params.id as number)}
            value={quantityList.get(params.id as number) ?? 1}
            min={1}
            className="w-full text-center p-2 h-[50%] no-spinner bg-inherit border border-gray-300 rounded"
          />

          <button
            type="button"
            onClick={() => handleChangeQuantityByStep(params.id as number, 1)}
            className="w-12 h-[50%] text-2xl hover:bg-gray-300 rounded"
          >
            +
          </button>
        </div>
      ),
    },
    {
      field: "",
      headerName: "Amount",
      flex: 0.07,
      renderHeader: () => <p className="font-bold capitalize">{t("amount")}</p>,
      renderCell: (params) => {
        const id = parseInt(params.id.toString());
        const quantity = quantityList?.get(id) ?? 0;
        const price = cartList?.find((item) => item.id === id)?.price ?? 0;

        return <p className="px-4">${price * quantity}</p>;
      },
    },

    {
      field: "action",
      headerName: "Action",
      flex: 0.08,
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
