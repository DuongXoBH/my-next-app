
export default function DashboardCard({title, children} :{ title: string,children:React.ReactNode} ){
    return (
        <div className="w-[360px] h-[365px] p-[24px] bg-white rounded-[14px] ">
            <p className="text-[22px] leading-[20px] font-semibold">{title}</p>
            {children}
        </div>
    )
}