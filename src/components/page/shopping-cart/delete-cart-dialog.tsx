import { useFetchUserApiBySession } from "@/api-hooks/user";
import { authShoppingCart } from "@/stores/admin/products";
import { userToken } from "@/stores/auth";
import { Dialog, Tooltip } from "@mui/material";
import { useAtom } from "jotai";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

export default function DeteleCardDialog({ id }: { id: number }) {
  const [open, setOpen] = useState(false);
  const [authToken] = useAtom(userToken);
  const { data: auth } = useFetchUserApiBySession(authToken);
  const [carts, setCarts] = useAtom(authShoppingCart);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = useTranslations("admin.Product Stock");

  async function handleDetele() {
    if (isSubmitting) return null;
    setIsSubmitting(true);

    const updateList = carts[auth?.id]?.filter((item) => item.id !== id);
    setCarts((prev) => {
      return {
        ...prev,
        [auth.id]: updateList,
      };
    });

    setIsSubmitting(false);
    setOpen(false);
  }
  return (
    <div>
      <Tooltip title="delete">
        <button
          onClick={() => setOpen(true)}
          className="w-[48px] h-[32px] flex items-center justify-center"
        >
          <Image alt="" src="/stock/bin.png" width={16} height={16}></Image>
        </button>
      </Tooltip>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        maxWidth="xl"
        PaperComponent={({ children }) => (
          <div className="min-w-[480px] min-h-[480px]">{children}</div>
        )}
      >
        <div className="w-full h-auto bg-white p-5 flex flex-col gap-5 items-center">
          <p className="w-full text-center text-xl font-bold text-red-600">
            {t("note")}
          </p>
          <button
            type="button"
            onClick={() => handleDetele()}
            disabled={isSubmitting}
            className="w-32 h-12 rounded-md bg-[#4880FF] hover:bg-[#3864cc] disabled:bg-gray-600 text-white capitalize"
          >
            {t("delete")}
          </button>
        </div>
      </Dialog>
    </div>
  );
}
