"use client";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function BoxLoading() {
  return (
    <Box sx={{ width: "100%", minHeight: "70vh", padding: 2 }}>
        <Skeleton variant="rectangular" animation="wave" height="70vh" sx={{ mb: 1 }} />
    </Box>
  );
}
