import { CardMedia } from "@mui/material";
import { format } from "date-fns";
import { INewsDetail } from "../home/blogs/news-list";
import LinkTag from "@/components/common/globals/link-tag";

export default function ArticleRowCard({ item }: { item: INewsDetail }) {
  return (
    <LinkTag
      href={item.url}
      target="_blank"
      className={`w-full h-[320px] overflow-hidden flex flex-row justify-between px-5 py-[25px] gap-[10px] border-b-[1px] border-[#9f9f9f] group`}
    >
      <div className="w-full flex justify-center items-center rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300 ease-in-out">
        <CardMedia
          component="img"
          image={item.image}
          sx={{ width: 438, height: 320 }}
        />
      </div>
      <div className="w-full h-[320px] flex flex-col justify-between items-center mt-4 gap-2">
        <p className="w-full text-center h-7 text-lg text-[#ff8f9c] font-semibold uppercase overflow-hidden">
          {item.source["name"]}
        </p>
        <p className="w-full text-center h-16 text-2xl text-black font-bold overflow-hidden">
          {item.title}
        </p>
        <p className="w-full h-36 text-center text-lg text-black font-medium overflow-hidden">
          {item.description}
        </p>
        <p className="w-full text-center h-7 text-lg text-[#787878] font-semibold capitalize overflow-hidden">
          {item.publishedAt &&
            format(new Date(item.publishedAt), "MMM dd, yyyy")}
        </p>
      </div>
    </LinkTag>
  );
}
