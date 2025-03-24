import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex justify-center md:justify-around w-full gap-2 bg-red-900 text-white p-8 flex-wrap">
      <div className="w-full md:w-72 text-white  h-40 md:h-20 mb-4">
        <h2 className="flex gap-2 text-2xl font-bold mb-2 mx-2 rounded-md">
          <Image src="/uniao-circulo.png" width={90} height={60} alt="logo" /> União
          Vistorias
        </h2>
        <p className="mb-2">(77) 0000-9999</p>
        <p className="mb-2">contato@uniaovistoria.com.br</p>
      </div>
      <div className="w-full md:w-40 text-white mx-2 text-left">
        <h3 className="text-xl font-semibold mb-4">Redes sociais</h3>
        <ul className="w-full">
          <li className="mb-2">
            <a href="#" className="flex items-center gap-2 hover:text-gray-400">
              <Image width={40} height={40}  src="/whats.png" alt="Whatsapp" />
              Whatsapp
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center gap-2 hover:text-gray-400">
              <Image width={35} height={35}  src="/instagram.png" alt="Whatsapp" />
              Instagram
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center gap-2 hover:text-gray-400">
              <Image width={35} height={35}  src="/linkedin.png" alt="Whatsapp" />
                Linkedin                
            </a>
          </li>
          
        </ul>
      </div>

      <div className="w-full md:w-40 text-white">
        <h3 className="text-xl font-semibold mb-4">Fale Conosco</h3>
        <ul className="text-sm">
          <li className="mb-2">
            <a href="#" className="hover:text-gray-400">
              Comercial
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-gray-400">
              Atendimento
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-gray-400">
              WhatsApp
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-gray-400">
              Suporte
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-40 text-white">
        <h3 className="text-xl font-semibold mb-4">Institucional</h3>
        <ul className="text-sm">
          <li className="mb-2">
            <a href="#" className="hover:text-gray-400">
              Quem Somos
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-gray-400">
              Serviço
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-gray-400">
              privacidade
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-gray-400">
              Suporte
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-40 text-sm text-white">
        <h3 className="text-xl font-semibold mb-4">Endereço</h3>
        <p className="mb-2">Rua Nezinho Pamplona</p>
        <p className="mb-2">383 Jardim Ouro Branco</p>
        <p className="mb-2">Barreiras-BA</p>
        <p className="mb-2">CEP 47802300</p>
      </div>
    </footer>
  );
};

export default Footer;
