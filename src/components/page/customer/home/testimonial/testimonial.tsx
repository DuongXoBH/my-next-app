import Image from "next/image";

export default function Testimonial() {
  return (
    <div className="w-56 2xl:w-[310px] h-[444px] bg-inherit flex flex-col">
      <div className="w-full h-10 border-b-[1px] border-[#9f9f9f] capitalize text-xl font-bold">
        testimonial
      </div>
      <div className="w-full h-full mt-10 px-[20px] py-[30px] border border-[#9f9f9f] rounded-xl flex flex-col justify-between items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <Image
            alt="testimonial"
            src="/customer/home/testimonial-1.jpg"
            width={80}
            height={80}
          ></Image>
        </div>

        <p className="text-lg font-bold uppercase">Alan Doe</p>
        <p className="text-base font-semibold">CEO & Founder Invision</p>
        <Image
          alt=""
          src="/customer/home/quotes.svg"
          width={23}
          height={23}
        ></Image>
        <p className="text-base text-center max-w-48">
          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit
          amet.
        </p>
      </div>
    </div>
  );
}
