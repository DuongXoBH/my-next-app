"use client"

import { useOutsideClick } from "@/hooks/use-outside-click";
import {  dateSelectedAtom } from "@/store/order-filter";
import { Divider } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Dayjs } from "dayjs";
import { useAtom } from "jotai";
import Image from "next/image";
import { useCallback, useState } from "react";

export default function DateFilter() {
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useAtom(dateSelectedAtom);
  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
  };
  const handleClickOutSideDate = useCallback(() => {
    if (isDateOpen) {
      setIsDateOpen(false);
    }
  }, [isDateOpen]);
  const dateRef = useOutsideClick(handleClickOutSideDate);
  return (
    <div
    ref={dateRef}
    className="relative min-w-[171.83px] flex justify-center items-center border-r-[0.6px] border-r-[#D5D5D5]"
  >
    <button
      onClick={() => setIsDateOpen(!isDateOpen)}
      className="flex flex-row justify-between px-6 items-center gap-6 rounded-lg text-black font-bold"
    >
      {selectedDate ? selectedDate.format("DD/MM/YYYY") : "Date"}
      <Image alt="" src="/path.png" width={12} height={8}></Image>
    </button>

    {isDateOpen && (
      <div className="absolute top-16 left-[-120px] bg-white shadow-lg rounded-lg p-6 max-w-[400px] z-10">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar 
          onChange={handleDateChange}/>
        </LocalizationProvider>
        <Divider />
        <p className="text-sm text-gray-500 my-3">
          *You can choose multiple date
        </p>

        <div className="w-full flex justify-center mt-8">
          <button
            onClick={() => setIsDateOpen(false)}
            className="w-[25%] bg-blue-500 text-xs text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Apply Now
          </button>
        </div>
      </div>
    )}
  </div>
  );
}
