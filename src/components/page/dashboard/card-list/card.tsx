import { useTranslations } from "next-intl";

export default function DashboardCard({title, children} :{ title: string,children:React.ReactNode} ){
    const t = useTranslations("Dashboard");
    return (
        <div className="w-[360px] h-[365px] p-[24px] bg-white rounded-[14px] ">
            <p className="text-[22px] leading-[20px] font-semibold">{t(title)}</p>
            {children}
        </div>
    )
}