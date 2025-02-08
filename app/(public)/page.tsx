import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { LogoTicker } from "@/components/sections/logo-ticker";
import { Pricing } from "@/components/sections/pricing";
import { ProductShowcase } from "@/components/sections/showcase";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
    </main>
  );
}
