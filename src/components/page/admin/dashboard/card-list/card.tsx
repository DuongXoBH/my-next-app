import { useTranslations } from "next-intl";
import translationData from "@/messages/en.json";
type dashboardKeys = keyof (typeof translationData)["admin"]["Dashboard"];
export default function DashboardCard({
  title,
  children,
}: {
  title: dashboardKeys;
  children: React.ReactNode;
}) {
  const t = useTranslations("admin.Dashboard");
  return (
    <div className="w-[360px] h-[365px] p-[24px] bg-white rounded-[14px] ">
      <p className="text-[22px] leading-[20px] font-semibold">{t(title)}</p>
      {children}
    </div>
  );
}
