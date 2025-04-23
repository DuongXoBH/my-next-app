import Footer from "@/components/common/drawer/footer/footer";
import Header from "@/components/common/drawer/header/header";
import DesktopMenu from "@/components/page/customer/home/desktop-menu/menu";
import AdvertisementProvider from "@/providers/advertisement";
import AuthenticateMiddlewareProvider from "@/providers/authenticated";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthenticateMiddlewareProvider>
      <AdvertisementProvider>
        <div className="bg-[#F5F6FA] w-full min-h-[98vh] flex flex-col">
          <div className="w-full bg-white">
            <Header />
          </div>
          <div className="container w-full pt-2 pb-4 flex flex-col gap-2">
            <DesktopMenu />
            {children}
          </div>
          <Footer />
        </div>
      </AdvertisementProvider>
    </AuthenticateMiddlewareProvider>
  );
}
