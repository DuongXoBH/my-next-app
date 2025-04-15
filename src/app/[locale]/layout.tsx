import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "@/app/globals.css";
import { ToastContainer } from "react-toastify";
import { Suspense } from "react";
import ThemeProviders from "@/providers/theme-provider";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { CustomAblyProvider } from "@/providers/ably-providers";
import { JotaiProviders } from "@/providers/jotai-providers";
import { CacheProviders } from "@/providers/cache-providers";
import { QueryClientProviders } from "@/providers/query-providers";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-nunito-sans",
});

export const metadata: Metadata = {
  title: "Admin  Dashboard",
  description: "Admin dashboard by Xo",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} data-toolpad-color-scheme="light">
      <body className={`${nunitoSans.variable} antialiased`}>
        <NextIntlClientProvider>
          <CacheProviders>
            <Suspense fallback={<div>Loading...</div>}>
              <QueryClientProviders>
                <JotaiProviders>
                  <CustomAblyProvider>
                    <ThemeProviders>
                      {children}
                      <ToastContainer autoClose={3000} limit={1} />
                    </ThemeProviders>
                  </CustomAblyProvider>
                </JotaiProviders>
              </QueryClientProviders>
            </Suspense>
          </CacheProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
