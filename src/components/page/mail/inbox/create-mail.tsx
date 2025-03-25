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
  const errorText = useTranslations("Errors");
  const schema = createMailSchema(errorText as (key: string) => string);
  const [open, setOpen] = useState(false);
  const t = useTranslations("Inbox");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateMailForm>({
    resolver: yupResolver(schema),
  });
  
  const onSubmit = (data: ICreateMailForm) => {
    console.log(data);
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
        sx={{
          "& .css-10d30g3-MuiPaper-root-MuiDialog-paper": { maxWidth: "none" },
        }}
      >
        <div className="min-w-[1140px] min-h-[480px] bg-white p-5 flex flex-col gap-5">
          <p className="text-black text-xl font-semibold">{t("new messase")}</p>
          <Divider/>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-5"> 
            <input type="text" {...register("to")} placeholder={`${t("to")} : example@mail.com`} className="p-5 "/>
            {errors.to && <p className="text-red-500">{errors.to.message}</p>}
            <Divider/>
            <input type="text" {...register("subject")} placeholder={`${t("subject")} : Example`} className="p-5 "/>
            {errors.subject && <p className="text-red-500">{errors.subject.message}</p>}
            <Divider/>
            <textarea {...register("content")} placeholder={`${t("message")}`} className="p-5 w-full h-52 flex items-start"/>
            {errors.subject && <p className="text-red-500">{errors.subject.message}</p>}
            <Divider/>
            <button type="submit" className="w-32 h-12 rounded-md bg-[#4880FF] text-white">{t("send")}</button>
          </form>
        </div>
      </Dialog>
    </div>
  );
}
