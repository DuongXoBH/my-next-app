import Header from "@/components/common/drawer/header/header";
import AuthenticateMiddlewareProvider from "@/providers/authenticated";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthenticateMiddlewareProvider>
      <div className="bg-[#F5F6FA] w-full min-h-[92vh] flex flex-col">
        <div className="w-full bg-white">
          <Header />
        </div>
        <div className="container w-full pt-2 pb-4 overflow-auto">
          {children}
        </div>
      </div>
    </AuthenticateMiddlewareProvider>
  );
}
