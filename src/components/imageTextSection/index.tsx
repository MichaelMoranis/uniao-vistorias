import React from "react";
import Image, { StaticImageData } from "next/image";

interface ImageTextSectionProps {
  text: string,
  txtParag: string,
  txt2: string
  image: string | StaticImageData
}

const ImageTextSection = ({text, image, txtParag, txt2}: ImageTextSectionProps) => {
  return (
    <section className="flex flex-col justify-center gap-20 m-4 md:flex-row">
      <div className="flex justify-center md:justify-end">
        <Image
        src={image}
          alt="banner"
          width={400}
          height={400} // Garante que a imagem cubra o contêiner sem distorcer
        />
      </div>
      <div className="flex flex-col w-full md:w-96 p-2">
        <p className="text-red-600">Quem Somos</p>
        <h2 className="text-2xl font-bold mb-4 md:text-left text-red-950">
          {text}
        </h2>
        <p className="flex flex-col w-full md:w-96 md:text-left">
        {txtParag}
        </p>
        <p className=" w-full m-auto md:m-0 md:text-left text-zinc-400">
        {txt2}
        </p>
      </div>
    </section>
  );
};

export default ImageTextSection;
