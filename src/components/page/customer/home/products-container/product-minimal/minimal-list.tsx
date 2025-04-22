"use client";

import { Divider } from "@mui/material";
import MinimalCard from "./minimal-card";

export default function MinimalList({
  list,
  title,
}: {
  list: {
    image: string;
    name: string;
    category: string;
    price: number;
  }[];
  title: string;
}) {
  return (
    <div className="w-full flex flex-col gap-6">
      <p className="w-full text-xl font-bold capitalize">{title}</p>
      <Divider sx={{ color: "#9f9f9f" }} />
      <div className="w-full flex flex-col gap-4">
        {list?.map((item, index: number) => {
          return (
            <div key={`${title} ${index}`} className="w-full">
              <MinimalCard
                image={item.image}
                category={item.category}
                name={item.name}
                price={item.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
