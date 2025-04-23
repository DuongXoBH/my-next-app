"use client";

import { CardMedia } from "@mui/material";
import { format } from "date-fns";
import Link from "next/link";
import { INewsDetail } from "./news-list";

export default function NewsCard({ new: news }: { new: INewsDetail }) {
  return (
    <Link
      href={news.url}
      target="_blank"
      className="w-[full] rounded-xl overflow-hidden flex flex-col"
    >
      <div className="w-full h-44 flex items-center justify-center overflow-hidden">
        <CardMedia
          component="img"
          alt=""
          image={news.image}
          sx={{ width: 308, height: 176 }}
        />
      </div>
      <div className="w-full  flex flex-col justify-between mt-4">
        <p className="w-full h-6 text-base text-[#ff8f9c] font-semibold">
          {news.source["name"]}
        </p>
        <p className="w-full h-14 text-lg text-black font-semibold overflow-hidden">
          {news.description}
        </p>
        <p className="w-full h-6 text-base text-[#787878] font-semibold capitalize overflow-hidden">
          {news.publishedAt &&
            format(new Date(news.publishedAt), "MMM dd, yyyy")}
        </p>
      </div>
    </Link>
  );
}
