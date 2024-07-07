"use client";

import Link from "next/link";
import { getDictionary } from "../../../../get-dictionary";

import Button from "../../components/button";
import Title from "../../components/title";
import { useRouter } from "next/navigation";

export default function CurrentFundraise({
    dictionary,
  }: {
    dictionary: Awaited<ReturnType<typeof getDictionary>>["currentFundraise"];
  }) {
  const router = useRouter()

  return (
    <section className="container mx-auto p-6 lg:p-12 flex flex-col gap-8 md:gap-10">
			<div className="flex flex-row justify-between gap-10">
				<Link href="https://www.instagram.com/spilka__/" className="rounded-[50px] overflow-hidden hidden md:block drop-shadow-md hover:drop-shadow-xl hover:scale-105 transition-all">
          <video
            preload="auto"
            playsInline
            width={644}
            height={644}
            loop
            autoPlay
            muted
          >
            <source src="/image/currentFundraise.mp4" type="video/mp4" />
          </video>
				</Link>

				<div className="flex flex-col justify-between gap-8">
					<div className="flex flex-col gap-1 md:gap-6 text-right items-end md:max-w-md">
						<Title text={dictionary.title} />
						<p className="font-mono text-sm md:text-xl">
							{dictionary.description}
						</p>
          </div>
          
          <Link href="https://www.instagram.com/spilka__/" className="rounded-[50px] overflow-hidden block md:hidden drop-shadow-md hover:drop-shadow-xl transition-all">
            <video
              preload="auto"
              playsInline
              width={644}
              height={644}
              loop
              autoPlay
              muted
            >
              <source src="/image/currentFundraise.mp4" type="video/mp4" />
            </video>
          </Link>

					<div className="flex flex-col md:gap-4 text-sm md:text-2xl">
						<p>
							{dictionary.collected.subtitle}
						</p>
						<div className="flex flex-row md:justify-between gap-4 items-end font-bold">
							<p className="text-3xl md:text-6xl">
								{dictionary.collected.number}
							</p>
							<p>
								{dictionary.collected.currency}
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-row justify-between gap-2">
				<Button
          text={dictionary.button.partner}
          callback={() => router.push('mailto:tcharityp195@gmail.com')}
				/>
				<Button
          text={dictionary.button.support}
          callback={() => router.push('https://send.monobank.ua/jar/6WVFR2hiJ3')}
				/>
			</div>
    </section>
  );
}