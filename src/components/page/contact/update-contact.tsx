"use client";

import { useFetchUserApiById } from "@/api-hooks/user";
import { CreateContactForm } from "@/components/page/contact/create-contact";
import { createNewContactSchema } from "@/hook-form-schema/contact";
import { yupResolver } from "@hookform/resolvers/yup";
import { CardMedia } from "@mui/material";
import { CldUploadWidget } from "next-cloudinary";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const schema = createNewContactSchema;

export default function UpdateContactComponent({ userId }: { userId: string }) {
  const id = userId;
  const t = useTranslations("UpdateContact");
  const [isSummiting, setIsSubmitting] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const { data: user } = useFetchUserApiById(id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateContactForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      birth: "25/01/2000",
      gender: "Male",
      phone: "0358993337",
    },
  });
  useEffect(() => {
    setImageUrl(user?.avatar);
    reset({ firstName: user?.name, email: user?.email });
  }, [user, reset]);

  const onSubmit: SubmitHandler<CreateContactForm> = (data) => {
    if (isSummiting) return null;
    setIsSubmitting(true);
    const uploadData = { ...data, image: imageUrl };
    console.log(uploadData);
    toast("Update Success");
    setIsSubmitting(false);
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
        <div className="w-full min-h-[106px] grid grid-cols-2 gap-[60px]">
          <div className="w-[360px] h-full flex flex-col justify-between items-start">
            <div className="w-full h-[82px] flex flex-col justify-between items-start">
              <label
                className="text-sm font-semibold capitalize mb-3 text-[#ADADAD]"
                htmlFor="firstName "
              >
                {t("first name")}
              </label>
              <input
                type="text"
                id="firstName"
                placeholder={t("enter your first name")}
                {...register("firstName")}
                className="w-full border p-2 rounded h-[52px] capitalize"
              />
            </div>
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
          </div>
          <div className="w-[360px] h-full flex flex-col justify-between items-start">
            <div className="w-full h-[82px] flex flex-col justify-between items-start">
              <label
                className="text-sm font-semibold capitalize mb-3 text-[#ADADAD]"
                htmlFor="lastName"
              >
                {t("last name")}
              </label>
              <input
                type="text"
                id="lastName"
                placeholder={t("enter your last name")}
                {...register("lastName")}
                className="w-full border p-2 rounded h-[52px] capitalize"
              />
            </div>
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName.message}</p>
            )}
          </div>
        </div>
        <div className="w-full min-h-[106px] grid grid-cols-2 gap-[60px]">
          <div className="w-[360px] h-full flex flex-col justify-between items-start">
            <div className="w-full h-[82px] flex flex-col justify-between items-start">
              <label
                className="text-sm font-semibold capitalize mb-3 text-[#ADADAD]"
                htmlFor="email"
              >
                {t("email")}
              </label>
              <input
                type="text"
                id="email"
                placeholder={t("enter your email")}
                {...register("email")}
                className="w-full border p-2 rounded h-[52px]"
              />
            </div>
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="w-[360px] h-full flex flex-col justify-between items-start">
            <div className="w-full h-[82px] flex flex-col justify-between items-start">
              <label
                className="text-sm font-semibold mb-3 capitalize text-[#ADADAD]"
                htmlFor="phone"
              >
                {t("phone")}
              </label>
              <input
                type="text"
                id="phone"
                placeholder={t("enter your phone number")}
                {...register("phone")}
                className="w-full border p-2 rounded h-[52px] capitalize"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>
        </div>
        <div className="w-full min-h-[106px] grid grid-cols-2 gap-[60px]">
          <div className="w-[360px] h-full flex flex-col justify-between items-start">
            <div className="w-full h-[82px] flex flex-col justify-between items-start">
              <label
                className="text-sm font-semibold mb-3 text-[#ADADAD] capitalize"
                htmlFor="birth "
              >
                {t("birth")}
              </label>
              <input
                type="date"
                id="birth"
                {...register("birth")}
                className="w-full border p-2 rounded h-[52px]"
              />
            </div>
            {errors.birth && (
              <p className="text-red-500">{errors.birth.message}</p>
            )}
          </div>
          <div className="w-[360px] h-full flex flex-col justify-between items-start">
            <div className="w-full h-[82px] flex flex-col justify-between items-start">
              <label
                className="text-sm font-semibold mb-3 text-[#ADADAD]"
                htmlFor="gender"
              >
                {t("gender")}
              </label>
              <select
                id="gender"
                {...register("gender")}
                className="w-[50%] border p-2 rounded h-[52px]"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            {errors.gender && (
              <p className="text-red-500">{errors.gender.message}</p>
            )}
          </div>
        </div>
        <button
          disabled={isSummiting}
          type="submit"
          className="w-[274px] h-14 bg-[#4880FF] disabled:bg-gray-600 rounded-xl text-white"
        >
          {t("update")}
        </button>
      </form>
    </div>
  );
}
