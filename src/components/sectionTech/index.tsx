import Image, { StaticImageData } from "next/image";

interface SectionTechProps {
  image: string | StaticImageData,
  title: string,
  titleh2: string,
  text2: string,
  pargf1: string,
  text1: string,
  text3: string
}

export default function SectionTech({image, titleh2, title,pargf1, }: SectionTechProps) {
  return (
    <section className="flex w-full justify-center">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mx-4">
        <div className="flex justify-center w-full md:w-96">
          <Image
            src={image}
            alt="banner"
            width={500}
            height={200} // Garante que a imagem cubra o contêiner sem distorcer
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="flex flex-col w-full md:w-96 p-2">
          <div className="flex flex-col">
            <p className="text-red-900">{titleh2}</p>
            <h2 className="text-2xl font-bold mb-4 text-red-900">
            {title}
            </h2>
            <p className="md:text-left mb-4 text-zinc-400">
              {pargf1}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
