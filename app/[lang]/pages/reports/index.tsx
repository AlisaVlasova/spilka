"use client";

import { getDictionary } from "../../../../get-dictionary";
import Title from "../../components/title";

export default function Reports({
    dictionary,
  }: {
    dictionary: Awaited<ReturnType<typeof getDictionary>>["reports"];
  }) {    
  return (
    <section id="reports" className="container p-12 mx-auto">
      <div className="flex justify-between items-center mb-4">
        <Title text={dictionary.title1} />
        <p className="text-2xl">{dictionary.description}</p>
        <Title text={dictionary.title2} />
      </div>

      <ul className="grid grid-flow-row-dense grid-cols-4 gap-12">
        {
          dictionary.cards.map((card, index) => (
            <li
              key={card.action + card.number}
              className={`
                py-14 rounded-2xl border-pink border-2 flex items-center justify-center gap-5
                ${!index ? 'col-span-2 flex-row' : 'flex-col'}
              `}
            >
              <p className="text-xl font-mono">
                {card.action}
              </p>
              <p className="text-6xl uppercase text-teal-400	">
                {card.number}
              </p>
              <p className="text-xl font-mono">
                {card.activity}
              </p>
            </li>
          ))
        }
      </ul>
    </section>
  );
}