"use client";

import { IEventItem } from "@/constants/event";
import { eventAtom } from "@/store/event";
import { useAtom } from "jotai";
import { useState } from "react";

export default function LeftSide() {
  const [events] = useAtom(eventAtom);

  const [visibleCount, setVisibleCount] = useState<number>(4);
  return (
    <div className="w-full flex flex-col items-center py-6 gap-4 ">
      <button className="w-[80%] rounded-[8px] h-10 flex justify-center items-center bg-[#5186FF] text-white">
        Add New Event
      </button>
      <p className="w-full pl-[10%] text-lg font-semibold leading-[24px]">
        You are going to
      </p>
      <div className="w-full flex flex-col gap-4">
        {events
          .slice(0, visibleCount)
          .map((element: IEventItem, index: number) => {
            return (
              <div
                key={`events-${index}`}
                className="w-full flex flex-col pl-[10%] min-h-40 justify-around "
              >
                {/* line */}
                <div className="border-t border-[#9b9eaa] w-[70%] border-[2px]"></div>{" "}
                <p className="w-full text-sm font-semibold">{element.title}</p>
                <p className="w-full text-xs text-[#5e5959]">
                  Member: {element.member}
                </p>
                <p className="w-full text-xs text-[#5e5959]">
                  Start: {element.start}
                </p>
                <p className="w-full text-xs text-[#5e5959]">
                  End: {element.end}
                </p>
              </div>
            );
          })}
      </div>
      {visibleCount < events.length && (
        <div className="w-full flex flex-col gap-4 justify-center">
          {/* line */}
          <div className="border-t border-[#9b9eaa] w-[70%] border-[2px] ml-[10%]"></div>{" "}
          <button
            onClick={() => setVisibleCount((prev) => prev + 4)}
            className="mt-4 px-4 py-2 bg-gray-200 font-semibold rounded-lg hover:bg-gray-200"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
}
