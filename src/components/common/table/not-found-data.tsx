import { useTranslations } from "next-intl";

export default function NotFound() {
    const t = useTranslations("Order Lists");
  return (
    <div className="flex items-center justify-center h-full w-full capitalize">
      <p>{t("not found")}</p>
    </div>
  );
}
