// "use client";

export default function MenuItem({
  title,
  menu,
  setOpen,
}: {
  title: string;
  menu: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
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
  );
}
