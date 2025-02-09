"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logosPath = [
  "/stripe.png",
  "/mercadopago.png",
  "/efi.png",
  "/abacate-pay.png",
  "/stripe.png",
  "/mercadopago.png",
  "/efi.png",
  "/abacate-pay.png",
  "/stripe.png",
  "/mercadopago.png",
  "/efi.png",
  "/abacate-pay.png",
  "/stripe.png",
  "/mercadopago.png",
  "/efi.png",
  "/abacate-pay.png",
];

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-background">
      <div className="px-4 md:px-0 container mx-auto">
        <div className="section-heading">
          <h2 className="section-title mb-12 text-2xl md:text-3xl">
            Desfrute de uma variedade de gateways
          </h2>
        </div>
      </div>
      <div className="px-4 md:px-0 container mx-auto">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-24 flex-none pr-24"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {logosPath.map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt="logo-ticker"
                width={500}
                height={500}
                className="h-10 w-auto"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
