"use client";

import { useFetchProductsApi } from "@/api-hooks/product";
import { Button, CardMedia, Paper, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ListLoading from "@/components/common/list-loading";

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
      <div className="h-full w-[100px] flex">
        <Tooltip title="edit">
          <Button>
            <EditIcon sx={{ color: "gray",width:"48px",height:"32px" }} />
          </Button>
        </Tooltip>
        <Tooltip title="delete">
          <Button>
            <DeleteOutlineIcon sx={{ color: "red",width:"48px",height:"32px" }} />
          </Button>
        </Tooltip>
      </div>
    ),
  },
];

export default function StocksList() {
  const { data: products, isLoading } = useFetchProductsApi();
  if (isLoading) {
    return <ListLoading/>;
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
