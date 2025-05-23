"use client";

import { Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Status } from "./status";
import { useAtom } from "jotai";
import { orderListAtom } from "@/stores/admin/order-filter";
import { useTranslations } from "next-intl";
import { CustomTableFooter } from "@/components/common/table/table-footer";
import NotFound from "@/components/common/table/not-found-data";

export default function OrderList({ size }: { size?: number }) {
  const t = useTranslations("admin.Order Lists");
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.1,
      renderHeader: () => <p className="font-extrabold w-full uppercase">ID</p>,
    },
    {
      field: "name",
      headerName: "NAME",
      type: "string",
      flex: 0.15,
      renderHeader: () => (
        <p className="font-extrabold w-full uppercase">{t("name")}</p>
      ),
    },
    {
      field: "address",
      headerName: "ADDRESS",
      type: "string",
      flex: 0.25,
      renderHeader: () => (
        <p className="font-extrabold w-full uppercase">{t("address")}</p>
      ),
    },
    {
      field: "date",
      headerName: "DATE",
      type: "string",
      flex: 0.2,
      renderHeader: () => (
        <p className="font-extrabold w-full uppercase">{t("date")}</p>
      ),
    },
    {
      field: "type",
      headerName: "TYPE",
      type: "string",
      flex: 0.15,
      renderHeader: () => (
        <p className="font-extrabold w-full uppercase">{t("type")}</p>
      ),
    },
    {
      field: "status",
      headerName: "STATUS",
      type: "string",
      flex: 0.15,
      renderCell: (params) => (
        <div className="flex h-full items-center">
          <Status title={params.value} />
        </div>
      ),
      renderHeader: () => (
        <p className="font-extrabold w-full uppercase">{t("status")}</p>
      ),
    },
  ];
  const [data] = useAtom(orderListAtom);
  const dataVal = size ? data.slice(0, size) : data;
  return (
    <Paper
      sx={{
        width: "100%",
        maxHeight: "850px",
        overflowY: "auto",
        borderRadius: "20px",
        "&::-webkit-scrollbar": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "white",
        },
        "&:hover": {
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#9F9F9F",
          },
        },
      }}
    >
      <DataGrid
        rows={dataVal}
        columns={columns}
        initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
        pageSizeOptions={[5, 10, 20]}
        disableRowSelectionOnClick
        disableColumnSorting
        disableColumnFilter
        slots={{
          noRowsOverlay: NotFound,
          footer: CustomTableFooter,
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
      />
    </Paper>
  );
}
