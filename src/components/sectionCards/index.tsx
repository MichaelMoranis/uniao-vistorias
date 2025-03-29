import {  ReactNode } from "react";

interface SectionCardsProps {
  text: string;
  children: ReactNode
}

export default function SectionCards({ text, children
 }: SectionCardsProps) {
  return (
    <section className="flex flex-col justify-center items-center gap-4 p-2  bg-gradient-to-l from-zinc-100 via-gray-100 to-zinc-100">
      <h2 className="m-4 text-2xl  text-red-900 font-bold p-4">
        {text}
      </h2>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 my-8">
      {children}
      </div>
    </section>
  );
}
