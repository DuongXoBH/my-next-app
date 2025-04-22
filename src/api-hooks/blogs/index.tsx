import { useQuery } from "@tanstack/react-query";

const apiUrl = process.env.NEXT_PUBLIC_ORDER_API_URL;
export function useFetchGetBlogs() {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const response = await fetch(`${apiUrl}/blog/`);
      const result = await response.json();
      return result;
    },
  });
}
