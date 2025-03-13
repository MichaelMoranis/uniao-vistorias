import Image from "next/image";

export function ExpertSection() {
  return (
    <section className="flex justify-center items-center p-2 md:flex-row mb-4 bg-gradient-to-l from-zinc-100 via-gray-100 to-zinc-100">
      <div className="flex flex-col w-full justify-center items-center p-2 text-center md:justify-end mb-8 md:mb-0">
        <h3 className="m-4 text-2xl w-full md:w-2/4 text-red-950 font-bold p-4">
          Expertise que faz da União Vistorias uma empresa destaque no segmento{" "}
        </h3>
        <div className="flex flex-col md:flex-row  flex-wrap justify-center items-center mx-auto gap-6">
          <div className="flex flex-col items-center justify-center w-full gap-2 md:w-72 border-2 border-none bg-blue-100 p-4 rounded-2xl">
            <Image
              width={100}
              height={100}
              src="/system.png"
              alt="/experiencia.png"
            />
            <p className="text-red-950 font-bold">Experiência</p>
            <p className="text-xs font-bold">
              Habituados com o mercado, executamos nossos serviços de forma
              eficiente e com total segurança.
            </p>
            <span className="text-sm font-bold hover:p-1 hover:bg-red-800 hover:text-zinc-100 hover:border-none hover:rounded-md">
              Saiba mais 5
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 w-full md:w-72  border-2 border-none p-4 bg-blue-100 rounded-2xl">
            <Image
              width={100}
              height={100}
              src="/search.png"
              alt="/experiencia.png"
            />
            <p className="text-red-950 font-bold">Resultados</p>
            <p className="text-xs font-bold">
              Habituados com o mercado, executamos nossos serviços de forma
              eficiente e com total segurança.
            </p>
            <span className="text-sm font-bold hover:p-1 hover:bg-red-800 hover:text-zinc-100 hover:border-none hover:rounded-md">
              Saiba mais 5
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 w-full md:w-72  border-2 border-none bg-blue-100 p-4 rounded-2xl">
            <Image
              width={100}
              height={100}
              src="/brain.png"
              alt="/experiencia.png"
            />
            <p className="text-red-950 font-bold">Inteligência</p>
            <p className="text-xs font-bold">
              Habituados com o mercado, executamos nossos serviços de forma
              eficiente e com total segurança.
            </p>
            <span className="text-sm font-bold hover:p-1 hover:bg-red-800 hover:text-zinc-100 hover:border-none hover:rounded-md">
              Saiba mais 5
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
