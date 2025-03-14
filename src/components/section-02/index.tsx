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
            height={400}// Garante que a imagem cubra o contêiner sem distorcer
          />
        </div>
        <div className="flex flex-col text-center w-96 p-2 mx-4">
          <p className="text-red-600 mb-2">Quem Somos</p>
          <h2 className="text-2xl font-bold mx-4 mb-4 text-red-950">Especializados no ramo securitário </h2>
          <p className="text-center md:text-left m-auto text-zinc-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="w-full text-center m-auto md:m-0 md:text-left text-zinc-400">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
    );

}

export default Section2;