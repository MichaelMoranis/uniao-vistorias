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
          <div className="w-40 h-30 flex-shrink-0 bg-blue-100 border-1 border-red-300 p-2 rounded-sm hover:drop-shadow-lg   hover:bg-zinc-100 hover:scale-105 transition-all ease-in">
            <Image
              width={160}
              height={160}
              src="/ffi.png"
              alt="seguros"
              className="w-full h-full object-contain"
            />
          </div>
          <div className=" w-40 h-30 flex-shrink-0 border-1 bg-blue-100 border-red-300 p-2 rounded-sm hover:drop-shadow-lg  hover:scale-105 hover:bg-zinc-100 transition-all ease-in">
            <Image
              src="/axa.png"
              alt="seguros"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
