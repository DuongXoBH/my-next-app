import TinyEditorComponent from "@/components/page/admin/mail/inbox/text-field";
import { createMailSchema } from "@/hook-form-schema/mail";
import { yupResolver } from "@hookform/resolvers/yup";
import { Dialog, Divider } from "@mui/material";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";

export interface ICreateMailForm {
  to: string;
  subject: string;
  content: string;
}

export default function CreateMail() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const errorText = useTranslations("Errors");
  const schema = createMailSchema(errorText as (key: string) => string);
  const [open, setOpen] = useState(false);
  const t = useTranslations("Inbox");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<ICreateMailForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ICreateMailForm) => {
    setIsSubmitting(true);
    console.log("🚀 ~ onSubmit ~ data:", data);
    setIsSubmitting(false);
    reset({
      to: "",
      subject: "",
      content: "",
    });
  };

  return (
    <div>
      {/* open mail dialog */}
      <button
        className="w-[238px] h-[43px] bg-[#4880FF] text-white rounded-lg transform-none"
        onClick={() => setOpen(true)}
      >
        {t("compose")}
      </button>
      {/* create mail dialog  */}
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        maxWidth="xl"
        PaperComponent={({ children }) => (
          <div className="min-w-[1140px] min-h-[480px]">{children}</div>
        )}
      >
        <div className="w-full h-auto bg-white p-5 flex flex-col gap-5 rounded">
          <p className="text-black text-xl font-semibold">{t("new messase")}</p>
          <Divider />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-5"
          >
            <input
              type="text"
              {...register("to")}
              placeholder={`${t("to")} : example@mail.com`}
              className="p-5 border-[2px] rounded border-gray-300 focus:border-blue-500 focus:outline-none"
            />
            {errors.to && <p className="text-red-500">{errors.to.message}</p>}
            <Divider />
            <input
              type="text"
              {...register("subject")}
              placeholder={`${t("subject")} : Example`}
              className="p-5 border-[2px] rounded border-gray-300 focus:border-blue-500 focus:outline-none"
            />
            {errors.subject && (
              <p className="text-red-500">{errors.subject.message}</p>
            )}
            <Divider />
            <textarea
              id="content"
              {...register("content")}
              placeholder={`${t("message")}`}
              className="hidden"
            />
            <label htmlFor="content">
              <TinyEditorComponent
                setContent={setValue}
                placeholder={t("message")}
              />
            </label>
            {errors.content && (
              <p className="text-red-500">{errors.content.message}</p>
            )}
            <Divider />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-32 h-12 rounded-md bg-[#5071c0] hover:bg-[#3a62be] active:bg-red-500 text-white"
            >
              {t("send")}
            </button>
          </form>
        </div>
      </Dialog>
    </div>
  );
}
