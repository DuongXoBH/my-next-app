import { CardMedia } from "@mui/material";
import { format } from "date-fns";
import { INewsDetail } from "../home/blogs/news-list";
import LinkTag from "@/components/common/globals/link-tag";

export default function ArticleCard({
  item,
  index,
}: {
  item: INewsDetail;
  index: number;
}) {
  const isEven = index % 2 === 0;
  return (
    <LinkTag
      href={"/news/" + item._id}
      className={`w-full h-[700px] overflow-hidden flex ${isEven ? "flex-col" : "flex-col-reverse"} justify-between px-5 py-[25px] gap-[10px] border-x-[1px] border-[#9f9f9f] `}
    >
      <div className="w-full flex justify-center items-center overflow-hidden">
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
