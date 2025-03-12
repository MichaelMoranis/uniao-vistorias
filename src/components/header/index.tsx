'use client'

import Image from "next/image";
import { useState } from "react"; // Adicionado para controlar a visibilidade do menu

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna entre abrir e fechar o menu
  };

  return (
    <header className="flex justify-between md:justify-around items-center w-full max-w-screen mx-auto p-2 bg-cyan-950 text-zinc-300 fixed z-50">
      <div className="flex gap-10 justify-between md:justify-around px-4 items-center max-w-[1200px] w-full">
        {/* Logo */}
        <div className="logo">
          <Image
            src="/logo.jpg"
            width={80}
            height={80}
            alt="Picture of the author"
            className="rounded-full"
          />
        </div>

        {/* Navbar (oculto em telas menores que 768px) */}
        <nav className="hidden md:flex">
          <ul className="flex gap-4 space-x-10">
            <li>
              <a href="#" className="text-gray-200 hover:text-red-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-200 hover:text-red-600">
                Quem Somos
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-200 hover:text-red-600">
                Serviços
              </a>
            </li>
          </ul>
        </nav>

        {/* Menu Hambúrguer (visível apenas em telas menores que 768px) */}
        <div className="md:hidden hamburger-menu space-y-1.5 cursor-pointer" onClick={toggleMenu}>
          <div className="w-6 h-0.5 bg-zinc-200"></div>
          <div className="w-6 h-0.5 bg-zinc-200"></div>
          <div className="w-6 h-0.5 bg-zinc-200"></div>
        </div>

        {/* Menu de navegação móvel (aparece quando o menu hambúrguer é clicado) */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-cyan-950 p-4">
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#" className="text-gray-200 hover:text-red-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-red-600">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-red-600">
                  Serviços
                </a>
              </li>
            </ul>
          </div>
        )}

        {/* Botão de contato (oculto em telas menores que 768px) */}
        <div className="hidden md:block cta-button">
          <a
            href="#"
            className="bg-zinc-600 text-white px-4 py-2 rounded-full hover:bg-red-800 hover:text-zinc-50"
          >
            Contato
          </a>
        </div>
      </div>
    </header>
  );
}