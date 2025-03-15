import React from "react";
import Image from "next/image";

const ImageTextSection = () => {
  return (
    <section className="flex flex-col w-full md:flex-row items-center">
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <Image
          src="/img-1-1.png"
          alt="banner"
          width={600}
          height={600}// Garante que a imagem cubra o contêiner sem distorcer
        />
      </div>
      <div className="flex flex-col w-full md:w-96 p-2">
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
