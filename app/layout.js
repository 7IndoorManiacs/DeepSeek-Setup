import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { AppContextProvider } from "@/context/AppContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "DeepSeek - AI Search Engine by Harshil A S",
  description: "Full stack AI search engine built with Next.js, TypeScript, and OpenAI API.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <AppContextProvider>
        <html lang="en">
          <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
      </AppContextProvider>
    </ClerkProvider>
  );
}
