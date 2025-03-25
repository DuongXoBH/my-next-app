import PageHeader from "@/components/common/global/page-header";
import SettingsFormComponent from "@/components/page/settings/settings-form";

export default function Settings(){
    return (
        <div className="w-full pb-2">
            <PageHeader page="Settings"/>
            <SettingsFormComponent/>
        </div>
    )
}