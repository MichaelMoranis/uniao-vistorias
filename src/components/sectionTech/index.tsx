import Image from "next/image";

export default function SectionTech() {
  return (
    <section className="flex w-full justify-center">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex justify-center w-full md:w-96">
          <Image
            src="/mapa-uniao.png"
            alt="banner"
            width={500}
            height={200} // Garante que a imagem cubra o contêiner sem distorcer
          />
        </div>
        <div className="flex flex-col w-full md:w-96 p-2">
          <div className="flex flex-col">
            <p className="text-red-600">Inovação</p>
            <h2 className="text-2xl font-bold mb-4 text-red-950">
              Realizamos atendimento para todo o país !!{" "}
            </h2>
            <p className="md:text-left mb-4 text-zinc-400">
              Acreditamos que a tecnologia faz
              toda a diferença para uma análise ágil, detalhada e eficiente. Por
              isso, investimos em tudo aquilo que pode maximizar a satisfação
              dos nossos clientes.
            </p>
          </div>
          <ul className="flex flex-col text-center gap-2 md:text-left text-zinc-400">
            <li className="flex items-center gap-2 text-sm">
              <span>
                <Image
                  width={20}
                  height={20}
                  src="/double-check.png"
                  alt="check"
                />
              </span>
              Inspeções inteligentes e dinâmicas
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span>
                <Image
                  width={20}
                  height={20}
                  src="/double-check.png"
                  alt="check"
                />
              </span>
              Desdobramento técnico concreto
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span>
                <Image
                  width={20}
                  height={20}
                  src="/double-check.png"
                  alt="check"
                />
              </span>
              Diligência na comunicação e envio
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
