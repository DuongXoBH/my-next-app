import PageHeader from "@/components/common/global/page-header";
import Banner from "@/components/page/products/banner/banner";
import ProductList from "@/components/page/products/product-list/product-list";

export default function Product() {
  return (
    <div className="w-full pb-2 min-h-[980px]">
      <PageHeader page="Products"/>
      <Banner />
      <ProductList />
    </div>
  );
}
