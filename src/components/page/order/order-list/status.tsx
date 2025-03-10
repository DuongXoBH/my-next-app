
const tagStyles: Record<string, string> = {
    Completed: "bg-teal-100 text-teal-600",
    Rejected: "bg-red-100 text-red-600",
    Processing: "bg-purple-400 text-purple-900",
    OnHold: "bg-orange-400 text-orange-800",
    Transit: "bg-pink-400 text-pink-800",
  };
export function Status(props: {title: string}){
    return (
        <p className={`w-[80px] h-[22px] text-center text-xs pt-[4px] rounded-[3px] ${tagStyles[props.title]}`}>{props.title}</p>
    )
}