import { useQuery } from "@tanstack/react-query";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export function useFetchCategoriesApi() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await fetch(`${apiUrl}/categories/`);
      const result = await response.json();
      return result;
    },
  });
}

export function useFetchProductByCategoriesApi(id: number) {
  return useQuery({
    queryKey: [`categories-products-${id}`],
    queryFn: async () => {
      const response = await fetch(`${apiUrl}/categories/${id}`);
      const result = await response.json();
      return result;
    },
  });
}
