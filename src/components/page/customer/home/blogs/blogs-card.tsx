import Image from "next/image";
import { IBlogs } from "./blogs-list";

export default function BlogsCard({ blog }: { blog: IBlogs }) {
  return (
    <div className="w-[full] rounded-xl overflow-hidden flex flex-col">
      <div className="w-full h-44 flex items-center overflow-hidden">
        <Image alt="" src={blog.img} width={308} height={176}></Image>
      </div>
      <div className="w-full h-28 flex flex-col justify-between mt-4">
        <p className="w-full text-base text-[#ff8f9c] font-semibold">
          {blog.tittleText}
        </p>
        <p className="w-full h-14 text-lg text-black font-semibold overflow-hidden">
          {blog.nameText}
        </p>
        <p className="w-full text-base text-[#787878] font-semibold capitalize">
          by mr admin / Apr 06, 2022
        </p>
      </div>
    </div>
  );
}
