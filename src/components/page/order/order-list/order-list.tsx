"use client";

import { Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Status } from "./status";
import { useAtom } from "jotai";
import { orderListAtom } from "@/store/order-filter";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    flex: 0.1,
    renderHeader: () => <p className="font-extrabold w-full ">ID</p>,
  },
  {
    field: "name",
    headerName: "NAME",
    type: "string",
    flex: 0.15,
    renderHeader: () => <p className="font-extrabold w-full ">NAME</p>,
  },
  {
    field: "address",
    headerName: "ADDRESS",
    type: "string",
    flex: 0.25,
    renderHeader: () => <p className="font-extrabold w-full ">ADDRESS</p>,
  },
  {
    field: "date",
    headerName: "DATE",
    type: "string",
    flex: 0.2,
    renderHeader: () => <p className="font-extrabold w-full ">DATE</p>,
  },
  {
    field: "type",
    headerName: "TYPE",
    type: "string",
    flex: 0.15,
    renderHeader: () => <p className="font-extrabold w-full ">TYPE</p>,
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
    renderHeader: () => <p className="font-extrabold w-full ">STATUS</p>,
  },
];

export default function OrderList({ size }: { size?: number }) {
  const [data, ] = useAtom(orderListAtom);
  const dataVal = size ? data.slice(0, size) : data;
  return (
    <Paper sx={{ width: "100%", overflow: "hidden", borderRadius: "20px" }}>
      <DataGrid
        rows={dataVal}
        columns={columns}
        initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
        pageSizeOptions={[5, 10, 20]}
        disableRowSelectionOnClick
        disableColumnSorting
        disableColumnFilter
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
