import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ArrowRight, Book } from "lucide-react";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-PRIMARY_PINK/10">
      <div className="px-4 md:py-0 container mx-auto">
        <div className="section-heading relative">
          <h1 className="section-title">Comece grátis agora mesmo</h1>
          <p className="section-subtitle">
            Comece agora e veja como é simples. Menos taxas, mais sucesso nas
            vendas. Se inscreva para o BETA agora!
          </p>
          <Image
            src={"/3d-star.png"}
            alt="3dIcons star"
            width={2400}
            height={2400}
            className="absolute hidden md:block -left-[350px] lg:-left-[450px] size-96 object-contain -top-[137px]"
          />
          <Image
            src={"/3d-shield.png"}
            alt="3dIcons star"
            width={2400}
            height={2400}
            className="absolute hidden md:block -right-[350px] lg:-right-[500px] size-96 object-contain -bottom-[168px]"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-2 mt-10 justify-center">
          <Link
            href={"#"}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Ler nossas Docs
            <Book className="size-5" />
          </Link>
          <Link
            href={"#"}
            className={cn(buttonVariants({ variant: "primary" }))}
          >
            Quero testar o BETA
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
