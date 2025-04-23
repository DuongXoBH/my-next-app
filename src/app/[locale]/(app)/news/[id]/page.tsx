import ArticalDetail from "@/components/page/customer/articles/artcle-details.tsx";
import { use } from "react";

export default function Article({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  return <ArticalDetail id={id} />;
}
