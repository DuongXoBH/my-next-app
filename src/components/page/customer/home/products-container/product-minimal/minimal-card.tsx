"use client";

import { CardMedia } from "@mui/material";

export default function MinimalCard({
  image,
  name,
  category,
  price,
}: {
  image: string;
  name: string;
  category: string;
  price: number;
}) {
  return (
    <div className="w-full p-4 rounded-lg border-[1px] border-[#9f9f9f] flex flex-row gap-4 cursor-pointer">
      <CardMedia
        component="img"
        image={image}
        alt={name}
        sx={{
          width: 70,
          height: 62,
          objectFit: "contain",
        }}
      />
      <div className="w-full flex flex-col justify-between items-start overflow-hidden">
        <p className="w-full text-sm font-semibold max-h-5 overflow-y-hidden">
          {name}
        </p>
        <p className="w-full text-xs ">{category}</p>
        <p className="w-full text-base text-[#ff8f9c]">
          ${price.toFixed(2)}{" "}
          <span className="ml-1 line-through text-gray-400 text-sm">
            ${(price * 1.25).toFixed(2)}
          </span>
        </p>
      </div>
    </div>
  );
}
