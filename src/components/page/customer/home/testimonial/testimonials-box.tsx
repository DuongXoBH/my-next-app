import Image from "next/image";
import Testimonial from "./testimonial";

export default function TestimonialsBox() {
  return (
    <div className="w-full flex justify-between mt-20 mb-28">
      <Testimonial />
      <div className="flex items-end rounded-xl overflow-hidden">
        <Image
          alt=""
          src="/customer/home/cta-banner.jpg"
          width={640}
          height={444}
        ></Image>
      </div>
      <Testimonial />
    </div>
  );
}
