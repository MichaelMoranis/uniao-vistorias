import Image, { StaticImageData } from "next/image";

interface BannerProps {
  text: string,
  image: string | StaticImageData
}

export function Banner({text, image}: BannerProps) {
  return (
    <div className="relative w-full h-96 overflow-hidden">
      {/* Imagem de fundo */}
      <Image src={image} alt="banner" layout="fill" objectFit="cover" />

      {/* Contêiner do texto */}
      <div className="absolute w-full top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 px-4">
        <div className="flex flex-col justify-start items-center">
          <h1 className="text-4xl md:text-6xl mb-4 font-bold">
            {text} 
          </h1>
        </div>
      </div>
    </div>
  );
}