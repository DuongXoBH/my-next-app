"use client";

import { CSSProperties, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, Pagination, Scrollbar, A11y } from "swiper/modules";
import { CardMedia } from "@mui/material";

export default function ImageThumbs({ images }: { images: string[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="w-[49%] flex flex-col items-center gap-4 ">
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-navigation-size": "24px",
          } as CSSProperties
        }
        // thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs, Navigation, Pagination, Scrollbar, A11y]}
        // modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        className="w-full overflow-hidden"
      >
        {images?.map((image: string, index: number) => {
          return (
            <SwiperSlide key={`image-${index}`}>
              <CardMedia
                component="img"
                image={image}
                sx={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "580px",
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    {/* Thump Lists */}
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-navigation-size": "24px",
          } as CSSProperties
        }
        onSwiper={setThumbsSwiper}
        modules={[Navigation, FreeMode, Thumbs, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        className="w-full overflow-hidden"
      >
        {images?.map((image: string, index: number) => {
          return (
            <SwiperSlide key={`image-${index}`} className="cursor-pointer">
              <CardMedia
                component="img"
                image={image}
                sx={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "130px",
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
