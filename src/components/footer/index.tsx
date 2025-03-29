import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-center md:justify-around w-full gap-2 bg-[#931618] text-white p-8 flex-wrap font-bold">
      <div className="flex flex-col w-full md:w-72 text-white h-40 md:h-20 mb-4">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <Image
            src="/uniao-circulo.png"
            width={90}
            height={60}
            alt="logo"
            className="rounded-md"
          />
          <span>União Vistorias</span>
        </div>
        <div className="flex flex-col ml-2">
          <p className="mb-2">(48) 9223-2277</p>
          <p className="mb-2">(61) 9929-1016</p>
          <p className="mb-2">contato@uniaovistoria.com.br</p>
        </div>
      </div>
      <div className="w-full md:w-40 text-white mx-2 text-left">
        <h3 className="text-xl font-semibold mb-4">Redes sociais</h3>
        <ul className="w-full">
          <li className="mb-2">
            <a
              href="https://www.linkedin.com/company/uni%C3%A3o-vistorias/posts/?feedView=all"
              target="_blank"
              className="flex items-center gap-2 hover:text-red-300"
            >
              <Image
                width={35}
                height={35}
                src="/social-2.jpeg"
                alt="Whatsapp"
                className="bg-white"
              />
              Linkedin
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://www.instagram.com/uniao_vistorias?igsh=czgxYmgyc3NoNjEx"
              className="flex items-center gap-2 hover:text-red-300"
              target="_blank"
            >
              <Image
                width={40}
                height={40}
                src="/social-1.jpeg"
                alt="Whatsapp"
                className="bg-white "
              />
              Instagram
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://wa.me/554598232277?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-red-300 font-bold"
            >
              <Image
                width={35}
                height={35}
                src="/social-3.jpeg"
                alt="Whatsapp"
              />
              Whatsapp
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-40 text-sm text-white">
        <h3 className="text-xl font-semibold mb-4">Endereço</h3>
        <p className="mb-2">Rua Carlos Drumond de Andrade, 135</p>
        <p className="mb-2">Bandeirantes</p>
        <p className="mb-2">Barreiras-BA</p>
        <p className="mb-2">CEP 47802-451</p>
      </div>
    </footer>
  );
}
