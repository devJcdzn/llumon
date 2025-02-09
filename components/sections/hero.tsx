import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Book } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section
      className="pt-8 pb-20 md:pt-2 md:pb-10 
      bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#FF66C4,#FFF_66%)] 
      dark:bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#FF66C4,#000_66%)]"
    >
      <div className="px-4 md:px-0 container mx-auto">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Se inscreva para o BETA</div>
            <h1
              className="text-5xl md:text-7xl font-semibold tracking-tighter 
              mt-6"
            >
              Diga adeus à falhas de pagamentos
            </h1>
            <p className="text-xl text-primary/80 tracking-tight mt-6">
              Gerencie múltiplos gateways em um só lugar, escolha o melhor
              gateway para cada transação, reduza taxas e aumente sua conversão.
            </p>
            <div className="flex flex-col md:flex-row gap-2 md:items-center mt-[30px]">
              <Link
                href="/docs"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                Ler nossas <strong>Docs</strong>
                <Book className="size-6" />
              </Link>
              <Link
                href=""
                className={cn(buttonVariants({ variant: "primary" }))}
              >
                Quero acesso <strong>BETA</strong>
                <ArrowRight className="size-6" />
              </Link>
            </div>
          </div>

          <div className="hidden md:block mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={"/wallet-hero.png"}
              alt="Wallet hero 3d-icons"
              width={2400}
              height={2400}
              quality={100}
              className="object-contain md:absolute md:h-full md:w-auto md:max-w-none md:-right-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
