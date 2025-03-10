"use client"
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Divider } from "@mui/material";

const orderTypes = [
  "Health & Medicine",
  "Book & Stationary",
  "Services & Industry",
];
const orderStatus = ["Pending", "Processing", "Completed"];

export default function FilterDropdown() {
  const [isTypesOpen, setIsTypesOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);

  const typesRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  // Handle Click Outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (typesRef.current && !typesRef.current.contains(event.target as Node)) {
        setIsTypesOpen(false);
      }
      if (statusRef.current && !statusRef.current.contains(event.target as Node)) {
        setIsStatusOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTypeSelect = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleStatusSelect = (status: string) => {
    setSelectedStatus((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
    );
  };

  return (
    <div className="flex gap-4">
      {/* Type Filter */}
      <div
        ref={typesRef}
        className="relative flex justify-center items-center border-r-[0.6px] border-r-[#D5D5D5]"
      >
        <button
          onClick={() => {
            setIsTypesOpen(!isTypesOpen);
            setIsStatusOpen(false); // Close other dropdown
          }}
          className="flex flex-row justify-between px-6 items-center gap-6 rounded-lg text-black font-bold"
        >
          Order Type
          <Image alt="" src="/path.png" width={12} height={8} />
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

      {/* Status Filter */}
      <div
        ref={statusRef}
        className="relative flex justify-center items-center border-r-[0.6px] border-r-[#D5D5D5]"
      >
        <button
          onClick={() => {
            setIsStatusOpen(!isStatusOpen);
            setIsTypesOpen(false); // Close other dropdown
          }}
          className="flex flex-row justify-between px-6 items-center gap-6 rounded-lg text-black font-bold"
        >
          Order Status
          <Image alt="" src="/path.png" width={12} height={8} />
        </button>

        {isStatusOpen && (
          <div className="absolute top-16 left-[-160px] bg-white shadow-lg rounded-lg p-6 w-[521px] z-10">
            <p className="text-lg font-bold mb-4">Select Order Status</p>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {orderStatus.map((status) => (
                <button
                  key={status}
                  onClick={() => handleStatusSelect(status)}
                  className={`border rounded-[17px] px-3 py-2 text-sm font-medium ${
                    selectedStatus.includes(status)
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
            <Divider />
            <p className="text-sm text-gray-500 my-3">
              *You can choose multiple Order Status
            </p>

            <div className="w-full flex justify-center mt-8">
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
    </div>
  );
}
