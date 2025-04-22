import { CardMedia } from "@mui/material";

export default function CategoriesItem({
  id,
  name,
  image,
}: {
  id: number;
  name: string;
  image: string;
}) {
  return (
    <div className="w-full bg-white h-[84px] p-4 flex flex-row justify-between items-center gap-[10px] rounded-sm border border-[#9f9f9f]">
      <div className="w-14 h-14 bg-[#9f9f9f] flex justify-center items-center">
        <CardMedia
          component="img"
          image={image}
          alt={name}
          sx={{
            width: 30,
            height: 30,
            objectFit: "contain",
          }}
        />
      </div>
      <div className="w-full h-14 flex flex-col justify-between">
        <div className="w-full flex flex-row justify-between">
          <p className="max-w-[150px] text-sm font-extrabold uppercase max-h-6 overflow-hidden text-start">
            {name}
          </p>
          <p className="w-[20px] text-xs font-medium text-red-500">({id})</p>
        </div>
        <button className="w-full capitalize text-sm font-semibold text-start  text-[#FF8F9C]">
          show all
        </button>
      </div>
    </div>
  );
}
