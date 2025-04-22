"use client";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function ListLoading() {
  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      {Array.from({ length: 10 }).map((_, index) => {
        return (
          <div key={index}>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </div>
        );
      })}
    </Box>
  );
}
