"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { toast } from "react-toastify";
import { CardMedia } from "@mui/material";
import { createNewMemberSchema } from "@/hook-form-schema/admin/team";
import { CldUploadWidget } from "next-cloudinary";
import { useTranslations } from "next-intl";

export interface ICreatememberForm {
  image: FileList;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  gender: string;
}
const schema = createNewMemberSchema;
export default function CreateMemberForm() {
  const t = useTranslations("admin.Team");
  const [imageUrl, setImageUrl] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreatememberForm>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<ICreatememberForm> = (data) => {
    const uploadData = { ...data, image: imageUrl };

    console.log("🚀 ~ CreateMemberForm ~ uploadData:", uploadData);
    toast.success("Add new contact");
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
                className="text-sm font-semibold mb-3 capitalize text-black"
                htmlFor="firstName "
              >
                {t("first name")}
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                {...register("firstName")}
                className="w-full border p-2 rounded h-[52px]"
              />
            </div>
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
          </div>
          <div className="w-[360px] h-full flex flex-col justify-between items-start">
            <div className="w-full h-[82px] flex flex-col justify-between items-start">
              <label
                className="text-sm font-semibold mb-3 capitalize text-black"
                htmlFor="lastName"
              >
                {t("last name")}
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                {...register("lastName")}
                className="w-full border p-2 rounded h-[52px]"
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
                className="text-sm font-semibold mb-3 capitalize text-black"
                htmlFor="email "
              >
                {t("email")}
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
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
                className="text-sm font-semibold mb-3 capitalize text-black"
                htmlFor="phone"
              >
                {t("phone")}
              </label>
              <input
                type="text"
                id="phone"
                placeholder="Enter your phone number"
                {...register("phone")}
                className="w-full border p-2 rounded h-[52px]"
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
                className="text-sm font-semibold mb-3 capitalize text-black"
                htmlFor="role "
              >
                {t("role")}
              </label>
              <input
                type="text"
                id="role"
                placeholder="Role"
                {...register("role")}
                className="w-full border p-2 rounded h-[52px]"
              />
            </div>
            {errors.role && (
              <p className="text-red-500">{errors.role.message}</p>
            )}
          </div>
          <div className="w-[360px] h-full flex flex-col justify-between items-start">
            <div className="w-full h-[82px] flex flex-col justify-between items-start">
              <label
                className="text-sm font-semibold mb-3 capitalize text-black"
                htmlFor="gender"
              >
                {t("gender")}
              </label>
              <select
                id="gender"
                {...register("gender")}
                className="w-full border p-2 rounded h-[52px]"
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
          type="submit"
          className="w-[274px] h-14 bg-[#4880FF] rounded-xl text-white capitalize"
        >
          {t("add")}
        </button>
      </form>
    </div>
  );
}
