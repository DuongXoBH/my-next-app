"use client";

import { Box, Divider, Tooltip, Typography } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useCallback, useState } from "react";
import { Dayjs } from "dayjs";
import Image from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const orderTypes = [
  "Health & Medicine",
  "Book & Stationary",
  "Services & Industry",
  "Fashion & Beauty",
  "Home & Living",
  "Electronics",
  "Mobile & Phone",
  "Accessories",
];

const orderStatus = [
  "Completed",
  "Processing",
  "Rejected",
  "On Hold",
  "In Transit",
];

export default function FilterGroup() {
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [isTypesOpen, setIsTypesOpen] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  console.log("🚀 ~ FilterGroup ~ isStatusOpen:", isStatusOpen)
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);

  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
  };
  const handleTypeSelect = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };
  const handleStatusSelect = (type: string) => {
    setSelectedStatus((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleClickOutSideDate = useCallback(() => {
    if (isDateOpen) {
      setIsDateOpen(false);
    }
  }, [isDateOpen]);
  const handleClickOutSideTypes = useCallback(() => {
    if (isTypesOpen) {
      setIsTypesOpen(false);
    }
  }, [isTypesOpen]);
  const handleClickOutSideStatus = useCallback(() => {
    if (isStatusOpen) {
      setIsStatusOpen(false);
    }
  }, [isStatusOpen]);
  
  const dateRef = useOutsideClick(handleClickOutSideDate);
  const typesRef = useOutsideClick(handleClickOutSideTypes);
  const statusRef = useOutsideClick(handleClickOutSideStatus);
  return (
    <Box
      sx={{
        display: "flex",
        width: "852px",
        height: "70px",
        flexDirection: "row",
        borderRadius: "12px",
        borderColor: "rgba(213, 213, 213, 1)",
        borderWidth: "0.6px",
        borderStyle: "solid",
        marginBottom: "24px",
      }}
    >
      <Tooltip title="Filter">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingX: "20px",
            textTransform: "none",
            borderRightWidth: "0.6px",
            borderRightColor: "rgba(213, 213, 213, 1)",
            borderRightStyle: "solid",
            borderRadius: "0 !important",
          }}
        >
          <FilterAltIcon sx={{ color: "black" }} />
          <Typography
            sx={{ color: "black", marginLeft: "10px", fontWeight: "600" }}
          >
            {" "}
            Filter By
          </Typography>
        </Box>
      </Tooltip>

      {/* DateFilter */}
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

      {/* TypeFilter */}
      <div
        ref={typesRef}
        className="relative flex justify-center items-center border-r-[0.6px] border-r-[#D5D5D5]"
      >
        <button
          onClick={() => setIsTypesOpen(!isTypesOpen)}
          className="flex flex-row justify-between px-6 items-center gap-6 rounded-lg text-black font-bold"
        >
          Order Type
          <Image alt="" src="/path.png" width={12} height={8}></Image>
        </button>

        {isTypesOpen && (
          <div className="absolute top-16 left-[-180px] bg-white shadow-lg rounded-lg p-6 w-[521px] z-10">
            <p className="text-lg font-bold mb-4">Select Order Type</p>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {orderTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => handleTypeSelect(type)}
                  className={`border rounded-[17px] px-3 py-2 text-sm font-medium ${
                    selectedTypes.includes(type)
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
              *You can choose multiple Order types
            </p>

            <div className="w-full flex justify-center mt-8">
              <button
                onClick={() => setIsTypesOpen(false)}
                className="w-[25%] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                Apply Now
              </button>
            </div>
          </div>
        )}
      </div>

      {/* StatusFilter */}
      <div
        ref={statusRef}
        className="relative flex justify-center items-center border-r-[0.6px] border-r-[#D5D5D5]"
      >
        <button
          onClick={() => setIsStatusOpen(!isStatusOpen)}
          className="flex flex-row justify-between px-6 items-center gap-6 rounded-lg text-black font-bold"
        >
          Order Status
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
                    selectedStatus.includes(type)
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
                onClick={() => setIsStatusOpen(false)}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                Apply Now
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Reset Button  */}
      <div
        className="relative flex justify-center items-center"
      >
        <button
          onClick={() => {
            setSelectedDate(null);
            setSelectedStatus([]);
            setSelectedTypes([]);
          }}
          className="flex flex-row justify-between px-6 items-center gap-6 rounded-lg text-red-700 font-bold"
        >
        <Image alt="" src="/ic-replay-24px.png" width={18} height={18}></Image>
          Reset Filter
        </button>


      </div>
    </Box>
  );
}
