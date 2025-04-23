"use client";

import { useFetchArticles } from "@/api-hooks/articles";
import BlogsCard from "./news-card";
import CardLoading from "@/components/common/globals/card-loading";

export interface INewsDetail {
  _id: string;
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
}

export default function NewsList() {
  const { data, isLoading } = useFetchArticles();
  const blogs = data || [];

  if (isLoading) {
    return <CardLoading />;
  }
  return (
    <div className="w-full flex-col">
      <div className="w-full h-10 border-b-[2px] border-[#9f9f9f] capitalize text-xl font-bold mb-5">
        news
      </div>
      <div className="w-full flex flex-row gap-[calc(2%)]">
        {blogs?.slice(0, 4).map((blog: INewsDetail, index: number) => {
          return (
            <div key={`blog-${index}`} className="w-[calc(23.5%)]">
              <BlogsCard new={blog} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
