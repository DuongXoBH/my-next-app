import { ORDERLIST } from "@/constants/order";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { IOrder, orderListAtom, searchAtom } from "@/store/order-filter";
import { Divider } from "@mui/material";
import { useAtom } from "jotai";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useCallback, useState } from "react";

const orderStatus = [
  "Completed",
  "Processing",
  "Rejected",
  "OnHold",
  "Transit",
];

export default function StatusFilter() {
  const [, setData] = useAtom(orderListAtom);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [orderSearch, setOrderSearch] = useAtom(searchAtom);
  const t = useTranslations("Order Lists");
  //event handler for selecting status
  const handleStatusSelect = (status: string) => {
    setOrderSearch((prev)=> prev.status.includes(status) ? {...prev,status: prev.status.filter((i)=> i!== status)} : {...prev, status: [...prev.status, status]});
  };

  const handleClickOutSideStatus = useCallback(() => {
    if (isStatusOpen) {
      setIsStatusOpen(false);
    }
  }, [isStatusOpen]);
  const statusRef = useOutsideClick(handleClickOutSideStatus);
  //event handler for filtering
  const handleFilter = () => {
    setIsStatusOpen(false);

    let dataVal= ORDERLIST;
    if(orderSearch.type.length > 0){ 
      dataVal=  dataVal.filter((order: IOrder) =>
        orderSearch.type.includes(order.type))
    }
    if(orderSearch.status.length > 0){ 
      dataVal=  dataVal.filter((order: IOrder) =>
        orderSearch.status.includes(order.status))
    }
    if (orderSearch.date && orderSearch.date.length > 0) {
      dataVal = dataVal.filter((order: IOrder) =>
        orderSearch.date?.includes(order.date))
    }
    setData(dataVal);
  } 
  return (
    <div
      ref={statusRef}
      className="relative flex justify-center items-center border-r-[0.6px] border-r-[#D5D5D5]"
    >
      <button
        onClick={() => setIsStatusOpen(!isStatusOpen)}
        className="flex flex-row justify-between px-6 items-center gap-6 rounded-lg text-black font-bold capitalize"
      >
        {t("status")}
        <Image alt="" src="/path.png" width={12} height={8}></Image>
      </button>

      {isStatusOpen && (
        <div className="absolute top-16 left-[-160px] bg-white shadow-lg rounded-lg p-6 w-[521px] z-10">
          <p className="text-lg font-bold mb-4">Select Order Status</p>
          <div className="grid grid-cols-3 gap-3 mb-6">
            {orderStatus.map((type) => (
              <button
                key={type}
                onClick={() => handleStatusSelect(type)}
                className={`border rounded-[17px] px-3 py-2 text-sm font-medium ${
                  orderSearch.status.includes(type)
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          <Divider />
          <p className="text-sm text-gray-500 my-3">
            *You can choose multiple Order Status
          </p>

          <div className="w-[25%] flex justify-center mt-8">
            <button
              onClick={() => handleFilter()}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
