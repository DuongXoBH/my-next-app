"use client";

import { Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Status } from "./status";
import { ORDERLIST } from "@/constants/order";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    flex: 0.1,
    renderHeader: () => <p className="font-semibold w-full">ID</p>,
  },
  {
    field: "name",
    headerName: "NAME",
    type: "string",
    flex: 0.15,
    renderHeader: () => <p className="font-semibold w-full">NAME</p>,
  },
  {
    field: "address",
    headerName: "ADDRESS",
    type: "string",
    flex: 0.25,
    renderHeader: () => <p className="font-semibold w-full">ADDRESS</p>,
  },
  {
    field: "date",
    headerName: "DATE",
    type: "string",
    flex: 0.2,
    renderHeader: () => <p className="font-semibold w-full">DATE</p>,
  },
  {
    field: "type",
    headerName: "TYPE",
    type: "string",
    flex: 0.15,
    renderHeader: () => <p className="font-semibold w-full">TYPE</p>,
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
    renderHeader: () => <p className="font-semibold w-full">STATUS</p>,
  },
];

const data = ORDERLIST;

export default function OrderList() {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden", borderRadius: "20px" }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
        pageSizeOptions={[10, 20]}
        disableRowSelectionOnClick
        sx={{
          border: 0,
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
