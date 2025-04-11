import PageHeader from "@/components/common/global/page-header";
import CartList from "@/components/page/shopping-cart/cart-list";
import OrderSummary from "@/components/page/shopping-cart/order-summary";

export default function CartPage() {
  return (
    <div className="w-full pb-2">
      <PageHeader page="ShoppingCart" />
      <div className="w-full flex flex-row justify-between overflow-x-hidden">
        <CartList />
        <OrderSummary />
      </div>
    </div>
  );
}
