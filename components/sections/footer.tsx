import Link from "next/link";
import Image from "next/image";

import { Instagram, Twitter, Youtube } from "lucide-react";

const navLinks = [
  { path: "#about", text: "Sobre" },
  { path: "/features", text: "Features" },
  { path: "#pricing", text: "Preços" },
  { path: "/docs", text: "Docs" },
  // { path: "/updates", text: "Updates" },
];

const socialMedia = [
  {
    icon: Instagram,
    path: "https://www.instagram.com/jean_cl_oliveira/",
  },
  {
    icon: Twitter,
    path: "https://x.com/clo_jeann",
  },
  {
    icon: Youtube,
    path: "https://www.youtube.com/@jean_cl",
  },
];

export const FooterSection = () => {
  return (
    <footer className="pb-16 bg-black text-white pt-24 text-sm text-center flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <Link href={"#home"} className="flex flex-col items-center gap-1">
          <div className="relative inline-flex before:content-[''] before:absolute before:top-2 before:bottom-0 before:blur before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)]">
            <Image
              src={"/llumon.png"}
              alt="llumon Logo"
              height={40}
              width={40}
              className="rounded-lg bg-black p-1 relative"
            />
          </div>
          <span className="mt-2">
            llumon<strong>pay</strong>
          </span>
        </Link>
        <nav className="flex flex-col md:flex-row items-center gap-6 text-white/60 transition-colors">
          {navLinks.map((link) => (
            <Link href={link.path} key={link.path} className="hover:text-white">
              {link.text}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-6 mt-6">
          {socialMedia.map((social) => (
            <Link key={social.path} href={social.path}>
              <social.icon className="size-5 text-white/60 hover:text-white transition-colors" />
            </Link>
          ))}
        </div>
        <p className="mt-6 text-white/60 p-2 border border-gray-600/60 rounded-lg text-center text-xs">
          Desenvolvido por <strong>Jean Carlos</strong>.
        </p>
        <p className="mt-3 text-white/60">2025 llumon. All rights reserved.</p>
      </div>
    </footer>
  );
};
