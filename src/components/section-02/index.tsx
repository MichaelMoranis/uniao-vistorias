import React from "react";
import Image, { StaticImageData } from "next/image";

interface Section2Props {
  title: string;
  txt1: string;
  txt2: string;
  image: string | StaticImageData;
}

const Section2 = ({ title, txt1, txt2, image }: Section2Props) => {
  return (
    <section className="flex w-full flex-col md:flex-row-reverse p-2 justify-center items-center gap-8">
      <div className="w-96 m-4 p-4 hidden md:flex">
        <Image
          className="object-cover"
          src={image}
          alt="banner"
          width={400}
          height={400} // Garante que a imagem cubra o contêiner sem distorcer
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className="flex flex-col p-2 mx-4 w-full md:w-96">
        <h2 className="text-2xl font-bold mb-4 text-red-900">{title}</h2>
        <p className=" text-zinc-600">{txt1}</p>
        <p className="w-full m-auto md:m-0 md:text-left text-zinc-400">
          {txt2}
        </p>
      </div>
    </section>
  );
};

export default Section2;
