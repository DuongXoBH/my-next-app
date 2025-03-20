import PageHeader from "@/components/common/page-header";
import PricingList from "@/components/page/pricing/pricing-list";

export default function Pricing() {
  return (
    <div className="w-full pb-2">
      <PageHeader page="Pricing"/>
      <PricingList />
    </div>
  );
}
