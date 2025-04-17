import LeftSide from "@/components/page/admin/calender/left-side";
import CalendarComponent from "@/components/page/admin/calender/calender-event";
import PageHeader from "@/components/common/global/page-header";

export default function Calendar() {
  return (
    <div className="w-full pb-2">
      <PageHeader page="Calender" />
      <div className="flex flex-row w-full min-h-screen justify-between gap-5 over mt-4">
        <div className="w-[25%] min-w-[286px] h-full flex flex-col rounded-[14px] bg-white">
          <LeftSide />
        </div>
        <div className="w-full h-full rounded-[14px] bg-white">
          <CalendarComponent />
        </div>
      </div>
    </div>
  );
}
