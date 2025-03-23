import Image from "next/image";

export default function BannerScroll() {
  return (
    <section className="flex flex-col justify-center items-center p-6 bg-zinc-100">
      <div className="flex justify-center items-center w-full">
        <h2 className="text-2xl md:text-center font-bold text-red-900 mt-6">
          Clientes que experimentaram e estão satisfeitos com nossas soluções
        </h2>
      </div>
      <div className="w-full overflow-x-auto">
        <div className="flex items-center justify-center gap-4 p-4 whitespace-nowrap">
          <div className="w-40 h-40 flex-shrink-0">
            <Image
              width={160}
              height={160}
              src="/logo_fairfax.png"
              alt="seguros"
              className="w-full h-full object-contain"
            />
          </div>
          <div className=" w-40 h-40 flex-shrink-0">
            <Image
              src="/axa1.jpg"
              alt="seguros"
              width={160}
              height={160}
              className="w-full h-full object-contain"
            />
          </div>
          {/* Adicione mais imagens conforme necessário */}
        </div>
      </div>
    </section>
  );
}