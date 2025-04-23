"use client";

import ProductsContainerSidebar from "./product-sidebar";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { useFetchProductsApi } from "@/api-hooks/product";
import { IProduct } from "@/components/page/admin/favorites/favorites";
import { CardMedia } from "@mui/material";
import RenderStarFunction from "@/api-hooks/product/render-star-function";
export default function BestSeller() {
  const { data: products } = useFetchProductsApi();
  const list = products?.slice(0, 4).map((product: IProduct) => {
    return {
      id: product.id,
      name: product.title,
      rating: 4.5,
      originalPrice: product.price,
      salePrice: product.price * 0.8,
      image: product.images[0],
    };
  });

  const renderRatingStars = RenderStarFunction;

  return (
    <ProductsContainerSidebar title="best seller">
      <div className="space-y-4">
        {list?.map(
          (product: {
            id: number;
            name: string;
            rating: number;
            originalPrice: number;
            salePrice: number;
            image: string;
          }) => (
            <Card
              key={product.id}
              className="flex items-center p-3 hover:shadow-md transition-shadow"
            >
              <Link
                href={`/admin/products/${product.id}/detail`}
                className="flex w-full items-center"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-white p-2 rounded-md">
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    sx={{
                      width: 80,
                      height: 80,
                      objectFit: "contain",
                      transition: "transform 0.2s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                </div>

                <div className="ml-4 flex-grow">
                  <p className="text-base h-6 overflow-y-hidden text-gray-800 font-medium">
                    {product.name}
                  </p>
                  <div className="flex my-1">
                    {renderRatingStars(product.rating)}
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-400 line-through text-sm mr-2">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                    <span className="text-gray-800 font-bold">
                      ${product.salePrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </Link>
            </Card>
          )
        )}
      </div>
    </ProductsContainerSidebar>
  );
}
