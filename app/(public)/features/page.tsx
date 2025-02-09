import { Header } from "@/components/sections/header";
import Image from "next/image";

const navLinks = [
  { path: "/#about", text: "Sobre" },
  { path: "/features", text: "Features" },
  { path: "/#pricing", text: "Preços" },
  { path: "/docs", text: "Docs" },
  // { path: "/updates", text: "Updates" },
];

export default function FeaturesPage() {
  return (
    <>
      <Header links={navLinks} />
      <section className="py-12 bg-gradient-to-b from-transparent to-PRIMARY_PINK/20 min-h-[100vh]">
        <div className="px-4 md:px-0 container mx-auto">
          <div className="max-w-[680px] mx-auto">
            <h2 className="section-title">Desfrute de todas nossas features</h2>
            <p className="section-subtitle">
              Tudo para aceitar pagamentos, aumentar as conversões e implementar
              no seu SaaS ou comércio online <strong>FÁCIL</strong>
            </p>
          </div>
          <div className="mx-auto max-w-[980px] bg-background rounded-2xl  
            p-6 flex flex-col md:grid md:grid-cols-3 gap-4 mt-16">
            <div className="card col-span-2 max-w-screen-md flex items-center justify-between p-6 rounded-2xl">
              <div>
                <h3 className="font-semibold text-xl md:text-2xl">
                  Conecte múltiplos gateways
                </h3>
                <p className="text-sm mt-4 text-primary/80">
                  Em um passe de mágica! Integre seus gateways favoritos para
                  gerenciá-los por aqui.
                </p>
              </div>
              <Image
                src="/magic.png"
                alt="3DIcons magic trick"
                width={80}
                height={80}
                className="hidden md:block"
              />
            </div>

            <div className="card row-span-2 flex flex-col items-center justify-between p-6 rounded-2xl">
              <Image
                src="/next.png"
                alt="3DIcons next"
                width={100}
                height={100}
                className="mb-4"
              />
              <h3 className="font-semibold text-xl md:text-2xl text-center">
                Automatizar transações sem código complexo
              </h3>
              <p className="text-sm mt-4 text-center text-primary/80">
                Nossa poderosa API simplifica tudo para você. E para os que não
                são fãs de código, nosso painel simplifica mais ainda!
              </p>
              <Image
                src="/forward.png"
                alt="3DIcons forward"
                width={80}
                height={80}
                className="mt-4 rotate-180"
              />
            </div>

            <div className="card row-span-2 flex flex-col items-center p-6  rounded-2xl">
              <Image
                src="/tick.png"
                alt="3DIcons tick"
                width={80}
                height={80}
                className="mb-4"
              />
              <h3 className="font-semibold text-xl md:text-2xl text-center">
                Adeus a falhas na Hora da compra!
              </h3>
              <p className="text-sm mt-4 text-center text-primary/80">
                Um sistema de <strong>fallback</strong> onde você escolhe a
                ordem dos gateways, se um falhar o outro assume o lugar até que
                a transação ocorra com sucesso.
              </p>
            </div>

            <div className="card p-6  rounded-2xl text-center">
              <h3 className="font-semibold text-xl md:text-2xl">
                Altamente seguro
              </h3>
              <p className="text-sm mt-4 text-primary/80">
                A <strong>llumon</strong> não armazena nenhum dado de pagamento,
                toda a transação é gerenciada pelo gateway escolhido.
              </p>
            </div>

            <div className="card col-span-2 max-w-2xl flex flex-col p-6 rounded-2xl">
              <h3 className="font-semibold text-xl md:text-2xl text-center">
                O melhor gateway para cada venda
              </h3>
              <p className="text-sm mt-4 text-center text-primary/80">
                Com a <strong>llumon</strong>, você pode simplesmente selecionar
                o melhor gateway para cada venda desejada.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
