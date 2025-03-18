"use client";

import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";

export default function UploadImage() {
  const [imageUrl, setImageUrl] = useState<string>("");
  console.log("🚀 ~ UploadImage ~ imageUrl:", imageUrl)

  return (
    <div className="flex flex-col items-center">
      <CldUploadWidget
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
        onSuccess={(result) => {
          if (result.event === "success") {
            setImageUrl((result.info as { secure_url: string }).secure_url);

          }
        }}
      >
        {({ open }) => (
          <button onClick={() => open()} className="p-2 bg-blue-500 text-white rounded">
            Upload Image
          </button>
        )}
      </CldUploadWidget>

    </div>
  );
}
