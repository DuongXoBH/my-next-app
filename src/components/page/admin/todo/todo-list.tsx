"use client";

import { CALENDAREVENT } from "@/constants/admin/event";
import Image from "next/image";
import { useState } from "react";

export default function TodoList() {
  const events = CALENDAREVENT.map((event) => {
    return { ...event, checked: false };
  });
  const [selectedList, setSelectedList] = useState<string[]>([]);
  console.log("🚀 ~ TodoList ~ selectedList:", selectedList);

  //selected logic
  const handleSelectedChange = (
    id: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { checked } = e.target;
    if (checked) {
      // add id to starred list if it not exist on list
      setSelectedList((prev) =>
        selectedList.includes(id) ? prev : [...prev, id]
      );
    } else {
      // rm id in list if it exist on list
      setSelectedList((prev) =>
        selectedList.includes(id) ? prev.filter((i) => i !== id) : prev
      );
    }
  };

  //starred logic
  const handleStarChange = (
    id: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { checked } = e.target;
    if (checked) {
      console.log(id);
    } else console.log("not", id);
  };
  return (
    <div className={`w-full flex flex-col gap-6`}>
      {events.map((event, index: number) => {
        return (
          <div
            key={`event-${index}`}
            className={`w-full h-24 rounded-[12px] border-[0.6px] border-gray-200 p-8 flex flex-row justify-between items-center ${selectedList.includes(event.id) ? "bg-blue-500 text-white" : "bg-[white]"}`}
          >
            <div className="flex gap-6 items-center">
              <label className="w-8 h-8 inline-flex items-center justify-center">
                <input
                  type="checkbox"
                  className="peer w-[30px] h-[30px] appearance-none rounded-[8px] border border-gray-500 cursor-pointer checked:bg-blue-500 checked:border-white"
                  defaultChecked={event.checked}
                  onChange={(e) => handleSelectedChange(event.id, e)}
                />
                <span className="absolute w-4 h-4 flex items-center">
                  <Image alt="" src="/check.png" width={14} height={10}></Image>
                </span>
              </label>

              <p className="ml-6 text-base font-semibold flex items-center">
                {event.title}
              </p>
            </div>
            {selectedList.includes(event.id) ? (
              <>
                <button onClick={() => console.log("remove", event.id)}>
                  <Image
                    alt=""
                    src="/remove-button.svg"
                    width={65}
                    height={40}
                  ></Image>
                </button>
              </>
            ) : (
              <div className="flex flex-row gap-8">
                {" "}
                <label className="w-10 h-10 inline-flex items-center cursor-pointer active:border-none">
                  <input
                    type="checkbox"
                    className="hidden peer"
                    defaultChecked={event.checked}
                    onChange={(e) => handleStarChange(event.id, e)}
                  />
                  <span
                    className={`h-10 w-10 flex items-center justify-center text-gray-200  peer-checked:text-yellow-500 `}
                  >
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.975c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.54-1.118l1.287-3.975a1 1 0 00-.364-1.118L2.045 9.402c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.975z" />
                    </svg>
                  </span>
                </label>
                <button>
                  <Image
                    alt=""
                    src="/delete-todo.png"
                    width={30}
                    height={30}
                  ></Image>
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
