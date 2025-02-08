import Image from "next/image";

const logosPath = [
  "/stripe.png",
  "/mercadopago.png",
  "/efi.png",
  "/abacate-pay.png",
];

export const LogoTicker = () => {
  return (
    <div className="py-8 md>py-12 bg-background">
      <h1 className="text-center text-xl mb-8 text-primary/60">Desfrute de uma variedade de gateways</h1>
      <div className="container mx-auto">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none justify-center items-center">
            {logosPath.map((logo) => (
              <Image
                key={logo}
                src={logo}
                alt="logo-ticker"
                width={500}
                height={500}
                className="h-8 w-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
