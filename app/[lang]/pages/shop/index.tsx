"use client";

import Image from "next/image";

import { getDictionary } from "../../../../get-dictionary";
import Button from "../../components/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Shop({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["shop"];
  }) {
  const [isAllVisible, setIsAllVisible] = useState(false)
  const array = new Array(4).fill(null)

  const router = useRouter()

  return (
    <section
      id="shop"
      className="container mx-auto p-6 lg:p-12 flex flex-col gap-6 lg:gap-12"
    >
      <div className="flex flex-col-reverse lg:flex-row gap-8 md:gap-14 justify-between items-center">
        <div className="grid grid-cols-2 gap-6 lg:gap-12">
          {array.map((_, index) => (
            <Image
              className="drop-shadow-md hover:drop-shadow-xl hover:scale-105 transition-all"
              key={index}
              width={415}
              height={415}
              src={`/image/merch${index + 1}.png`}
              alt="Spilka shop item"
              onClick={() => router.push('https://t.me/spilka_shop_bot')}
            />
          ))}
        </div>

        <Button callback={() => router.push('https://t.me/spilka_shop_bot')} text={dictionary.button} />
      </div>

      <div className="flex justify-between flex-col lg:flex-row gap-8 items-center">
        {isAllVisible &&
          <div className="grid grid-cols-2 gap-12 items-start justify-start">
            {array.map((_, index) => (
              <div
                className="rounded-[50px] overflow-hidden drop-shadow-md hover:drop-shadow-xl hover:scale-105 transition-all"
                key={index + 4}
                onClick={() => router.push('https://t.me/spilka_shop_bot')}
              >
                <Image
                  width={415}
                  height={415}
                  src={`/image/merch${index + 5}.jpg`}
                  alt="Spilka shop item"
                />
              </div>
            ))}
          </div>
        }

        <Button callback={() => setIsAllVisible(!isAllVisible)} text={isAllVisible ? dictionary.less : dictionary.more}/>
      </div>
    </section>
  );
}
