'use client'

import Navbar from "@/components/Navbar";
// import type { Metadata } from "next";
import Footer from "../sections/Footer";
import { usePathname } from "next/navigation";
import ChatNav from "./profile/messages/[id]/components/ChatNav";

// export const metadata: Metadata = {
//   title: "Nudiance",
//   description: "Buy and Sell product right here on Nudiance",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();

  const chatPage = pathname.startsWith('/profile/messages/');

  return (
    <>
      {chatPage ? <ChatNav /> : <Navbar />}
      <>
        {children}
      </>
      {!chatPage && (<Footer />)}
    </>    
  );
}
