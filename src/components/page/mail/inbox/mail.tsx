"use client";

import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import { Label } from "./mail-label";
import { INBOXLIST } from "@/constants/mail";

export default function InboxList(props: { title: string }) {
  const favoriteList = INBOXLIST.filter((element) => {
    return element.starred;
  });

  const handleStarChange = (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { checked } = e.target;
    if (checked) {
      // add id to starred list if it not exist on list
      console.log(id);
    } else {
      // rm id in list if it exist on list
      console.log("not", id);
    }
  };

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "",
      flex: 0.05,
      renderHeader: () => <p className="font-semibold w-full">ID</p>,
    },
    {
      field: "starred",
      headerName: "",
      flex: 0.05,
      renderHeader: () => <p className="font-semibold w-full">STAR</p>,
      renderCell: (params) => {
        return (
          <label className="inline-flex items-center cursor-pointer active:border-none">
            <input
              type="checkbox"
              className="hidden peer"
              defaultChecked={params.value}
              onChange={(e) => handleStarChange(params.id as number, e)}
            />
            <span
              className={`h-6 w-6 flex items-center justify-center text-gray-300 peer-checked:text-yellow-500 `}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.975c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.54-1.118l1.287-3.975a1 1 0 00-.364-1.118L2.045 9.402c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.975z" />
              </svg>
            </span>
          </label>
        );
      },
    },
    {
      field: "userFrom",
      headerName: "",
      flex: 0.2,
      renderHeader: () => <p className="font-semibold w-full">FROM</p>,
      renderCell: (params) => {
        return (
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            {params.value}
          </Typography>
        );
      },
    },
    {
      field: "label",
      headerName: "",
      flex: 0.1,
      renderHeader: () => <p className="font-semibold w-full">LABEL</p>,
      renderCell: (params) => {
        return (
          <div className="flex items-center h-full">
            <Label title={params.value} />
          </div>
        );
      },
    },
    {
      field: "title",
      headerName: "",
      type: "string",
      flex: 0.45,
      renderHeader: () => <p className="font-semibold w-full">TITLE</p>,
      renderCell: (params) => {
        return (
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              fontWeight: "400",
              fontSize: "14px",
            }}
          >
            {params.value}
          </Typography>
        );
      },
    },
    {
      field: "time",
      headerName: "",
      renderHeader: () => <p className="font-semibold w-full">TIME</p>,
      type: "string",
      flex: 0.15,
    },
  ];

  const paginationModel = { page: 0, pageSize: 12 };

  // data = call API(title)
  const rows = props.title === "starred" ? favoriteList : INBOXLIST;

  const [selectedRows, setSelectedRows] = React.useState<number[]>([]);
  // Filter selected data
  const selectedData = rows.filter((row) => selectedRows.includes(row.id));
  console.log("🚀 ~ InboxList ~ selectedData:", selectedData);
  return (
    <Box>
      <Typography>{props.title}</Typography>
      <Paper sx={{ width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[12, 20]}
          checkboxSelection
          onRowSelectionModelChange={(ids) => {
            setSelectedRows(ids as number[]);
          }}
          disableColumnSorting
          disableRowSelectionOnClick
          sx={{
            border: 0,
            // "& .MuiDataGrid-columnHeaders": { display: "none" },
            "& .MuiDataGrid-cell:focus": {
              outline: "none",
            },
            "& .MuiDataGrid-cell:focus-within": {
              outline: "none",
            },
          }}
        />
      </Paper>
    </Box>
  );
}
