import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

const spaceGrotesk = localFont({
  src: [
    { path: "/fonts/SpaceGrotesk-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--space-grotesk",
});

export const metadata: Metadata = {
  title: "Malang Blockchain Community",
  description: "Building the future of Web3 in Malang",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${spaceGrotesk.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
