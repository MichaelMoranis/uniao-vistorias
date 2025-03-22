"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const socialLinks = [
    { href: "#", icon: "/whats.png", alt: "Whatsapp" },
    { href: "#", icon: "/instagram.png", alt: "Instagram" },
    { href: "#", icon: "/facebook.png", alt: "Facebook" },
    { href: "#", icon: "/linkedin.png", alt: "LinkedIn" },
  ];

  const navLinks = [
    { href: "/", label: "Home", icon: "/botao-home.png" },
    { href: "/quemsomos", label: "Quem Somos", icon: "/equipe.png" },
    { href: "/servicos", label: "Serviços", icon: "/servico.png" },
  ];

  return (
    <header className="flex justify-center items-center w-full max-w-screen mx-auto p-1 bg-indigo-950 bg-opacity-90 text-zinc-300 fixed z-50">
      <div className="flex gap-10 justify-between md:justify-around px-4 items-center w-full">
        {/* Logo */}
        <div className="flex items-center gap-2 p-2 logo hover:cursor-pointer">
          <Image
            src="/logo.jpg"
            width={60}
            height={60}
            alt="Logo"
            className="rounded-full"
            style={{ width: "auto", height: "auto" }}
          />
          Vistorias
        </div>

        {/* Navbar (oculto em telas menores que 768px) */}
        <nav className="hidden md:flex">
          <ul className="flex gap-1 space-x-5 md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  className="bg-indigo-950 text-white font-bold px-4 py-1 rounded-md border-zinc-300 border-1 hover:bg-red-800 hover:border-none hover:text-zinc-50 hover:shadow-sm p-6"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu Hambúrguer (visível apenas em telas menores que 768px) */}
        <div
          className={`${
            isMenuOpen ? "hidden" : "block"
          } md:hidden hamburger-menu space-y-1.5 cursor-pointer`}
          onClick={toggleMenu}
        >
          <div className="w-6 h-0.5 bg-zinc-200"></div>
          <div className="w-6 h-0.5 bg-zinc-200"></div>
          <div className="w-6 h-0.5 bg-zinc-200"></div>
        </div>

        {/* Menu de navegação móvel (aparece quando o menu hambúrguer é clicado) */}
        <div
          className={`md:hidden absolute top-16 right-0 w-[80%] h-screen flex flex-col gap-4 bg-indigo-950 py-12 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex items-center gap-2 mx-2 logo hover:cursor-pointer">
            <Image
              src="/logo.jpg"
              width={30}
              height={30}
              alt="Logo"
              className="rounded-full"
              style={{ width: "auto", height: "auto" }}
            />
            Vistorias
          </div>
          <div className="h-full  flex flex-col justify-between gap-12">
            <ul className="flex flex-col gap-1 mx-2">
              <div
                className={`fixed top-8 right-0 md:hidden hamburger-menu space-y-1.5 cursor-pointer`}
                onClick={toggleMenu}
              >
                <div className="w-10 h-10 fond-bold">X</div>
              </div>
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="rounded-md border-1  border-zinc-300"
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-4 text-white p-2 border-l-0 border-r-0 border-zinc-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex w-full items-center justify-center gap-6 mb-6">
              {socialLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={link.href}
                    className="flex items-center gap-2 hover:text-gray-400"
                  >
                    <Image
                      width={35}
                      height={35}
                      src={link.icon}
                      alt={link.alt}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Botão de contato (oculto em telas menores que 768px) */}
        <div className="hidden md:block cta-button">
          <a
            href="#"
            className="bg-indigo-950 text-white font-bold px-4 py-2 rounded-md border-zinc-300 border-1 hover:bg-red-800 hover:border-none hover:text-zinc-50"
          >
            Contato
          </a>
        </div>
      </div>
    </header>
  );
}
