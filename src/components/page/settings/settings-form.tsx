"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { CardMedia } from "@mui/material";
import { CldUploadWidget } from "next-cloudinary";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { settingsSchema } from "@/hook-form-schema/settings";

export interface SettingsForm {
  image: FileList;
  name: string;
  copyRight: string;
  title: string;
  description: string;
  keywords: string;
}

const schema = settingsSchema;

export default function SettingsFormComponent() {
  const t = useTranslations("Settings");
  const [imageUrl, setImageUrl] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingsForm>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<SettingsForm> = (data) => {
    const uploadData = { ...data, image: imageUrl };

    console.log("🚀 ~ SettingsForm ~ uploadData:", uploadData)
    toast.success("Save settings");
  };

  return (
    <div className="w-full h-[744px] bg-white rounded-2xl flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[780px] h-[624px] flex flex-col justify-between items-center"
      >
        <div className="text-center div flex flex-col justify-center items-center">
          <input
            type="file"
            {...register("image")}
            className="hidden"
            id="file-upload"
          />
          <label htmlFor="file-upload">
            <CldUploadWidget
              uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
              onSuccess={(result) => {
                if (result.event === "success") {
                  setImageUrl(
                    (result.info as { secure_url: string }).secure_url
                  );
                }
              }}
            >
              {({ open }) => (
                <button
                  type="button"
                  onClick={() => open()}
                  className="flex flex-col items-center"
                >
                  {imageUrl ? (
                    <CardMedia
                      component={"img"}
                      src={imageUrl}
                      sx={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "100%",
                        mx: "auto ",
                      }}
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                      📷
                    </div>
                  )}

                  <p className="text-[#4379EE] text-sm font-semibold tracking-[0.54px] mt-4">
                    {imageUrl ? "Edit Photo" : "Upload Photo"}
                  </p>
                </button>
              )}
            </CldUploadWidget>

            {errors.image && (
              <p className="text-red-500">{errors.image.message}</p>
            )} 
          </label>
        </div>

        <div className="w-full grid grid-cols-2 gap-[60px]">
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-3 text-black capitalize" htmlFor="name">
              {t("site name")}
            </label>
            <input
              type="text"
              id="name"
              placeholder="Bright Web"
              {...register("name")}
              className="w-full border p-2 rounded h-[52px]"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>

          {/* Copyright */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-3 text-black capitalize" htmlFor="copyRight">
              {t("copy right")}
            </label>
            <input
              type="text"
              id="copyRight"
              placeholder="All rights Reserved@brightweb"
              {...register("copyRight")}
              className="w-full border p-2 rounded h-[52px]"
            />
            {errors.copyRight && <p className="text-red-500">{errors.copyRight.message}</p>}
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-[60px]">
          {/* Title */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-3 text-black capitalize" htmlFor="title">
              {t("seo title")}
            </label>
            <input
              type="text"
              id="title"
              placeholder="Bright web is a hybrid dashboard"
              {...register("title")}
              className="w-full border p-2 rounded h-[52px]"
            />
            {errors.title && <p className="text-red-500">{errors.title.message}</p>}
          </div>

          {/* Keywords */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-3 text-black capitalize" htmlFor="keywords">
              {t("seo keywords")}
            </label>
            <input
              type="text"
              id="keywords"
              placeholder="CEO"
              {...register("keywords")}
              className="w-full border p-2 rounded h-[52px]"
            />
            {errors.keywords && <p className="text-red-500">{errors.keywords.message}</p>}
          </div>
        </div>

        <div className="w-full flex flex-col">
          {/* Description */}
          <label className="text-sm font-semibold mb-3 text-black capitalize" htmlFor="description">
            {t("seo description")}
          </label>
          <textarea
            id="description"
            placeholder="Bright web is a hybrid dashboard"
            {...register("description")}
            className="w-full border p-2 rounded min-h-32"
          />
          {errors.description && <p className="text-red-500">{errors.description.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-[274px] h-14 bg-[#4880FF] rounded-xl text-white">
          {t("save")}
        </button>
      </form>
    </div>
  );
}
