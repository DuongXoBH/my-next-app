"use client";

import Slide from "@/components/common/globals/slide";
import { BANNER } from "@/constants/customer/home/categories";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

export default function CustomerHomeBanner() {
  const banners = BANNER;
  return (
    <div className="w-full bg-white">
      <Slide>
        {banners.map((banner: string, index: number) => {
          return (
            <SwiperSlide
              key={`banner-${index}`}
              className="w-full flex justify-center"
            >
              <Image
                alt={`banner-${index}`}
                src={banner}
                width={1350}
                height={450}
              ></Image>
            </SwiperSlide>
          );
        })}
      </Slide>
    </div>
  );
}
