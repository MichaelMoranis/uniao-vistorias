import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center bg-gray-800 text-white py-8 px-8">
      {/* Logo e Contato */}
      <div className="flex justify-center gap-4 text-zinc-400">
        <div className="w-96 mb-8 md:mb-0">
          <h2 className="flex gap-2 text-2xl font-bold mb-4 rounded-md"><Image src="/logo.jpg" width={30} height={30}  alt="logo" /> União Vistorias</h2>
          <p className="mb-2">(77) 3611-1638</p>
          <p className="mb-2">contato@sigmavistoria.com.br</p>
        </div>

        {/* Institucional */}
        <div className="w-96 md:w-1/4 mb-8 md:mb-0 text-zinc-400">
          <h3 className="text-xl font-semibold mb-4">Institucional</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Quem Somos
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Serviços
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Privacidade
              </a>
            </li>
          </ul>
        </div>

        {/* Fale Conosco */}
        <div className="w-96 md:w-1/4 mb-8 md:mb-0 text-zinc-400">
          <h3 className="text-xl font-semibold mb-4">Fale Conosco</h3>
          <ul className="text-sm">
            <li className="mb-2 text-sm">
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

        {/* Endereço e Horário */}
        <div className="w-96 md:w-1/4 mb-8 md:mb-0 text-sm text-zinc-400">
          <h3 className="text-xl font-semibold mb-4">Endereço</h3>
          <p className="mb-2">Rua Nezinho Pamplona</p>
          <p className="mb-2">383 Jardim Ouro Branco</p>
          <p className="mb-2">Barreiras-BA</p>
          <p className="mb-2">CEP 47802300</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Presencialmente</h3>
          <p className="mb-2">De Segunda a Sexta-feira</p>
          <p className="mb-2">das 8h00 às 18h00</p>
          <a href="#" className="text-blue-400 hover:text-blue-300">
            DESCUBRA NO MAPS
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
