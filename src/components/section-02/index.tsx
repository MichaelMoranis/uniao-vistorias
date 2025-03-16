import React from "react";
import Image from "next/image";

const Section2 = () => {
  return (
    <section className="flex w-full flex-col md:flex-row-reverse p-2 justify-center items-center gap-8">
      <div className="w-96 m-4 p-4 hidden md:flex">
        <Image
          src="/refinaria.jpg"
          alt="banner"
          layout="responsive" // Faz a imagem ser responsiva
          objectFit="cover"
          width={400}
          height={400} // Garante que a imagem cubra o contêiner sem distorcer
        />
      </div>
      <div className="flex flex-col p-2 mx-4 w-full md:w-96">
        <p className="text-red-600 mb-2">Quem Somos</p>
        <h2 className="text-2xl font-bold mb-4 text-red-950">
          Atuamos em todo o territorio nacional.{" "}
        </h2>
        <p className=" text-zinc-400">
          Oferecemos cobertura nacional com soluções personalizadas para
          análises e inspeções de riscos, garantindo agilidade e excelência em
          todos os serviços.
        </p>
        <p className="w-full m-auto md:m-0 md:text-left text-zinc-400">
          Nosso compromisso é manter a qualidade e aprimorar constantemente
          nossas metodologias, assegurando resultados eficientes e adaptados às
          necessidades de cada cliente.
        </p>
      </div>
    </section>
  );
};

export default Section2;
