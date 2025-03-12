import { Button, Typography } from "@mui/material";
import React from "react";

const TeamHeader: React.FC = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full">
      <Typography
        sx={{
          mb: 1,
          fontSize: 32,
          mt: "16px",
          lineHeight: "43.5px",
          textAlign: "start",
          fontWeight: 700,
        }}
      >
        Team
      </Typography>
      <Button
        sx={{
          width: "147px",
          height: "48px",
          backgroundColor: "#4880FF",
          color: "white",
          borderRadius: "6px",
          fontSize: "14px",
          padding: "auto",
          textTransform: "none",
        }}
        href="#"
      >
        Add New Member
      </Button>{" "}
    </div>
  );
};

export default TeamHeader;
