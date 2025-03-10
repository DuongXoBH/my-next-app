import PricingList from "@/components/page/pricing/pricing-list";
import { Typography } from "@mui/material";

export default function Pricing() {
  return (
    <div className="w-full pb-2">
      <Typography
        sx={{
          mb: "30px",
          fontSize: 32,
          lineHeight: "43.5px",
          textAlign: "start",
          fontWeight: 600,
        }}
      >
        Pricing
      </Typography>
      <PricingList />
    </div>
  );
}
