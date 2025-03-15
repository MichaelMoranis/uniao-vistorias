import React from "react";
import Image from "next/image";

const ImageTextSection = () => {
  return (
    <section className="flex flex-col justify-center gap-20 m-4 md:flex-row">
      <div className="flex justify-center md:justify-end">
        <Image
          src="/uniao-circulo.png"
          alt="banner"
          width={400}
          height={400}// Garante que a imagem cubra o contêiner sem distorcer
        />
      </div>
      <div className="flex flex-col w-full md:w-96 p-2 ml-4">
        <p className="text-red-600">Quem Somos</p>
        <h2 className="text-2xl font-bold mb-4 md:text-left text-red-950">Especializados no ramo securitário </h2>
        <p className="flex flex-col w-full md:w-96 md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className=" w-full m-auto md:m-0 md:text-left text-zinc-400">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </section>
  );
};

export default ImageTextSection;
