import DashboardModal from "./modal";
import { DASHBOARDMODAL } from "@/constants/admin/dashboard";

export default function ModalList() {
  return (
    <div id="#modal-list" className="w-full p-2 flex flex-row justify-between">
      {DASHBOARDMODAL.map((element, index: number) => {
        return <DashboardModal key={`modal-${index}`} modal={element} />;
      })}
    </div>
  );
}
