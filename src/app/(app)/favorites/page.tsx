import FavoritesList from "@/components/page/favorites/favorites";
import { Typography } from "@mui/material";

export default function Favorites(){
    return (
        <div className="w-full pb-2">
          <Typography
              sx={{ mb: 1,mt: "16px", fontSize: 32, lineHeight: "43.5px", textAlign: "start", fontWeight: 700 }}
            >
              Favorites
            </Typography>
            <FavoritesList/>
        </div>
      );
}