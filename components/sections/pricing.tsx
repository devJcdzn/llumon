import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    plan: "Gateway",
    monthlyPrice: 0,
    buttonText: "Começar grátis",
    description:
      "llumon as a Gateway, ideal para novos negócios ou vendedores que querem um checkouts eficiente sem perder vendas.",
    popular: true,
    inverse: false,
    features: [
      "3% à 5% + R$ 0,60 por transação.",
      "Acesso aos gateways via split ou cashIn/Out ou API.",
      "Criação de checkouts e produtos via Dashboard.",
    ],
  },
  {
    plan: "BYOG",
    monthlyPrice: 99,
    yearlyPrice: 990,
    buttonText: "Quero integrar!",
    description:
      "Build Your Own Gateway, ideal para empresas que já possuem gateways e querem apenas integra-los para nossa api simplificada e vantagens.",
    popular: false,
    inverse: true,
    features: [
      "0 taxas da plataforma, apenas as dos seus gateways usados.",
      "Aceso a todos os gateways da plataforma.",
      "Suas próprias API Keys e interações.",
      "Para Devs: Adicione seus próprios gateways.",
      "Criação de checkouts e produtos via Dashboard.",
    ],
  },
  // {
  //   plan: "lummonEnterprise",
  //   monthlyPrice: 499,
  //   description: "Pensado para grandes empresas e marketplaces.",
  //   popular: false,
  //   inverse: false,
  //   features: ["Taxa negociável", "Totalmente personálizavel"],
  // },
];

export const Pricing = () => {
  return (
    <section>
      <div className="px-4 mdx-0 container mx-auto">
        <div className="max-w-[540px] mx-auto">
          <h2 className="section-title text-primary">Nossos Preços</h2>
          <p className="section-subtitle mt-5">
            Da gratuidade vitalícia até o plano que melhor te faz crescer.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map((plan) => (
            <div
              className={cn(
                "p-10 rounded-xl shadow-sm shadow-black/20 dark:shadow-white/20 border border-gray-100/10 dark:border-gray-600/10",
                plan.inverse ? "bg-primary" : ""
              )}
              key={plan.plan}
            >
              <div className="flex justify-between">
                <h3
                  className={cn(
                    "text-lg font-semibold text-primary/50",
                    plan.inverse ? "text-background/50" : ""
                  )}
                >
                  {plan.plan}
                </h3>
                {plan.popular && (
                  <div className="tag shadow-lg shadow-PRIMARY_PINK/20">
                    <span
                      className="bg-gradient-to-br from-PRIMARY_PINK to-PRIMARY_YELLOW 
                    text-transparent bg-clip-text"
                    >
                      + Popular
                    </span>
                  </div>
                )}
              </div>
              <div className="flex items-baseline gap-1 mt-7">
                <span
                  className={cn(
                    "text-4xl leading-none font-bold tracking-tighter",
                    plan.inverse ? "text-background" : ""
                  )}
                >
                  R${plan.monthlyPrice}
                </span>
                <span
                  className={cn(
                    "text-primary/50 tracking-tight font-semibold",
                    plan.inverse ? "text-background/50" : ""
                  )}
                >
                  /mês
                </span>
              </div>
              <Link
                href={"#"}
                className={cn(
                  buttonVariants({ variant: "primary" }),
                  "w-full mt-7"
                )}
              >
                {plan.buttonText}
              </Link>
              <ul className="flex flex-col gap-5 mt-8">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className={cn(
                      "flex items-center gap-2 text-sm",
                      plan.inverse ? "text-background" : ""
                    )}
                  >
                    <Check className="size-6" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
