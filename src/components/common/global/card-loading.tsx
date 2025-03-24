"use client";

import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function CardLoading() {
  return (
    <div className="w-full h-[500px] bg-[#F5F6FA] flex flex-row justify-between">
      <Stack spacing={1} sx={{ width: "30%" }}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} animation="wave" />

        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={40} height={40} animation="wave" />
        <Skeleton
          variant="rectangular"
          width={210}
          height={60}
          animation="wave"
        />
        <Skeleton variant="rounded" width={210} height={60} animation="wave" />
      </Stack>
      <Stack spacing={1} sx={{ width: "30%" }}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} animation="wave" />

        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={40} height={40} animation="wave" />
        <Skeleton
          variant="rectangular"
          width={210}
          height={60}
          animation="wave"
        />
        <Skeleton variant="rounded" width={210} height={60} animation="wave" />
      </Stack>
      <Stack spacing={1} sx={{ width: "30%" }}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} animation="wave" />

        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={40} height={40} animation="wave" />
        <Skeleton
          variant="rectangular"
          width={210}
          height={60}
          animation="wave"
        />
        <Skeleton variant="rounded" width={210} height={60} animation="wave" />
      </Stack>
    </div>
  );
}

