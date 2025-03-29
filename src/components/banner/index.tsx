import Image, { StaticImageData } from "next/image";

interface BannerProps {
  text: string;
  image: string | StaticImageData;
}

export function Banner({ text, image }: BannerProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image src={image} alt="banner" fill className="object-cover" />
      <div className="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 w-full md:w-3/3 px-4 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-8xl font-bold bg-black/30 p-4 rounded-lg backdrop-blur-[2px] shadow-2xl">
          {text}!
        </h1>
      </div>
    </div>
  );
}