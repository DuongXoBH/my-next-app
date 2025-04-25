"use client";

import { useFetchArticles } from "@/api-hooks/articles";
import ArticleCard from "./article-card";
import { INewsDetail } from "../home/blogs/news-list";
import CardLoading from "@/components/common/globals/card-loading";
import LinkTag from "@/components/common/globals/link-tag";

export default function ArticlesList() {
  const { data: articles, isLoading } = useFetchArticles();
  return (
    <div className="w-full">
      {/* hot news */}
      <div className="w-full py-5">
        <div className="w-full flex flex-row justify-between items-center border-y-[1px] border-[#9f9f9f] mb-5 px-5 py-2">
          <p className="capitalize text-4xl font-bold">hot news</p>
          <LinkTag
            href="/news/categories?name=business"
            className="hover:underline hover:text-blue-700"
          >
            See all
          </LinkTag>
        </div>
        {isLoading ? (
          <CardLoading />
        ) : (
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
        )}
      </div>
      {/* technology news */}
      <div className="w-full py-5">
        <div className="w-full flex flex-row justify-between items-center border-y-[1px] border-[#9f9f9f] mb-5 px-5 py-2">
          <p className="capitalize text-4xl font-bold">technology</p>
          <LinkTag
            href="/news/categories?name=technology"
            className="hover:underline hover:text-blue-700"
          >
            See all
          </LinkTag>
        </div>
        {isLoading ? (
          <CardLoading />
        ) : (
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
        )}
      </div>
      {/* sports news */}
      <div className="w-full py-5">
        <div className="w-full flex flex-row justify-between items-center border-y-[1px] border-[#9f9f9f] mb-5 px-5 py-2">
          <p className="capitalize text-4xl font-bold">sports</p>
          <LinkTag
            href="/news/categories?name=sports"
            className="hover:underline hover:text-blue-700"
          >
            See all
          </LinkTag>
        </div>
        {isLoading ? (
          <CardLoading />
        ) : (
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
        )}
      </div>

      {/* cinema news */}
      <div className="w-full py-5">
        <div className="w-full flex flex-row justify-between items-center border-y-[1px] border-[#9f9f9f] mb-5 px-5 py-2">
          <p className="capitalize text-4xl font-bold">cinema</p>
          <LinkTag
            href="/news/categories?name=cinema"
            className="hover:underline hover:text-blue-700"
          >
            See all
          </LinkTag>
        </div>
        {isLoading ? (
          <CardLoading />
        ) : (
          <div className="w-full flex flex-row justify-between items-center">
            {articles?.slice(30, 33).map((item: INewsDetail, index: number) => (
              <div
                key={`article-${item._id}-${index}`}
                className="w-full flex justify-center items-center"
              >
                <ArticleCard item={item} index={index} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* health news */}
      <div className="w-full py-5">
        <div className="w-full flex flex-row justify-between items-center border-y-[1px] border-[#9f9f9f] mb-5 px-5 py-2">
          <p className="capitalize text-4xl font-bold">health</p>
          <LinkTag
            href="/news/categories?name=health"
            className="hover:underline hover:text-blue-700"
          >
            See all
          </LinkTag>
        </div>
        {isLoading ? (
          <CardLoading />
        ) : (
          <div className="w-full flex flex-row justify-between items-center">
            {articles?.slice(40, 43).map((item: INewsDetail, index: number) => (
              <div
                key={`article-${item._id}-${index}`}
                className="w-full flex justify-center items-center"
              >
                <ArticleCard item={item} index={index} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* travel news */}
      <div className="w-full py-5">
        <div className="w-full flex flex-row justify-between items-center border-y-[1px] border-[#9f9f9f] mb-5 px-5 py-2">
          <p className="capitalize text-4xl font-bold">travel</p>
          <LinkTag
            href="/news/categories?name=travel"
            className="hover:underline hover:text-blue-700"
          >
            See all
          </LinkTag>
        </div>
        {isLoading ? (
          <CardLoading />
        ) : (
          <div className="w-full flex flex-row justify-between items-center">
            {articles?.slice(50, 53).map((item: INewsDetail, index: number) => (
              <div
                key={`article-${item._id}-${index}`}
                className="w-full flex justify-center items-center"
              >
                <ArticleCard item={item} index={index} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
