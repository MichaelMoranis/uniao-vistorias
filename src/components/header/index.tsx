"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // Adicionado para controlar a visibilidade do menu

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna entre abrir e fechar o menu
  };

  return (
    <header className="flex justify-center items-center w-full max-w-screen mx-auto p-1 bg-indigo-950 bg-opacity-90 text-zinc-300 fixed z-50">
      <div className="flex gap-10 justify-between md:justify-around px-4 items-center w-full">
        {/* Logo */}
        <div className="flex items-center gap-2 p-2 logo hover:cursor-pointer">
          <Image
            src="/logo.jpg"
            width={60}
            height={60}
            alt="Picture of the author"
            className=" rounded-full"
            style={{ width: "auto", height: "auto" }}
          />
          Vistorias
        </div>

        {/* Navbar (oculto em telas menores que 768px) */}
        <nav className="hidden md:flex">
          <ul className="flex gap-1 space-x-5 md:space-x-8">
            <li>
              <Link
                className="bg-indigo-950  text-white font-bold px-4 py-1 rounded-md border-zinc-300 border-1 hover:bg-red-800 hover:border-none hover:text-zinc-50 hover:shadow-sm p-6"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="bg-indigo-950  text-white font-bold px-4 py-1 rounded-md border-zinc-300 border-1 hover:bg-red-800 hover:border-none hover:text-zinc-50"
                href="/quemsomos"
              >
                Quem somos
              </Link>
            </li>
            <li>
              <Link
                className="bg-indigo-950  text-white font-bold px-4 py-1 rounded-md border-zinc-300 border-1 hover:bg-red-800 hover:border-none hover:text-zinc-50 hover:shadow-sm p-6"
                href="/servicos"
              >
                Serviços
              </Link>
            </li>
          </ul>
        </nav>

        {/* Menu Hambúrguer (visível apenas em telas menores que 768px) */}
        <div
          className={` ${isMenuOpen ? "hidden" : "block"} md:hidden hamburger-menu space-y-1.5 cursor-pointer`}
          onClick={toggleMenu}
        >
          <div className="w-6 h-0.5 bg-zinc-200"></div>
          <div className="w-6 h-0.5 bg-zinc-200"></div>
          <div className="w-6 h-0.5 bg-zinc-200"></div>
        </div>

        {/* Menu de navegação móvel (aparece quando o menu hambúrguer é clicado) */}
        <div
          className={`md:hidden absolute top-16 right-0 w-[80%] bg-indigo-950 p-4 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="h-screen flex flex-col gap-6">
            <div
              className={`fixed top-8 right-0 md:hidden hamburger-menu space-y-1.5 cursor-pointer`}
              onClick={toggleMenu}
            >
              <div className="w-10 h-10 fond-bold">X</div>
            </div>
            <li className="rounded-md border-zinc-300">
              <Link
                href="/"
                className="flex items-center gap-4 text-white py-2 rounded-md border-zinc-300"
              >
                <Image
                  src="/botao-home.png"
                  width={40}
                  height={40}
                  alt="home"
                />
                Home
              </Link>
            </li>
            <li className="border-zinc-300">
              <Link
                href="/quemsomos"
                className="flex items-center gap-4 text-gray-200 hover:text-red-600"
              >
                <Image src="/equipe.png" width={40} height={40} alt="home" />
                Quem Somos
              </Link>
            </li>
            <li className="border-zinc-300">
              <Link
                href="/servicos"
                className="flex items-center gap-4 text-gray-200 hover:text-red-600"
              >
                <Image src="/servico.png" width={40} height={40} alt="home" />
                Serviços
              </Link>
            </li>
          </ul>
        </div>

        {/* Botão de contato (oculto em telas menores que 768px) */}
        <div className="hidden md:block cta-button">
          <a
            href="#"
            className="bg-indigo-950  text-white font-bold px-4 py-2 rounded-md border-zinc-300 border-1 hover:bg-red-800 hover:border-none hover:text-zinc-50"
          >
            Contato
          </a>
        </div>
      </div>
    </header>
  );
}
