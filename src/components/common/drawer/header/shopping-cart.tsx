"use client";

import { useFetchUserApiBySession } from "@/api-hooks/user";
import { authShoppingCart } from "@/stores/products";
import { userToken } from "@/stores/users";
import { useAtom } from "jotai";
import { ShoppingCart } from "lucide-react";

export default function CartIcon() {
  const [authToken] = useAtom(userToken);
  const { data: auth } = useFetchUserApiBySession(authToken);
  const [cart] = useAtom(authShoppingCart);
  const cartLength = cart[auth?.id]?.length || 0;

  return (
    <div className="w-6 relative group flex items-center">
      <ShoppingCart className="w-6 text-gray-700" />
      <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center transition-opacity duration-300">
        {cartLength > 99 ? "99+" : cartLength}
      </span>
    </div>
  );
}
