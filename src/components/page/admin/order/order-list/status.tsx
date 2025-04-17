
const tagStyles: Record<string, string> = {
    Completed: "bg-teal-100 text-teal-600",
    Rejected: "bg-red-100 text-red-600",
    Processing: "bg-purple-100 text-purple-600",
    OnHold: "bg-orange-100 text-orange-600",
    Transit: "bg-pink-100 text-pink-600",
  };
export function Status(props: {title: string}){
    return (
        <p className={`w-[80px] h-[22px] text-center text-xs pt-[4px] rounded-[3px] ${tagStyles[props.title]}`}>{props.title}</p>
    )
}