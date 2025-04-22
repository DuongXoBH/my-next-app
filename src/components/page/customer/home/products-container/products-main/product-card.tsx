import { IProduct } from "@/components/page/admin/favorites/favorites";
import { Star } from "lucide-react";
import { CardMedia } from "@mui/material";

export default function ProductsCard({ product }: { product: IProduct }) {
  return (
    <div className="w-full pb-3 rounded-[8px] border border-[#9f9f9f] flex flex-col shadow transition hover:shadow-lg cursor-pointer group">
      <div className="w-full rounded-[8px] h-[220px] flex justify-center items-center 2xl:group-hover:scale-110">
        <CardMedia
          component="img"
          image={product.images[0]}
          alt={product.title}
          sx={{
            width: 230,
            height: 200,
            objectFit: "contain",
          }}
        />
      </div>
      <div className="w-full h-[160px] flex flex-col justify-between pl-3 mt-5">
        <p className="w-full text-sm text-[#ff8f9c] uppercase h-[14px] overflow-y-hidden">
          {product.category.name}
        </p>
        <p className="w-full h-12 text-base capitalize overflow-y-hidden">
          {product.title}
        </p>
        <div className="w-full flex flex-row">
          <Star className="w-5 h-5 text-amber-400" fill="currentColor" />
          <Star className="w-5 h-5 text-amber-400" fill="currentColor" />
          <Star className="w-5 h-5 text-amber-400" fill="currentColor" />
          <Star className="w-5 h-5 text-amber-400" />
          <Star className="w-5 h-5 text-amber-400" />
        </div>
        <p className="w-full text-xl font-bold uppercase overflow-y-hidden">
          ${product.price.toFixed(2)}
          <span className="ml-2 line-through text-gray-400 text-sm">
            ${(product.price * 1.25).toFixed(2)}
          </span>
        </p>
      </div>
    </div>
  );
}
