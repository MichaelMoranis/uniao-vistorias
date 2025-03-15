import Image from "next/image";

export function Banner() {
  return (
    <div className="relative w-full h-screen">
      {" "}
      {/* Contêiner pai com overflow-hidden */}
      <Image src="/banner.jpg" alt="banner" layout="fill" objectFit="cover" />
      {/* Elementos sobrepostos */}
      <div className="absolute w-full top-[35%] left-[54%] md:top-[35%] md:left-[70%] transform -translate-x-1/2 -translate-y-1/2  text-white z-10">
        <p className="max-w-[800px] text-xl md:text-xl">
          Qualificação e aprimoramento como cultura !
        </p>
        <h1 className="w-full md:w-3/4 text-4xl md:text-6xl mb-4">
          Soluções unicas que geram resultados !
        </h1>
      </div>
    </div>
  );
}
