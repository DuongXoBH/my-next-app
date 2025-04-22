import CustomerHomeBanner from "@/components/page/customer/home/banner/banner";
import BlogsList from "@/components/page/customer/home/blogs/blogs-list";
import Categories from "@/components/page/customer/home/categories";
import DesktopMenu from "@/components/page/customer/home/desktop-menu/menu";
import HomeProducts from "@/components/page/customer/home/products-container/home-products";
import TestimonialsBox from "@/components/page/customer/home/testimonial/testimonials-box";

export default function HomePage() {
  return (
    <div className="w-full pb-2 relative">
      <DesktopMenu />
      <CustomerHomeBanner />
      <Categories />
      <HomeProducts />
      <TestimonialsBox />
      <BlogsList />
    </div>
  );
}
