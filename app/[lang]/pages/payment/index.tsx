"use client";

import { getDictionary } from "../../../../get-dictionary";
import Title from "../../components/title";
import Button from "../../components/button";
import { useRouter } from "next/navigation";

export default function Payment({
    dictionary,
  }: {
    dictionary: Awaited<ReturnType<typeof getDictionary>>["payment"];
  }) {
  const router = useRouter()
  
  return (
    <section id="credentials" className="container mx-auto p-6 lg:p-12">
      <Title text={dictionary.title} />

      <div className="flex flex-col-reverse lg:flex-row mt-4 md:mt-6 gap-6 lg:gap-14 items-center">
        <div className="w-[100%] col-span-5 flex flex-col items-center content-start pt-4 px-4 lg:px-8 pb-14 rounded-3xl border-green border-2 grow">
          <p className="mb-6 lg:mb-12 font-bold text-sm lg:text-xl">
            {dictionary.subtitle}
          </p>
          <ul className="w-[100%] text-xs lg:text-sm"> 
            <li className="flex justify-start gap-1">
              <p className="md:min-w-[40%] lg:min-w-[50%] font-bold">{dictionary.name.key}: </p>
              <p>{dictionary.name.value}</p>
            </li>
            <li className="flex justify-start gap-1">
              <p className="md:min-w-[40%] lg:min-w-[50%] font-bold">{dictionary.code.key}: </p>
              <p>{dictionary.code.value}</p>
            </li>
            <li className="flex justify-start text-xs gap-1">
              <p className="md:min-w-[40%] lg:min-w-[50%] font-bold">{dictionary.account.key}: </p>
              <p>{dictionary.account.value}</p>
            </li>
            <li className="flex justify-start gap-1">
              <p className="md:min-w-[40%] lg:min-w-[50%] font-bold">{dictionary.bank.key}: </p>
              <p>{dictionary.bank.value}</p>
            </li>
          </ul>
        </div>

        <Button
          callback={() => router.push('https://send.monobank.ua/jar/6WVFR2hiJ3')}
          text={dictionary.button}
        />
      </div>
    </section>
  );
}