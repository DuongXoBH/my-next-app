import { IUser } from "./member-list";
import { CardMedia } from "@mui/material";

export default function MemberCard(props: {member : IUser}) {
    return (
        <div className="w-[23%] h-[289px] flex flex-col items-center bg-white bg-member-card rounded-[18px] mb-8">
            <CardMedia
                    component="img"
                    image={props.member.avatar}
                    alt={props.member.name}
                    sx={{
                      width: "110px",
                      height: "110px",
                      borderRadius:"100%",
                      objectFit:"contain",
                      mt:"44px",
                      boxShadow:"6px 6px 54px #00000008"
                    }}
                  />
            <p className="text-black font-bold text-base mt-6">{props.member.name}</p>
            <p className="text-[#202224] text-sm font-semibold capitalize mt-1">{props.member.role}</p> 
            <p className="text-[#202224] text-sm font-normal mt-2">{props.member.email}</p> 
        </div>
    )   
}