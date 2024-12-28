import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/shared/ui/toaster";
import { Providers } from "@/providers";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { CommandMenu } from "@/components/features/command-menu";

// Google Font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Walnut Network",
  description: "Decentralized Computing Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} relative flex min-h-screen flex-col antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Providers>
            <div className="relative flex min-h-screen">
              <AppSidebar />
              <main className="flex-1 overflow-auto">{children}</main>
            </div>
            <CommandMenu />
            <Toaster />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
