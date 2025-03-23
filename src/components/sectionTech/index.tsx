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

export default function SectionTech({image, titleh2, title, text2, pargf1, text1, text3}: SectionTechProps) {
  return (
    <section className="flex w-full justify-center">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
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
          <ul className="flex flex-col text-center gap-2 md:text-left text-zinc-400 w-full">
            <li className="flex items-center gap-2 text-sm w-full">
              <span>
                <Image
                  width={20}
                  height={20}
                  src="/double-check.png"
                  alt="check"
                />
              </span>
              {text1}
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span>
                <Image
                  width={20}
                  height={20}
                  src="/double-check.png"
                  alt="check"
                />
              </span>
              {text2}
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span>
                <Image
                  width={20}
                  height={20}
                  src="/double-check.png"
                  alt="check"
                />
              </span>
              {text3}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
