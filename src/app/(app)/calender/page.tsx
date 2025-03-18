import LeftSide from "@/components/page/calender/left-side";
import CalendarComponent from "@/components/page/calender/calender-event";
import { Typography } from "@mui/material";

export default function Calendar() {
  return (
    <div className="w-full pb-2">
      <Typography
        sx={{
          mb: 1,
          mt: "16px",
          fontSize: 32,
          lineHeight: "43.5px",
          textAlign: "start",
          fontWeight: 700,
        }}
      >
        Calender
      </Typography>
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
