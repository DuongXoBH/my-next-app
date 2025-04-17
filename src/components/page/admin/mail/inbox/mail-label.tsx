
const tagStyles: Record<string, string> = {
    Primary: "bg-teal-100 text-teal-600",
    Work: "bg-orange-100 text-orange-600",
    Friends: "bg-purple-400 text-purple-900",
    Social: "bg-blue-400 text-blue-800",
  };
export function Label(props: {title: string}){
    return (
        <p className={`w-[60px] h-[22px] text-center text-xs pt-[4px] rounded-[3px] ${tagStyles[props.title]}`}>{props.title}</p>
    )
}