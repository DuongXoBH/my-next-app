// "use client";

import LinkTag from "@/components/common/globals/link-tag";

export default function MenuItem({
  title,
  menu,
  href,
  setOpen,
}: {
  title: string;
  menu: boolean;
  href: string;
  setOpen: (open: boolean) => void;
}) {
  return (
    <LinkTag href={href} className="">
      <div
        onMouseEnter={() => {
          if (menu) {
            setOpen(true);
          }
        }}
        onMouseLeave={() => setOpen(false)}
        className="relative group h-full flex items-center text-base font-bold uppercase text-black cursor-pointer"
      >
        <span className="transition-colors duration-200 group-hover:text-[#FF8F9C]">
          {title}
        </span>
        <span className="absolute bottom-0 left-0 h-[2px] bg-[#FF8F9C] w-0 transition-all duration-300 group-hover:w-full"></span>
      </div>
    </LinkTag>
  );
}
