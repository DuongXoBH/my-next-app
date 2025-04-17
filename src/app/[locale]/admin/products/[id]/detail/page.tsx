import PageHeader from "@/components/common/global/page-header";
import ProductDetail from "@/components/page/admin/products/product-detail";
import { use } from "react";

export default function Product({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  return (
    <div className="w-full pb-2 flex flex-col gap-6">
      <PageHeader page="ProductDetail" />
      <ProductDetail id={id} />
    </div>
  );
}
