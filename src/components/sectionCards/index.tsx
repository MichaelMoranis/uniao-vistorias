import {  ReactNode } from "react";

interface SectionCardsProps {
  text: string;
  children: ReactNode
}

export default function SectionCards({ text, children
 }: SectionCardsProps) {
  return (
    <section className="flex flex-col justify-center items-center gap-4 p-2 mb-4 bg-gradient-to-l from-zinc-100 via-gray-100 to-zinc-100">
      <h2 className="m-4 text-2xl w-full md:w-2/4 text-red-900 font-bold p-4">
        {text}
      </h2>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4">
      {children}
      </div>
    </section>
  );
}
