import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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

export function useFetchPaginationProduct({
  offset,
  limit,
}: {
  offset: number;
  limit: number;
}) {
  return useQuery({
    queryKey: ["pagination-product", offset],
    queryFn: async () => {
      const response = await fetch(
        `${apiUrl}/products?offset=${offset}&limit=${limit}`
      );
      const result = await response.json();
      if (!response.ok) {
        toast.error(result.message);
        throw new Error(result.message);
      }
      return result;
    },
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

async function fetchUpdateProducts(
  id: number,
  data: { title: string; price: number }
) {
  const updateData = {
    title: data.title,
    price: data.price,
    slug: data.title,
    description: "update description",
    images: [
      "https://res.cloudinary.com/dtg8bciwm/image/upload/v1742973717/storiesig.website_InstagramPost_min8657_3532073818284298836_vxddft.jpg"
  ]
  };
  console.log("🚀 ~ updateData:", updateData)
  console.log(typeof(JSON.stringify(updateData)));
  const response = await fetch(`${apiUrl}/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateData),
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result);
  }
  return result;
}

export function useFetchUpdateProducts(){
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({id,data}: {id:number;data:{ title: string; price: number }}) => fetchUpdateProducts(id,data),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError() {
      throw new Error("Error");
    },
  })
}

async function fetchDeleteProducts(id:number) {
  const response = await fetch(`${apiUrl}/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result);
  }
  return result;
}

export default function useFetchDeleteProducts(){
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id:number)=>fetchDeleteProducts(id),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError() {
      throw new Error("Error");
    },
  })
}
