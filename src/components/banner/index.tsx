import Image from "next/image";

export function Banner() {
  return (
    <div className="relative w-full h-96 overflow-hidden">
      {/* Imagem de fundo */}
      <Image src="/banner.jpg" alt="banner" layout="fill" objectFit="cover" />

      {/* Contêiner do texto */}
      <div className="absolute w-full top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 px-4">
        <div className="flex flex-col justify-start items-center">
          <h1 className="text-4xl md:text-6xl mb-4">
            Soluções únicas que geram <br /> resultados eficientes !
          </h1>
        </div>
      </div>
    </div>
  );
}