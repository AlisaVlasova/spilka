"use client";
import Image from "next/image";

import { getDictionary } from "../../../../get-dictionary";
import Button from "../../components/button";
import { useRouter } from "next/navigation";

export default function Partners({
    dictionary,
  }: {
    dictionary: Awaited<ReturnType<typeof getDictionary>>["partners"];
  }) {
  const router = useRouter()
  return (
    <section className="container mx-auto p-6 lg:p-12">
      <div className="flex flex-col lg:flex-row mt-4 md:mt-6 gap-8 md:gap-14 items-center">
        <Button text={dictionary.button} callback={() => router.push('mailto:tcharityp195@gmail.com')}/>

        <div className="w-[100%] col-span-5 flex flex-col items-center content-start pt-4 px-4 lg:px-8 pb-14 rounded-3xl border-green border-2 grow">
          <p className="mb-12 font-bold text-sm md:text-xl text-center">
            {dictionary.title}
          </p>
          <ul className="w-[100%] grid grid-cols-[repeat(4,_minmax(42px,_1fr))] md:grid-cols-[repeat(8,_minmax(42px,_1fr))] lg:grid-cols-[repeat(8,_minmax(82px,_1fr))] gap-1 justify-items-center">
            {
              Array(24).fill(null).map((_, index) => (
                <li key={index}>
                  <Image
                    width={83}
                    height={83}
                    src={`/image/Ellipse${index + 1}.png`}
                    alt="Spilka partner"
                  />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  );
}