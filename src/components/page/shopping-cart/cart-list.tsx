"use client";
import { userToken } from "@/stores/auth";
import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useAtom } from "jotai";
import NotFound from "@/components/common/table/not-found-data";
import { useFetchUserApiBySession } from "@/api-hooks/user";
import { CustomCartTableFooter } from "./cart-table-footer";
import CartColumns from "./cart-columns";
import { authShoppingCart } from "@/stores/admin/products";

export default function CartList() {
  const [authToken] = useAtom(userToken);
  const { data: auth } = useFetchUserApiBySession(authToken);
  const [carts] = useAtom(authShoppingCart);
  const cart = carts ? carts[auth?.id] || [] : [];

  const columns = CartColumns();

  return (
    <Paper
      sx={{
        width: "70%",
        height: "auto",
        maxHeight: "850px",
        overflowY: "auto",
        borderRadius: "16px",
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "white",
        },
        "&:hover": {
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#9F9F9F",
          },
        },
      }}
    >
      <DataGrid
        rows={cart}
        columns={columns}
        initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
        pageSizeOptions={[5, 10, 20]}
        disableColumnSorting
        slots={{
          noRowsOverlay: NotFound,
          footer: CustomCartTableFooter,
        }}
        sx={{
          border: 0,
          "& .MuiTablePagination-selectLabel ": {
            display: "none",
          },
          "& .MuiDataGrid-cell": {
            outline: "none",
          },
          "& .MuiDataGrid-cell:focus": {
            outline: "none",
          },
          "& .MuiDataGrid-cell:focus-within": {
            outline: "none",
          },
        }}
        rowHeight={85}
      />
    </Paper>
  );
}
