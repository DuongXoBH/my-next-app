"use client";

import { Box, Typography, Button } from "@mui/material";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import Image from "next/image";

export default function CustomComponent() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="container mt-5 max-h-[350px] px-5 flex justify-center items-center relative bg-banner-layer rounded-2xl">
      {/* Custom Previous Button */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="custom-prev h-full py-auto"
      >
        <Image src="/prev-1.svg" alt="" width={50} height={50}></Image>
      </button>

      {/* Slices */}
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="w-full max-h-[350px] overflow-hidden"  
      >
        <SwiperSlide>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "space-between",
              alignItems: "flex-start",
              color: "white",
              px: "60px",
              pt: "50px",
            }}
          >
            <Typography variant="body1" sx={{ lineHeight: "1.75rem" }}>
              September 12-22
            </Typography>

            <Typography
              variant="h4"
              sx={{
                fontWeight: "900",
                fontSize: "37px",
                lineHeight: "48px",
                maxWidth: "420px",
                width: "100%",
                mt: "8px",
              }}
            >
              Enjoy free home delivery in this summer
            </Typography>

            <Typography
              variant="body1"
              sx={{
                lineHeight: "30px",
                fontSize: "16px",
                fontWeight: "600",
                maxWidth: "420px",
                width: "100%",
                mt: "8px",
              }}
            >
              Designer Dresses - Pick from trendy Designer Dress.
            </Typography>

            <Button
              sx={{
                width: "10rem",
                height: "2.75rem",
                mt: "38px",
                backgroundColor: "orange",
                borderRadius: "11px",
                "&:hover": {
                  backgroundColor: "darkorange",
                },
                textTransform: "capitalize",
              }}
            >
              Get started
            </Button>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              height: "350px",
              justifyContent: "space-between",
              alignItems: "flex-start",
              color: "white",
              px: "60px",
              py: "50px",
            }}
          >
            <Typography variant="body1" sx={{ lineHeight: "1.75rem" }}>
              September 12-22
            </Typography>

            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                lineHeight: "3rem",
                maxWidth: "413px",
                width: "100%",
              }}
            >
              Enjoy free home delivery in this summer
            </Typography>

            <Typography
              variant="body1"
              sx={{
                lineHeight: "1.75rem",
                maxWidth: "420px",
                width: "100%",
              }}
            >
              Designer Dresses - Pick from trendy Designer Dress.
            </Typography>

            <Button
              sx={{
                width: "10rem",
                height: "2.75rem",
                backgroundColor: "orange",
                borderRadius: "11px",
                "&:hover": {
                  backgroundColor: "darkorange",
                },
              }}
            >
              Get started
            </Button>
          </Box>
        </SwiperSlide>
      </Swiper>
      {/* Custom Next Button */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="custom-next h-full py-auto"
      >
        <Image src="/next-1.svg" alt="" width={50} height={50}></Image>
      </button>
    </div>
  );
}
