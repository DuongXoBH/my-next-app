import { useQuery } from "@tanstack/react-query";

export function useFetchArticles() {
  const url = `${process.env.NEXT_PUBLIC_ORDER_API_URL}/articles`;
  return useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const response = await fetch(url);
      const result = await response.json();
      if (!result) throw new Error("No articles found");
      return result;
    },
  });
}

export function useFetchArticleById(id: string) {
  const url = `${process.env.NEXT_PUBLIC_ORDER_API_URL}/articles/${id}`;
  return useQuery({
    queryKey: ["article", id],
    queryFn: async () => {
      const response = await fetch(url);
      const result = await response.json();
      if (!result) throw new Error("No articles found");
      return result;
    },
  });
}
