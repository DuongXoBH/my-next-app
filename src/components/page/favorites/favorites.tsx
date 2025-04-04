"use client";

import { useFetchProductsApi } from "@/api-hooks/product";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CardLoading from "@/components/common/global/card-loading";
import { CSSProperties, useState } from "react";
import { useTranslations } from "next-intl";
import LinkTag from "@/components/common/global/link-tag";

interface IProduct {
  id: number;
  title: string;
  images: string[];
  price: number;
  totalFavorites: number;
  favorites: boolean;
}
export default function FavoritesList() {
  const t = useTranslations("Favorites");
  const { data: products, isLoading } = useFetchProductsApi();
  const [count, setCount] = useState(6);
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
        favorites: Math.random() < 0.5,
      };
    }
  );
  if (isLoading) {
    return <CardLoading />;
  }
  const Favorites = newProducts?.filter((element: IProduct) => {
    return element.favorites;
  });
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "start",
          gap: "2%",
        }}
      >
        {Favorites?.slice(0, count).map((element: IProduct, index: number) => {
          return (
            <Card
              key={`favorites-${index}`}
              sx={{
                width: "32%",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                borderRadius: 2,
                overflow: "hidden",
                marginBottom: "30px",
              }}
            >
              {/* Image */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                {/* Slices Image */}
                <Swiper
                  style={
                    {
                      "--swiper-navigation-image": "/prev-1.svg",
                      "--swiper-navigation-color": "#202224",
                      "--swiper-navigation-size": "18px",
                    } as CSSProperties
                  }
                  loop
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                >
                  {element.images.map((image: string, index: number) => {
                    return (
                      <SwiperSlide key={`image-${element.id}-${index}`}>
                        <CardMedia
                          component="img"
                          image={image}
                          alt={element.title}
                          sx={{
                            width: "100%",
                            height: "100%",
                            maxHeight: "320px",
                          }}
                        />
                        <div className=""></div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </Box>
              {/* Text Content */}
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
                    href={`/products/${element.id}/detail`}
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
                    <FavoriteIcon sx={{ color: "red" }} />
                  </IconButton>
                </Box>
              </Box>
            </Card>
          );
        })}
      </Box>
      {count < products?.length && (
        <button
          className="w-[25%] h-[50px] border-[1px] border-gray-300 rounded-[8px] hover:bg-gray-300"
          onClick={() => setCount((count) => count + 3)}
        >
          {t("see-more")}
        </button>
      )}
    </div>
  );
}
