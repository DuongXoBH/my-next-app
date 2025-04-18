"use client";

import { createNewEventSchema } from "@/hook-form-schema/admin/calender";
import { yupResolver } from "@hookform/resolvers/yup";
import { CardMedia } from "@mui/material";
import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface ICreateEvent {
  image: FileList;
  eventName: string;
  time: string;
  date: string;
  address: string;
  contactNumber: string;
}

const schema = createNewEventSchema;
export default function CreateEvent() {
  const [imageUrl, setImageUrl] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit: SubmitHandler<ICreateEvent> = (data) => {
    const uploadData = {
      ...data,
      image: imageUrl,
    };
    console.log("🚀 ~ CreateEvent ~ uploadData:", uploadData);
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
                className="text-sm font-semibold mb-3 text-[#ADADAD]"
                htmlFor="firstName "
              >
                Event Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter event name"
                {...register("eventName")}
                className="w-full border p-2 rounded h-[52px]"
              />
            </div>
            {errors.eventName && (
              <p className="text-red-500">{errors.eventName.message}</p>
            )}
          </div>
          <div className="w-[360px] h-full flex flex-col justify-between items-start">
            <div className="w-full h-[82px] flex flex-col justify-between items-start">
              <label
                className="text-sm font-semibold mb-3 text-[#ADADAD]"
                htmlFor="time"
              >
                Time
              </label>
              <input
                type="time"
                id="time"
                placeholder="Time"
                {...register("time")}
                className="w-full border p-2 rounded h-[52px]"
              />
            </div>
            {errors.time && (
              <p className="text-red-500">{errors.time.message}</p>
            )}
          </div>
        </div>
        <div className="w-full min-h-[106px] grid grid-cols-2 gap-[60px]">
          <div className="w-[360px] h-full flex flex-col justify-between items-start">
            <div className="w-full h-[82px] flex flex-col justify-between items-start">
              <label
                className="text-sm font-semibold mb-3 text-[#ADADAD]"
                htmlFor="date "
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                placeholder="Enter your email"
                {...register("date")}
                className="w-full border p-2 rounded h-[52px]"
              />
            </div>
            {errors.date && (
              <p className="text-red-500">{errors.date.message}</p>
            )}
          </div>
          <div className="w-[360px] h-full flex flex-col justify-between items-start">
            <div className="w-full h-[82px] flex flex-col justify-between items-start">
              <label
                className="text-sm font-semibold mb-3 text-[#ADADAD]"
                htmlFor="address "
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                placeholder="Address"
                {...register("address")}
                className="w-full border p-2 rounded h-[52px]"
              />
            </div>
            {errors.address && (
              <p className="text-red-500">{errors.address.message}</p>
            )}
          </div>
        </div>
        <div className="w-full min-h-[106px] grid grid-cols-2 gap-[60px]">
          <div className="w-[360px] h-full flex flex-col justify-between items-start">
            <div className="w-full h-[82px] flex flex-col justify-between items-start">
              <label
                className="text-sm font-semibold mb-3 text-[#ADADAD]"
                htmlFor="contactNumber"
              >
                Contact Number
              </label>
              <input
                type="text"
                id="contactNumber"
                placeholder="Enter your Contact Number"
                {...register("contactNumber")}
                className="w-full border p-2 rounded h-[52px]"
              />
            </div>
            {errors.contactNumber && (
              <p className="text-red-500">{errors.contactNumber.message}</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="w-[274px] h-14 bg-[#4880FF] rounded-xl text-white"
        >
          Add Now
        </button>
      </form>
    </div>
  );
}
