"use client";

import { useFetchGetBlogs } from "@/api-hooks/blogs";
import BlogsCard from "./blogs-card";

export interface IBlogs {
  img: string;
  _id: string;
  nameText: string;
  tittleText: string;
  descriptionText: string;
}

export default function BlogsList() {
  const { data: blogs } = useFetchGetBlogs();
  return (
    <div className="w-full flex flex-row gap-[calc(2%)]">
      {blogs?.slice(0, 4).map((blog: IBlogs, index: number) => {
        return (
          <div key={`blog-${index}`} className="w-[calc(23.5%)]">
            <BlogsCard blog={blog} />
          </div>
        );
      })}
    </div>
  );
}
