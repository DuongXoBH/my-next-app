import {
  useFetchUpdateProducts,
} from "@/api-hooks/product";
import { updateProductsSchema } from "@/hook-form-schema/product";
import { yupResolver } from "@hookform/resolvers/yup";
import { Dialog, Divider, Tooltip } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function UpdateDialog({ id }: { id: number }) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = useTranslations("Product Stock");
  const schema = updateProductsSchema;
  const updateMutation = useFetchUpdateProducts();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ title: string; price: number }>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: { title: string; price: number }) => {
    setIsSubmitting(true);
    await updateMutation.mutate(
      { id, data },
      {
        onSuccess(data) {
          console.log(data);
          toast(t("toast"));
        },
        onError(error: unknown) {
          if (error instanceof Error) {
            toast.error(error.message);
          }
        },
      }
    );
    console.log(data);
    setIsSubmitting(false);
  };

  return (
    <div>
      <Tooltip title="edit">
        <button
          onClick={() => setOpen(true)}
          className="w-[48px] h-[32px] flex items-center justify-center border-r-[#D5D5D5] border-r-[1px]"
        >
          <Image
            alt=""
            src="/stock/pencil-write.png"
            width={16}
            height={16}
          ></Image>
        </button>
      </Tooltip>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        maxWidth="xl"
        PaperComponent={({ children }) => (
          <div className="min-w-[720px] min-h-[480px]">{children}</div>
        )}
      >
        <div className="w-full h-auto bg-white p-5 flex flex-col gap-5 items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-5"
          >
            <p className="w-full text-xl font-bold text-center capitalize">{t("update")} {id}</p>
            <Divider />
            <div className="w-full flex flex-col gap-2">
              <input
                type="text"
                className="h-10 px-2"
                {...register("title")}
                placeholder={t("title")
                
                }
              />
              {errors.title && (
                <p className="text-red-500 capitalize">{errors.title.message}</p>
              )}
            </div>
            <Divider />
            <div className="w-full flex flex-col gap-2">
              <input
                type="number"
                className="h-10 px-2"
                {...register("price")}
                placeholder={t("price")}
              />
              {errors.price && (
                <p className="text-red-500 capitalize">{errors.price.message}</p>
              )}
            </div>
            <Divider />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-32 h-12 rounded-md bg-[#4880FF] hover:bg-[#3864cc] text-white capitalize"
            >
              {t("update")}
            </button>
          </form>
        </div>
      </Dialog>
    </div>
  );
}
