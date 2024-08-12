import { Footer, Navbar, ScrollButton } from "@/app/components/common";
import type { BaseLayoutProps } from "@/app/interfaces";

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <section className="bg-[#f1f5fb]">
      {/* <section className="bg-gradient-to-r from-white from-10% to-[#DFE9F3] to-90%"> */}
      <Navbar />
      {children}
      <ScrollButton />
      <Footer />
    </section>
  );
};
