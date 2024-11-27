import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/shared/ui/toaster";
import { Providers } from "@/providers";
import { Header } from "@/components/shared/layout/header";
import { FloatingSocial } from "@/components/features/floating-social";
import { Metadata } from "next";

// Google Font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Mirai DEX - Leverage Yield Farming on Aptos",
  description: "Using Leverage Yield Farming on Aptos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} relative flex min-h-screen flex-col antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          // suppressHydrationWarning
        >
          <Providers>
            <Header />
            <main className="flex-grow pt-20">{children}</main>
            {/* <Footer /> */}
            <FloatingSocial />
            <Toaster />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
