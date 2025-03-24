import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export function useFetchProductsApi() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch(`${apiUrl}/products/`);
      const result = await response.json();
      return result;
    },
  });
}

export function useFetchPaginationProduct({offset, limit}:{
    offset: number;
    limit: number;
}) {
return useQuery({
    queryKey: ['pagination-product',offset],
    queryFn: async () =>{
        const response = await fetch(`${apiUrl}/products?offset=${offset}&limit=${limit}`);
        const result = await response.json();
        if (!response.ok) {
                toast.error(result.message);
                throw new Error(result.message);
              }
        return result;
    }
});
}

export function useFetchProductByIdApi(productId: string) {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: async () => {
      const response = await fetch(`${apiUrl}/products/${productId}`);
      const result = await response.json();
      return result;
    },
  });
}
