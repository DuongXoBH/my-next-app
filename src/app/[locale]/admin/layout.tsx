import Dashboard from "@/components/common/drawer/drawer";
import AuthenticateMiddlewareProvider from "@/providers/authenticated";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthenticateMiddlewareProvider>
      <Dashboard>{children}</Dashboard>
    </AuthenticateMiddlewareProvider>
  );
}
