import type { Metadata } from "next";
import AuthNav from "./components/AuthNav";
import AuthFooter from "./components/AuthFooter";

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
      <AuthNav />
      <>
        {children}
      </>
      <AuthFooter />
    </>    
  );
}
