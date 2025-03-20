import PageHeader from "@/components/common/page-header";
import { Button } from "@mui/material";
import { useTranslations } from "next-intl";

export default function TodoHeader() {
  const t = useTranslations("To-do")
  return (
    <div className="flex justify-between items-center mb-10">
      <PageHeader page="To-do"/>
      <Button
        sx={{
          width: "147px",
          height: "48px",
          backgroundColor: "#4880FF",
          color: "white",
          borderRadius: "6px",
          fontSize: "14px",
          padding: "auto",
          textTransform: "none",
        }}
        href="#"
      >
        {t("button")}
      </Button>
    </div>
  );
}
