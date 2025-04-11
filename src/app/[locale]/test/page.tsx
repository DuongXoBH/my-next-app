"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";

export default function CartIcon() {
  const [quantity] = useState(3); 

  return (
    <div className="w-6 relative group cursor-pointer mt-5">
      <ShoppingCart className="w-6 h-6 text-gray-700" />
      <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {quantity}
      </span>
    </div>
  );
}
