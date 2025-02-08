import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="py-24 bg-gradient-to-t from-PRIMARY_PINK/30 to-transparent">
      <div className="px-4 md:py-0 container mx-auto">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Revolucione seus checkouts</div>
          </div>

          <h2
            className="text-3xl md:text-5xl font-semibold tracking-tighter text-center 
          bg-gradient-to-br from-black to-PRIMARY_PINK dark:from-PRIMARY_PINK 
          dark:to-PRIMARY_YELLOW text-transparent bg-clip-text py-2 mt-5"
          >
            A forma mais eficiente para gerenciar seus pagamentos!
          </h2>

          <p className="text-center text-[22px] leading-[30px] tracking-tight text-primary/80 mt-5">
            Uma API única para <strong>Devs</strong>, Dashboard intuitivo para
            os <strong>vendedores</strong> online.
          </p>
        </div>
        <div className="relative">
          <Image
            src={"/Dashboard.png"}
            alt="llumon Dashboard showcase"
            width={2000}
            height={2000}
            className="mt-10 rounded-lg"
          />

          <Image
            src={"/money.png"}
            alt="money 3dIcons"
            width={2400}
            height={2400}
            className="absolute -right-80 -top-32 size-1/2 object-contain"
          />
          <Image
            src={"/credit-card.png"}
            alt="card 3dIcons"
            width={2400}
            height={2400}
            className="absolute -left-96 size-1/2 object-contain bottom-32"
          />
        </div>
      </div>
    </section>
  );
};
