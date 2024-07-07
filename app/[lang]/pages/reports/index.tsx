"use client";

import { getDictionary } from "../../../../get-dictionary";
import Title from "../../components/title";

export default function Reports({
    dictionary,
  }: {
    dictionary: Awaited<ReturnType<typeof getDictionary>>["reports"];
  }) {    
  return (
    <section id="reports" className="container p-6 lg:p-12 mx-auto">
      <div className="flex justify-between items-center mb-4 gap-6">
        <div className="hidden md:block">
          <Title text={dictionary.title1} />
        </div>
        
        <p className="block md:hidden text-sm uppercase">{dictionary.title1}</p>
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:gap-4">
          <p className="text-sm lg:text-2xl">{dictionary.description}</p>
          <Title text={dictionary.title2} />
        </div>
      </div>

      <ul className="grid grid-flow-row-dense grid-cols-2 md:grid-cols-4 gap-4 md:gap-12">
        {
          dictionary.cards.map((card, index) => (
            <li
              key={card.action + card.number}
              className={`
                py-8 md:py-14 rounded-2xl border-pink border-2 flex items-center justify-center gap-1 lg:gap-5
                ${!index ? 'col-span-2 flex-col xl:flex-row' : 'md:flex-col'}
              `}
            >
              <p className="text-xs md:text-xl font-mono text-center">
                {card.action}
              </p>
              <p className="text-xl font-bold lg:text-3xl xl:text-6xl uppercase text-green text-center">
                {card.number}
              </p>
              <p className="text-xs md:text-xl font-mono text-center">
                {card.activity}
              </p>
            </li>
          ))
        }
      </ul>
    </section>
  );
}