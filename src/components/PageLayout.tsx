
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ReactNode } from "react";


interface PageLayoutProps {
  children: ReactNode;
  noPadding?: boolean;
}

export function PageLayout({ children, noPadding }: PageLayoutProps) {

  return (
    <div className="min-h-screen flex flex-col bg-[#070707]">
      <Navbar />
      <main className={`flex-1 w-full ${noPadding ? "pt-0" : "pt-20"}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
