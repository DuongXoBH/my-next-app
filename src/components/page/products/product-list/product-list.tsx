"use client";

import {
  useFetchPaginationProduct,
  useFetchProductsApi,
} from "@/api-hooks/product";
import Image from "next/image";
import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Skeleton,
  Tooltip,
} from "@mui/material";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CardLoading from "@/components/common/global/card-loading";
import { CSSProperties } from "react";
import { useTranslations } from "next-intl";
import LinkTag from "@/components/common/global/link-tag";

export default function ProductList() {
  const t = useTranslations("Products");
  const [offset, setOffset] = useState<number>(0);
  const { data: list } = useFetchProductsApi();
  const page = Math.ceil(offset / 3) + 1;
  const total = list?.length;
  const handlePageChange = (offsetChange: number) => {
    if (offsetChange >= 0 && offsetChange < total) setOffset(offsetChange);
  };

  const { data: products, isLoading } = useFetchPaginationProduct({
    offset: offset,
    limit: 3,
  });

  const [isLoaded, setIsLoaded] = useState(false);

  const newProducts = products?.map(
    (product: {
      id: number;
      title: string;
      images: string[];
      price: number;
    }) => {
      return {
        ...product,
        totalFavorites: Math.floor(Math.random() * 200 + 1),
        favorites: true,
      };
    }
  );

  if (isLoading) {
    return <CardLoading />;
  }

  return (
    <Box
      sx={{
        width: "100%",
        marginTop: "24px",
        borderRadius: 2,
        backgroundColor: "#F5F6FA",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Product List */}
      <Box
        sx={{
          width: "100%",
          maxHeight: "500px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "start",
          gap: "2%",
        }}
      >
        {newProducts?.map(
          (
            element: {
              id: number;
              title: string;
              images: string[];
              price: number;
              totalFavorites: number;
              favorites: boolean;
            },
            index: number
          ) => {
            return (
              <Card
                key={`product-${offset}-${index}`}
                sx={{
                  width: "32%",
                  maxHeight: "500px",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                {/* Images */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Swiper
                    style={
                      {
                        "--swiper-navigation-color": "#fff",
                        "--swiper-navigation-size": "24px",
                      } as CSSProperties
                    }
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                  >
                    {element.images.map((image: string, index: number) => {
                      return (
                        <SwiperSlide key={`image-${element.id}-${index}`}>
                          {!isLoaded && (
                            <Skeleton
                              sx={{ bgcolor: "grey.600" }}
                              variant="rectangular"
                              width="100%"
                              height={500}
                              animation="wave"
                            />
                          )}
                          <CardMedia
                            component="img"
                            image={image}
                            alt={element.title}
                            sx={{
                              width: "100%",
                              height: "100%",
                              maxHeight: "320px",
                            }}
                            onLoad={() => setIsLoaded(true)}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </Box>
                {/* Card text */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    height: "100%",
                    minHeight: "180px",
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      paddingX: 4,
                      maxWidth: "80%",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: "bold",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        height: "24px",
                      }}
                    >
                      {element.title}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="primary"
                      sx={{ fontWeight: "bold" }}
                    >
                      ${element.price}
                    </Typography>
                    <LinkTag
                      href={`/products/${element.id}`}
                      className="w-36 h-12 bg-gray-200 text-black rounded-md font-bold text-sm flex items-center justify-center hover:bg-gray-300"
                    >
                      {t("edit")}
                    </LinkTag>
                  </CardContent>
                  <Box
                    sx={{
                      width: "70px",
                      display: "flex",
                      alignItems: "start",
                      paddingTop: "35px",
                    }}
                  >
                    <Typography sx={{ paddingTop: "8px" }}>
                      {element.totalFavorites}
                    </Typography>
                    <IconButton
                      sx={{ paddingRight: 2, paddingLeft: "0px !important" }}
                      onClick={() => {}}
                    >
                      {element.favorites ? (
                        <FavoriteIcon sx={{ color: "red" }} />
                      ) : (
                        <FavoriteBorderIcon />
                      )}
                    </IconButton>
                  </Box>
                </Box>
              </Card>
            );
          }
        )}
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Previous Button*/}
        <Tooltip title={t("prev")}>
          <Button
            onClick={() => handlePageChange(offset - 3)}
            sx={{ width: "150px", display: "flex", justifyContent: "center" }}
          >
            <Image src="/prev-1.svg" alt="" width={50} height={50} />
          </Button>
        </Tooltip>
        <p>{page}</p>
        {/* Next  Button*/}
        <Tooltip title={t("next")}>
          <Button
            onClick={() => handlePageChange(offset + 3)}
            sx={{ width: "150px", display: "flex", justifyContent: "center" }}
          >
            <Image src="/next-1.svg" alt="" width={50} height={50} />
          </Button>
        </Tooltip>
      </Box>
    </Box>
  );
}
