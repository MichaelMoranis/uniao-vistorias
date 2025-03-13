import Image from "next/image";

export function Banner() {
  return (
    <div className="relative w-full h-screen"> {/* Contêiner pai com overflow-hidden */}
      <Image
        src="/banner.jpg"
        alt="banner"
        layout="fill"
        objectFit="cover"
      />
      {/* Elementos sobrepostos */}
      <div className="absolute top-[35%] left-[45%] md:top-[35%] md:left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-left text-white z-10">
        <p className="text-md md:text-xl">
          Qualificação e aprimoramento como cultura !
        </p>
        <h1 className=" text-2xl md:text-6xl mb-4">Soluções unicas que geram resultados !</h1>
      </div>
    </div>
  );
}