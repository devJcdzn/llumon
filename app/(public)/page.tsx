import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { LogoTicker } from "@/components/sections/logo-ticker";
import { ProductShowcase } from "@/components/sections/showcase";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
    </main>
  );
}
