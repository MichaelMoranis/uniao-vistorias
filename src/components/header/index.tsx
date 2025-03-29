"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const socialLinks = [
    {
      href: "https://wa.me/554598232277?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es",
      icon: "/social-3.jpeg",
      alt: "Whatsapp",
    },
    {
      href: "https://www.instagram.com/uniao_vistorias?igsh=czgxYmgyc3NoNjEx",
      icon: "/social-1.jpeg",
      alt: "Instagram",
    },
    {
      href: "https://www.linkedin.com/company/uni%C3%A3o-vistorias/posts/?feedView=all",
      icon: "/social-2.jpeg",
      alt: "LinkedIn",
    },
  ];

  const navLinks = [
    { href: "/", label: "Home", icon: "/botao-home.png" },
    { href: "/quemsomos", label: "Quem Somos", icon: "/equipe.png" },
    { href: "/servicos", label: "Serviços", icon: "/servico.png" },
  ];

  return (
    <header className="flex justify-center items-center w-full max-w-screen mx-auto p-1 bg-red-900/80 text-zinc-300 fixed z-50 backdrop-blur-2xl">
      <div className="flex gap-10 justify-between md:justify-around px-4 items-center w-full h-16">
        {/* Logo */}
        <div className="flex items-center gap-2 logo hover:cursor-pointer font-bold">
          <Image
            src="/uniao-circulo.png"
            width={60}
            height={10}
            alt="Logo"
            className="rounded-full"
            style={{ width: "auto", height: "auto" }}
          />
          <div className="text-zinc-100 font-bold text-md hidden md:block">
            <p>União</p>
            <p>Vistorias</p>
          </div>
        </div>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex">
          <ul className="flex gap-12">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  className="bg-[#ebd3d3] text-red-900 font-bold rounded-md border-red-900 border-1 hover:bg-red-800 hover:border-none p-1 hover:text-zinc-50 hover:shadow-sm"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botão Hamburguer (Mobile) */}
        {!isMenuOpen && (
          <div
            className="md:hidden flex flex-col space-y-1.5 cursor-pointer"
            onClick={toggleMenu}
          >
            <div className="w-6 h-0.5 bg-zinc-200"></div>
            <div className="w-6 h-0.5 bg-zinc-200"></div>
            <div className="w-6 h-0.5 bg-zinc-200"></div>
          </div>
        )}

        {/* Menu Mobile */}
        <div
          className={`md:hidden fixed top-0 left-0 w-4/5 h-screen bg-[#931618] backdrop-blur-3xl z-50 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Cabeçalho do Menu */}
          <div className="flex items-center justify-between p-4 border-b border-zinc-400/30">
            <div className="flex items-center gap-2">
              <Image
                src="/uniao-circulo.png"
                width={40}
                height={30}
                alt="Logo"
                className="rounded-full"
                style={{ width: "auto", height: "auto" }}
              />
              <div className="text-zinc-100 font-bold text-sm">
                <p>União</p>
                <p>Vistorias</p>
              </div>
            </div>

            <button onClick={toggleMenu} className="p-1">
              <div className="w-8 h-8 relative">
                <Image src="/desabilitar.png" fill alt="Fechar menu" />
              </div>
            </button>
          </div>

          {/* Links de Navegação */}
          <nav className="p-4">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="border-b border-zinc-400/30 last:border-0"
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 py-3 text-zinc-100 hover:bg-red-500/50 px-2 rounded"
                    onClick={toggleMenu}
                    target=""
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Redes Sociais */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center">
            <ul className="flex gap-6">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="block p-2" target="_blank">
                    <Image
                      width={45}
                      height={45}
                      src={link.icon}
                      alt={link.alt}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Overlay (quando menu aberto) */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={toggleMenu}
          />
        )}

        {/* Botão Contato (Desktop) */}
        <div className="hidden md:block relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#ebd3d3] font-bold p-1 rounded-md border-red-900 text-red-900 border hover:bg-red-800 hover:border-none hover:text-zinc-50 transition-colors hover:cursor-pointer"
      >
        Contato
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-[#931618] rounded-md shadow-lg z-50 border border-gray-200 font-bold">
          <div className="py-1">
            <a 
              href="tel:4892232277" 
              className="block px-4 py-2 text-sm text-gray-100 hover:bg-red-100 hover:text-red-900"
            >
              (48) 9223-2277
            </a>
            <a 
              href="tel:6199291016" 
              className="block px-4 py-2 text-sm text-gray-100 hover:bg-red-100 hover:text-red-900"
            >
              (61) 9929-1016
            </a>
            <a 
              href="mailto:contato@uniaovistoria.com.br" 
              className="block px-4 py-2 text-sm text-gray-100 hover:bg-red-100 hover:text-red-900"
            >
              contato@uniaovistoria.com.br
            </a>
          </div>
        </div>
      )}
    </div>
      </div>
    </header>
  );
}

