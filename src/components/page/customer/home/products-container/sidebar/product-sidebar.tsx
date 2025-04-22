export default function ProductsContainerSidebar({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-xs border border-[#9f9f9f] rounded-lg p-4 bg-inherit">
      <h2 className="text-lg font-bold uppercase text-gray-900 mb-4">
        {title}
      </h2>
      <div className="w-full space-y-2">{children}</div>
    </div>
  );
}
