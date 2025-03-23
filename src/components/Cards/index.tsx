import Image, { StaticImageData } from "next/image";

interface SectionCards {
  image: string | StaticImageData;
  txtsubtitle: string;
  txt1: string;
  txtclick: string;

}

export default function Cards({
  image,
  txtsubtitle,
  txt1,
  txtclick,
}: SectionCards) {
  return (
      <div className="flex flex-col items-center justify-center w-full gap-2 md:w-72 border-2 border-none bg-blue-100 p-4 rounded-2xl">
        <Image width={100} height={100} src={image} alt="/experiencia.png" />
        <p className="text-red-900 font-bold">{txtsubtitle}</p>
        <p className="text-xs text-center text-zinc-500 font-light">{txt1}</p>
        <span className="text-sm font-bold hover:p-1 hover:bg-red-800 hover:text-zinc-100 hover:border-none hover:rounded-md">
          {txtclick}
        </span>
      </div>
  );
}
