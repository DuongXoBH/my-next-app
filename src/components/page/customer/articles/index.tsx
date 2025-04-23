"use client";

import { useFetchArticles } from "@/api-hooks/articles";
import ArticleCard from "./article-card";
import { INewsDetail } from "../home/blogs/news-list";

export default function ArticlesList() {
  const { data: articles } = useFetchArticles();
  console.log("🚀 ~ ArticlesList ~ articles:", articles);
  return (
    <div className="w-full">
      {/* hot news */}
      <div className="w-full py-5">
        <div className="w-full border-y-[1px] border-[#9f9f9f] capitalize text-4xl text-center font-bold mb-5 py-2">
          hot news
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          {articles?.slice(10, 13).map((item: INewsDetail, index: number) => (
            <div
              key={`article-${item._id}-${index}`}
              className="w-full flex justify-center items-center"
            >
              <ArticleCard item={item} index={index} />
            </div>
          ))}
        </div>
      </div>
      {/* technology news */}
      <div className="w-full py-10">
        <div className="w-full border-y-[1px] border-[#9f9f9f] capitalize text-4xl text-center font-bold mb-5 py-2">
          technology
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          {articles?.slice(20, 23).map((item: INewsDetail, index: number) => (
            <div
              key={`article-${item._id}-${index}`}
              className="w-full flex justify-center items-center"
            >
              <ArticleCard item={item} index={index} />
            </div>
          ))}
        </div>
      </div>
      {/* sports news */}
      <div className="w-full py-5">
        <div className="w-full border-y-[1px] border-[#9f9f9f] capitalize text-4xl text-center font-bold mb-5 py-2">
          sports
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          {articles?.slice(0, 3).map((item: INewsDetail, index: number) => (
            <div
              key={`article-${item._id}-${index}`}
              className="w-full flex justify-center items-center"
            >
              <ArticleCard item={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
