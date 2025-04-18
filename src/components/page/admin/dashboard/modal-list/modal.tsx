import { IDashboardModal } from "@/constants/admin/dashboard";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function DashboardModal(props: { modal: IDashboardModal }) {
  const t = useTranslations("admin.Dashboard");
  return (
    <button className="w-[23%] min-h-[162px] p-4 flex flex-col justify-between rounded-2xl bg-white">
      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-col gap-4">
          <p className="text-gray-700 text-base leading-[21.82px]">
            {t(props.modal.title)}
          </p>
          <p className="font-bold text-3xl leading-[38.19px]">
            {props.modal.value}
          </p>
        </div>
        <div>
          <Image alt="" src={props.modal.img} width={60} height={60}></Image>
        </div>
      </div>
      <div className="w-full flex flex-row">
        {props.modal.upStatus ? (
          <Image
            alt=""
            src="/dashboard/ic-up-24px.svg"
            width={24}
            height={24}
          ></Image>
        ) : (
          <Image
            alt=""
            src="/dashboard/ic-down-24px.svg"
            width={24}
            height={24}
          ></Image>
        )}
        {props.modal.compare}
      </div>
    </button>
  );
}
