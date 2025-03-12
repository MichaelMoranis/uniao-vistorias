import Image from "next/image";

export function Banner() {
  return (
    <div className="relative w-screen h-screen">
      <Image
        src="/banner.jpg"
        alt="banner"
        layout="fill"
        objectFit="cover" // Garante que a imagem cubra o contêiner sem distorcer
      />
      {/* Elementos sobrepostos */}
      <div className="absolute top-[35%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-left text-white z-10">
      <p className="text-sm">
          Qualificação e aprimoramento como cultura !
        </p>
        <h1 className="text-6xl mb-4">Soluções unicas que geram resultados !</h1>
      </div>
    </div>
  );
}
