"use client";

import LinkTag from "@/components/common/globals/link-tag";
import { IEventItem } from "@/constants/admin/event";
import { eventAtom } from "@/stores/admin/event";
import { Divider } from "@mui/material";
import { useAtom } from "jotai";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function LeftSide() {
  const [events] = useAtom(eventAtom);
  const t = useTranslations("admin.Calender");
  const [visibleCount, setVisibleCount] = useState<number>(4);
  return (
    <div className="w-full flex flex-col items-center py-6 gap-4 ">
      <LinkTag
        href="/admin/calender/add-event"
        className="w-[80%] rounded-[8px] h-10 flex justify-center items-center bg-[#5186FF] text-white"
      >
        {t("add")}
      </LinkTag>
      <p className="w-full mt-4 pl-[10%] text-lg font-semibold leading-[24px]">
        {t("text")}
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
                <Divider />
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
        <div className="w-full flex flex-col gap-4 justify-center items-center">
          {/* line */}
          <Divider />
          <button
            onClick={() => setVisibleCount((prev) => prev + 4)}
            className="mt-4 px-4 py-2 w-32 bg-gray-200 font-semibold rounded-lg hover:bg-gray-400"
          >
            {t("more")}
          </button>
        </div>
      )}
    </div>
  );
}
