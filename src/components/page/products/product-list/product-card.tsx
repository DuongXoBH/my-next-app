"use client";

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
import { CSSProperties } from "react";
import { useTranslations } from "next-intl";
import LinkTag from "@/components/common/global/link-tag";

import { IProduct } from "../../favorites/favorites";
import { useAtom } from "jotai";
import { userToken } from "@/store/user";
import { useFetchUserApiBySession } from "@/api-hooks/user";
import { favoritesAtom } from "@/store/product";
export default function ProductCard({ product }: { product: IProduct }) {
  const t = useTranslations("Favorites");
  const [token] = useAtom(userToken);
  const { data: auth } = useFetchUserApiBySession(token);
  const [favorites, setFavorites] = useAtom(favoritesAtom);

  const updateList = (id: number) => {
    const current = auth ? favorites[auth.id] : [];
    const update = current?.includes(id)
      ? current.filter((item) => {
          return item != id;
        })
      : [...current, id];
    console.log("🚀 ~ updateList ~ update:", update);

    setFavorites((prev) => {
      return { ...prev, [auth.id]: update };
    });
  };

  return (
    <Card
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
          {product.images.map((image: string, index: number) => {
            return (
              <SwiperSlide key={`image-${product.id}-${index}`}>
                <CardMedia
                  component="img"
                  image={image}
                  alt={product.title}
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
            {product.title}
          </Typography>
          <Typography variant="h6" color="primary" sx={{ fontWeight: "bold" }}>
            ${product.price}
          </Typography>
          <LinkTag
            href={`/products/${product.id}/detail`}
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
            {product.totalFavorites}
          </Typography>
          <IconButton
            sx={{ paddingRight: 2, paddingLeft: "0px !important" }}
            onClick={() => {
              updateList(product.id);
            }}
          >
            <FavoriteIcon sx={{ color: product.favorites ? "red" : "black" }} />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}
