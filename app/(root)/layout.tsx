import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
// import Footer from "../shared/components/Footer";
// import Navbar from "../shared/components/Navbar";

export const metadata: Metadata = {
  title: "Nudiance",
  description: "Buy and Sell product right here on Nudiance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      {/* <Footer /> */}
    </>    
  );
}
