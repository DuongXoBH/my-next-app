import PageHeader from "@/components/common/globals/page-header";
import SettingsFormComponent from "@/components/page/admin/settings/settings-form";

export default function Settings() {
  return (
    <div className="w-full pb-2">
      <PageHeader page="Settings" />
      <SettingsFormComponent />
    </div>
  );
}
