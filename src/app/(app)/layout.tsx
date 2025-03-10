import Dashboard from "@/components/common/drawer/drawer";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Dashboard>{children}</Dashboard>
    </div>
  );
}
