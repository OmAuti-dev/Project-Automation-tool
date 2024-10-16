import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-providers";
import { ClerkProvider } from "@clerk/nextjs";
import ModalProvider from "@/providers/modal-providers";
import { Toaster } from "sonner";
const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BE Project",
  description: "Automate your work with Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <ClerkProvider afterSignOutUrl={'/'} publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
    <html lang="en">
      <body className={font.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          ><ModalProvider>
            {children}
            <Toaster/>
          </ModalProvider>
          </ThemeProvider>
          </body>
    </html>
    </ClerkProvider>
  );
}
