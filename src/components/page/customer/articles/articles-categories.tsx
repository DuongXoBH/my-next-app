"use client";

import { useSearchParams } from "next/navigation";
import ArticleRowCard from "./article-row-card";
import { useFetchArticles } from "@/api-hooks/articles";
import { INewsDetail } from "../home/blogs/news-list";
import { useState, useEffect } from "react";
import LinkTag from "@/components/common/globals/link-tag";

export default function ArticlesCategory() {
  const { data: articles } = useFetchArticles();
  const [count, setCount] = useState(5);
  const searchParams = useSearchParams();
  const [category, setCategory] = useState("technology");
  const [newData, setNewData] = useState<INewsDetail[] | undefined>([]);

  useEffect(() => {
    const currentCategory = searchParams.get("name") || "technology";
    setCategory(currentCategory);

    const filteredData = (() => {
      switch (currentCategory) {
        case "business":
          return articles?.slice(10, 20);
        case "sports":
          return articles?.slice(0, 10);
        case "cinema":
          return articles?.slice(30, 40);
        case "health":
          return articles?.slice(40, 50);
        case "travel":
          return articles?.slice(50, 60);
        default:
          return articles?.slice(20, 30);
      }
    })();

    setNewData(filteredData);
  }, [searchParams, articles]);

  const length = newData?.length || 0;

  return (
    <div className="w-full">
      <div className="w-full border-y-[1px] border-[#9f9f9f] capitalize text-4xl text-start font-bold mb-5 px-5 py-2">
        {category}
      </div>
      <div className="w-full flex flex-col">
        {newData?.slice(0, count).map((item: INewsDetail) => {
          return (
            <div className="w-full" key={`item-${item._id}`}>
              <ArticleRowCard item={item} />
            </div>
          );
        })}
      </div>
      {count < length && (
        <div className="w-full flex justify-center items-center mt-5 mb-10">
          <button
            onClick={() => setCount((prev) => prev + 5)}
            className="w-[200px] h-[50px] bg-[#ff8f9c] hover:bg-[#8b2b36] text-white font-bold text-lg rounded-lg"
          >
            Load more
          </button>
        </div>
      )}

      <div className="w-full flex flex-col justify-between items-center mb-10">
        <div className="w-full text-4xl font-extrabold capitalize">
          Articles Categories
        </div>
        <div className="w-full flex flex-row justify-center items-center gap-2 mt-5 mb-10 px-5 py-2">
          <LinkTag
            href="/news/categories?name=bisiness"
            className="text-base bg-green-300 rounded-3xl text-white h-12 px-2 flex items-center font-bold"
          >
            Business
          </LinkTag>
          <LinkTag
            href="/news/categories?name=technology"
            className="text-base bg-green-300 rounded-3xl text-white h-12 px-2 flex items-center font-bold"
          >
            Technology
          </LinkTag>
          <LinkTag
            href="/news/categories?name=sports"
            className="text-base bg-green-300 rounded-3xl text-white h-12 px-2 flex items-center font-bold"
          >
            Sports
          </LinkTag>
          <LinkTag
            href="/news/categories?name=cinema"
            className="text-base bg-green-300 rounded-3xl text-white h-12 px-2 flex items-center font-bold"
          >
            Cinema
          </LinkTag>
          <LinkTag
            href="/news/categories?name=health"
            className="text-base bg-green-300 rounded-3xl text-white h-12 px-2 flex items-center font-bold"
          >
            Health
          </LinkTag>
          <LinkTag
            href="/news/categories?name=travel"
            className="text-base bg-green-300 rounded-3xl text-white h-12 px-2 flex items-center font-bold"
          >
            Travel
          </LinkTag>
        </div>
      </div>
    </div>
  );
}
