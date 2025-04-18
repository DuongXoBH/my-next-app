import { Tooltip } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function BarChart() {
  const t = useTranslations("admin.UI Elements");
  return (
    <div className="w-full h-[318px] bg-white shadow-md rounded-[8px] p-6 mt-[44px]">
      <p className="text-2xl font-bold capitalize">{t("bar chart")}</p>
      <div className="w-[1040px] flex justify-between items-center mt-14 mx-[auto]">
        <Tooltip title="Bar 1">
          <Image
            alt=""
            src="/ui-elements/bar/bar-1.png"
            width={200}
            height={148}
          ></Image>
        </Tooltip>
        <Tooltip title="Bar 2">
          <Image
            alt=""
            src="/ui-elements/bar/bar-2.png"
            width={200}
            height={148}
          ></Image>
        </Tooltip>
        <Tooltip title="Bar 3">
          <Image
            alt=""
            src="/ui-elements/bar/bar-3.png"
            width={200}
            height={148}
          ></Image>
        </Tooltip>
        <Tooltip title="Bar 4">
          <Image
            alt=""
            src="/ui-elements/bar/bar-4.png"
            width={200}
            height={148}
          ></Image>
        </Tooltip>
      </div>
    </div>
  );
}
