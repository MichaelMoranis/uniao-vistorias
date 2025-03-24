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
    { href: "#", icon: "/linkedin.png", alt: "LinkedIn" },
  ];

  const navLinks = [
    { href: "/", label: "Home", icon: "/botao-home.png" },
    { href: "/quemsomos", label: "Quem Somos", icon: "/equipe.png" },
    { href: "/servicos", label: "Serviços", icon: "/servico.png" },
  ];

  return (
    <header
      className="flex justify-center items-center w-full max-w-screen mx-auto p-1 bg-red-900/80 text-zinc-300 fixed z-50 backdrop-blur-2xl"
    >
      <div className="flex gap-10 justify-between md:justify-around px-4  items-center w-full h-16">
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

        <nav className="hidden md:flex">
          <ul className="flex gap-12">
            {navLinks.map((link, index) => (
              <li className="flex flex-wrap" key={index}>
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
          className={`md:hidden absolute top-0 left-0 w-[80%] h-screen flex flex-col gap-4 bg-red-900/90 backdrop-blur-3xl ${
            isMenuOpen ? "block" : "hidden"}`}
        >
          <div className="flex items-center gap-2 m-2 logo hover:cursor-pointer font-bold">
            <Image
              src="/uniao-circulo.png"
              width={40}
              height={30}
              alt="Logo"
              className="flex flex-col rounded-full text-zinc-100"
              style={{ width: "auto", height: "auto" }}
            />
            <div className="flex flex-col text-sm text-zinc-100 font-bold">
              <p>União</p>
              <p>Vistorias</p>
            </div>
          </div>
          <div
            className="fixed bg-red-900/80 backdrop-blur-2xl top-3 right-4 md:hidden hamburger-menu space-y-1.5 cursor-pointer"
            onClick={toggleMenu}
          >
            <div className="w-7 h-7 fond-bold bg-gray-300 rounded-md">
              <Image fill src="/close.png" alt="cross" />
            </div>
          </div>
          <div className="h-full flex flex-col bg-red-900/80 backdrop-blur-2xl mt-0 justify-between gap-12">
            <ul className="flex flex-col mx-2 pt-4 gap-2">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="rounded-md border-1 border-zinc-300"
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-4 text-zinc-100 p-2 border-l-0 border-r-0 border-zinc-300"
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
            className={`bg-[#ebd3d3] font-bold p-1 rounded-md border-red-900 text-red-900 border-1 hover:bg-red-800 hover:border-none hover:text-zinc-50`}
          >
            Contato
          </a>
        </div>
      </div>
    </header>
  );
}