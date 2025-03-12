"use client";

import { useFetchProductsApi } from "@/api-hooks/product";
import { CardMedia, Paper, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
// import DeleteIcon from "@mui/icons-material/Delete";
import ListLoading from "@/components/common/list-loading";
import Image from "next/image";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    flex: 0.05,
    renderHeader: () => <p className="font-semibold">ID</p>,
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
    renderHeader: () => <p className="font-semibold">Image</p>,
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
    renderHeader: () => <p className="font-semibold">Product Name</p>,
  },
  {
    field: "category",
    headerName: "Category",
    flex: 0.2,
    renderCell: (params) => <div>{params.value["name"]}</div>,
    renderHeader: () => <p className="font-semibold">Category</p>,
  },
  {
    field: "price",
    headerName: "Price",
    flex: 0.1,
    renderCell: (params) => <p>{`$${params.value}`}</p>,
    renderHeader: () => <p className="font-semibold">Price</p>,
  },
  {
    field: "piece",
    headerName: "Piece",
    flex: 0.07,
    renderHeader: () => <p className="font-semibold">Piece</p>,
    renderCell: () => <p>{Math.floor(Math.random() * 200 + 1)}</p>,
  },
  {
    field: "color",
    headerName: "Available Color",
    flex: 0.15,
    renderHeader: () => <p className="font-semibold">Available Color</p>,
  },
  {
    field: "action",
    headerName: "Action",
    flex: 0.13,
    renderHeader: () => (
      <p className="font-semibold w-[160px] text-center">Action</p>
    ),
    renderCell: () => (
      <div className="w-full h-full flex justify-center items-center">
        <div className="h-[32px] w-[96px] flex justify-between rounded-lg border-[#D5D5D5] border-[1px] bg-[#F5F6FA]">
        <Tooltip title="edit">
          <button className="w-[48px] h-[32px] flex items-center justify-center border-r-[#D5D5D5] border-r-[1px]"> 
            <Image
              alt=""
              src="/stock/pencil-write.png"
              width={16}
              height={16}
            ></Image>
          </button >
        </Tooltip>
        <Tooltip title="delete">
          <button className="w-[48px] h-[32px] flex items-center justify-center"> 
            <Image
              alt=""
              src="/stock/bin.png"
              width={16}
              height={16}
            ></Image>
          </button >
        </Tooltip>
      </div>
      </div>
    ),
  },
];

export default function StocksList() {
  const { data: products, isLoading } = useFetchProductsApi();
  if (isLoading) {
    return <ListLoading />;
  }
  return (
    <Paper sx={{ width: "100%", overflow: "hidden", borderRadius: "20px" }}>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
        pageSizeOptions={[10, 20]}
        disableColumnSorting
        sx={{
          border: 0,
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
