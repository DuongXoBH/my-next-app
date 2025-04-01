"use client";

import { useFetchProductsApi } from "@/api-hooks/product";
import { CardMedia, Paper, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
// import DeleteIcon from "@mui/icons-material/Delete";
import ListLoading from "@/components/common/global/list-loading";
import Image from "next/image";
import { CustomTableFooter } from "@/components/common/table/table-footer";
import { useTranslations } from "next-intl";
import NotFound from "@/components/common/table/not-found-data";

export default function StocksList({ size }: { size?: number }) {
  const t = useTranslations("Product Stock");
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.05,
      renderHeader: () => <p className="font-bold">ID</p>,
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
      renderHeader: () => <p className="font-bold">{t("image")}</p>,
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
      renderHeader: () => <p className="font-bold">{t("name")}</p>,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 0.2,
      renderCell: (params) => <div>{params.value["name"]}</div>,
      renderHeader: () => <p className="font-bold">{t("category")}</p>,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.1,
      renderCell: (params) => <p>{`$${params.value}`}</p>,
      renderHeader: () => <p className="font-bold">{t("price")}</p>,
    },
    {
      field: "piece",
      headerName: "Piece",
      flex: 0.07,
      renderHeader: () => <p className="font-bold">{t("piece")}</p>,
      renderCell: () => <p>{Math.floor(Math.random() * 200 + 1)}</p>,
    },
    {
      field: "color",
      headerName: "Available Color",
      flex: 0.15,
      renderHeader: () => <p className="font-bold">{t("color")}</p>,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 0.13,
      renderHeader: () => (
        <p className="font-bold w-[160px] text-center">{t("action")}</p>
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
              </button>
            </Tooltip>
            <Tooltip title="delete">
              <button className="w-[48px] h-[32px] flex items-center justify-center">
                <Image
                  alt=""
                  src="/stock/bin.png"
                  width={16}
                  height={16}
                ></Image>
              </button>
            </Tooltip>
          </div>
        </div>
      ),
    },
  ];
  const { data: products, isLoading } = useFetchProductsApi();
  const dataVal = size ? products?.slice(0, size) : products;
  if (isLoading) {
    return <ListLoading />;
  }
  return (
    <Paper
    sx={{
      width: "100%",
      maxHeight: "850px",
      overflowY: "auto",
      borderRadius: "20px",
      "&::-webkit-scrollbar": {
        width: "4px",
        opacity: 0,
        transition: "opacity 0.3s ease",
      },
      "&::-webkit-scrollbar-thumb": {
        borderRadius: "3px",
        opacity: 0, 
        transition: "opacity 0.3s ease",
      },
      "&:hover": {
        "&::-webkit-scrollbar": {
          opacity: 1, 
        },
        "&::-webkit-scrollbar-thumb": {
          opacity: 1,
        },
      },
    }}
    >
      <DataGrid
        rows={dataVal}
        columns={columns}
        initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
        pageSizeOptions={[5, 10, 20]}
        disableColumnSorting
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
        rowHeight={85}
      />
    </Paper>
  );
}
