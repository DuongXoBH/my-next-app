import LeftSide from "@/components/page/calender/left-side";
import CalendarComponent from "@/components/page/calender/calender-event";

export default function Calendar() {
  return (
    <div className="flex flex-row w-full min-h-screen justify-between gap-10 over mt-4">
      <div className="w-[22%] h-full flex flex-col rounded-[14px] bg-white">
        <LeftSide />
      </div>
      <div className="w-full h-full rounded-[14px] bg-white">
        <CalendarComponent />
      </div>
    </div>
  );
}
