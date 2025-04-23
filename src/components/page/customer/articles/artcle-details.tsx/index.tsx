"use client";

import { useFetchArticleById } from "@/api-hooks/articles";

export default function ArticalDetail({ id }: { id: string }) {
  const { data: article } = useFetchArticleById(id);
  return (
    <div dangerouslySetInnerHTML={{ __html: article?.content || "" }}></div>
  );
}
