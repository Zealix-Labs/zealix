import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Products } from "@/components/products";
import { Industries } from "@/components/industries";
import { Process } from "@/components/process";
import { About } from "@/components/about";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#111111] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <Industries />
      <Process />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
