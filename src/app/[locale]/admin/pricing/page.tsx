import PageHeader from "@/components/common/globals/page-header";
import PricingList from "@/components/page/admin/pricing/pricing-list";

export default function Pricing() {
  return (
    <div className="w-full pb-2">
      <PageHeader page="Pricing" />
      <PricingList />
    </div>
  );
}
