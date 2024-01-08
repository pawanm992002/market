import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { StoreProvider } from "@/store/store";
import Footer from "@/components/Footer";
import BootstrapClient from "@/libs/BootstapClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Market",
  description:
    "A complete market where shopkeeper and customer interact together",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body
          className={`scrollbar-hide w-screen box-border overflow-x-hidden min-h-screen bg-slate-900 text-gray-200 ${inter.className}`}
        >
          <BootstrapClient />
          <Navbar />
          {children}
          <Footer />
        </body>
      </StoreProvider>
    </html>
  );
}
