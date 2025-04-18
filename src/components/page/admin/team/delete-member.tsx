"use client";

import { Dialog } from "@mui/material";
import { useTranslations } from "next-intl";

export default function DeleteMember({
  open,
  setOpen,
  id,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  id: number;
}) {
  const t = useTranslations("admin.Team");
  const handleDetele = async () => {
    console.log("delete member", id);
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      maxWidth="xl"
      sx={{ backgroundColor: "#eaeceb", zIndex: 3 }}
      PaperComponent={({ children }) => (
        <div className="min-w-[480px] min-h-[480px]">{children}</div>
      )}
    >
      <div className="w-full h-auto bg-white p-5 flex flex-col gap-5 items-center rounded-lg">
        <p className="w-full text-center text-xl font-bold text-red-600">
          {t("note")} {id}
        </p>
        <button
          type="button"
          onClick={() => handleDetele()}
          className="w-32 h-12 rounded-md bg-[#4880FF] hover:bg-[#3864cc] disabled:bg-gray-600 text-white capitalize"
        >
          {t("delete")}
        </button>
      </div>
    </Dialog>
  );
}
