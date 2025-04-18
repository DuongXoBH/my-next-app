import { Tooltip } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function DonutChart() {
  const t = useTranslations("admin.UI Elements");
  return (
    <div className="w-full h-[318px] bg-white shadow-md rounded-[8px] p-6 mt-[44px]">
      <p className="text-2xl font-bold capitalize">{t("donut chart")}</p>
      <div className="w-[1040px] flex justify-between items-center mt-14 mx-[auto]">
        <Tooltip title="Donut 1">
          <Image
            alt=""
            src="/ui-elements/donut/donut-1.png"
            width={155}
            height={155}
          ></Image>
        </Tooltip>
        <Tooltip title="Donut 2">
          <Image
            alt=""
            src="/ui-elements/donut/donut-2.png"
            width={155}
            height={155}
          ></Image>
        </Tooltip>
        <Tooltip title="Donut 3">
          <Image
            alt=""
            src="/ui-elements/donut/donut-3.png"
            width={155}
            height={155}
          ></Image>
        </Tooltip>
        <Tooltip title="Donut 4">
          <Image
            alt=""
            src="/ui-elements/donut/donut-4.png"
            width={155}
            height={155}
          ></Image>
        </Tooltip>
      </div>
    </div>
  );
}
