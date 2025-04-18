import { IPricingList, PRICINGLIST } from "@/constants/admin/pricing";
import PricingCard from "./pricing-card";

export default function PricingList() {
  return (
    <div className="flex flex-row flex-wrap justify-between">
      {PRICINGLIST.map((element: IPricingList, index: number) => {
        return <PricingCard key={`list-[${index}]`} arr={element} />;
      })}
    </div>
  );
}
