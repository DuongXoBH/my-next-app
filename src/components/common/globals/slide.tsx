"use client";
{
  /* Children has form : 
        <SwiperSlide>
            ...
        </SwiperSlide> */
}

import { Swiper as SwiperType } from "swiper";
import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import Image from "next/image";

export default function Slide({ children }: { children: React.ReactNode }) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="w-full px-5 flex justify-center items-center relative rounded-2xl">
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
        className="w-full overflow-hidden"
      >
        {children}
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
