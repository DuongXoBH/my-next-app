import { Button, Typography } from "@mui/material";

export default function ContactHeader(){
    return (
            <div className="flex justify-between items-center mb-10">
              <Typography
                sx={{
                  mb: 1,
                  fontSize: 32,
                  lineHeight: "43.5px",
                  textAlign: "start",
                  fontWeight: 600,
                }}
              >
                Contact
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
                Add New Contact
              </Button>
            </div>
    )
} 