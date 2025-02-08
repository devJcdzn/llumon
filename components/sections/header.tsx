import { cn } from "@/lib/utils";
import { ArrowRight, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ToggleThemeButton } from "../toggle-theme-button";

const navLinks = [
  { path: "#about", text: "Sobre" },
  { path: "#features", text: "Features" },
  { path: "/pricing", text: "Preços" },
  { path: "/docs", text: "Docs" },
  { path: "/updates", text: "Updates" },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-lg">
      <div className="flex justify-center items-center py-3 gap-1 bg-primary text-white dark:text-black text-sm">
        <p className="text-white/60 hidden md:block dark:text-black/60">
          Hora de revolucionar as vendas online.
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>
            Garanta seu acesso <strong>BETA</strong>
          </p>
          <ArrowRight className="size-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="px-4 md:px-0 md:container mx-auto flex items-center justify-between">
          <Link href={"#"} className="flex items-center gap-1">
            <Image
              src={"/llumon.png"}
              alt="llumon Logo"
              height={40}
              width={40}
              className="rounded-lg bg-black p-1"
            />
            <span>
              llumon<strong>pay</strong>
            </span>
          </Link>
          <MenuIcon className="size-6 md:hidden" />
          <nav className="hidden md:flex items-center gap-6 text-primary/60 transition-colors">
            {navLinks.map((link) => (
              <Link
                href={link.path}
                key={link.path}
                className="hover:text-primary"
              >
                {link.text}
              </Link>
            ))}
            <Link
              href={"#"}
              className={cn(buttonVariants({ variant: "primary" }))}
            >
              Solicitar BETA
            </Link>
            <ToggleThemeButton />
          </nav>
        </div>
      </div>
    </header>
  );
};
