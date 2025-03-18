"use client";

import { CreateContactForm } from "@/components/page/contact/create-contact";
import { createNewContactSchema } from "@/hook-form-schema/contact";
import { contactListAtom } from "@/store/contact";
import { yupResolver } from "@hookform/resolvers/yup";
import { CardMedia } from "@mui/material";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const schema = createNewContactSchema;

export default function UpdateContactComponent({userId}:{userId:string}) {
  const id = userId;
  const [isSummiting, setIsSubmitting] = useState(false);
  const [users] = useAtom(contactListAtom);
  const [imageUrl, setImageUrl] = useState<string>("");
  const user = users.filter((user) => {
    return user.id == id;
  });
  useEffect(() => {
    setImageUrl(user[0]?.avatar);
  }, [user]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateContactForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: user[0]?.name,
      email: user[0]?.email,
      birth: user[0]?.birth,
      gender: user[0]?.gender,
      phone: user[0]?.phone,
    },
  });
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
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                const reader = new FileReader();
                reader.onload = (e) => {
                  setImageUrl(e.target?.result as string);
                };
                reader.readAsDataURL(e.target.files[0]);
              }
            }}
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer w-20 h-20 mb-4"
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
          </label>
          {errors.image && (
            <p className="text-red-500">{errors.image.message}</p>
          )}
          <p className="text-[#4379EE] text-sm font-semibold tracking-[0.54px]">
            {imageUrl ? "Edit Photo" : "Upload Photo"}
          </p>
        </div>
        <div className="w-full min-h-[106px] grid grid-cols-2 gap-[60px]">
          <div className="w-[360px] h-full flex flex-col justify-between items-start">
            <div className="w-full h-[82px] flex flex-col justify-between items-start">
              <label
                className="text-sm font-semibold mb-3 text-[#ADADAD]"
                htmlFor="firstName "
              >
                First Name
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
                className="text-sm font-semibold mb-3 text-[#ADADAD]"
                htmlFor="lastName"
              >
                Last Name
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
                className="text-sm font-semibold mb-3 text-[#ADADAD]"
                htmlFor="email "
              >
                Your Email
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
                className="text-sm font-semibold mb-3 text-[#ADADAD]"
                htmlFor="phone"
              >
                Phone Number
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
                className="text-sm font-semibold mb-3 text-[#ADADAD]"
                htmlFor="birth "
              >
                Date of birth
              </label>
              <input
                type="date"
                id="birth"
                placeholder="Enter your birthdate"
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
                Gender
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
          Update Now
        </button>
      </form>
    </div>
  );
}
