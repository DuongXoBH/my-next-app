import DashboardModal from "./modal";
import { DASHBOARDMODAL, IDashboardModal } from "@/constants/dashboard";

export default function ModalList() {
  return (
    <div id="#modal-list" className="w-full p-2 flex flex-row justify-between">
        {DASHBOARDMODAL.map((element:IDashboardModal,index:number)=>{
            return (
                <DashboardModal key={`modal-${index}`} modal={element}/>
            )
        })}
    </div>
  );
}
