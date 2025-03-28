"use client";

import { useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Thumbs, Scrollbar, A11y } from "swiper/modules";
import { CardMedia } from "@mui/material";

export default function ImageThumbs({ images }: { images: string[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="w-[49%] flex flex-col items-center gap-4 ">
      <Swiper
        modules={[Thumbs, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
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
        onSwiper={setThumbsSwiper}
        modules={[FreeMode, Thumbs, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        className="w-full overflow-hidden"
      >
        {images?.map((image: string, index: number) => {
          return (
            <SwiperSlide
              key={`image-${index}`}
              className="cursor-pointer transition-all duration-300 hover:scale-x-125"
            >
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
