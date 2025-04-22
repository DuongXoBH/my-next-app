import Slide from "@/components/common/globals/slide";
import { Details } from "@/components/page/admin/products/product-detail";
import { SwiperSlide } from "swiper/react";

export default function ProductsShowcase() {
  return (
    <div className="w-full flex flex-col mt-10">
      <p className="w-full text-xl font-bold capitalize">deal of the day</p>
      <div className="w-full">
        <Slide>
          <SwiperSlide>
            <Details id="26" />
          </SwiperSlide>
          <SwiperSlide>B</SwiperSlide>
        </Slide>
      </div>
    </div>
  );
}
