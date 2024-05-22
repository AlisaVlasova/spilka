"use client";

import Link from "next/link";
import Image from 'next/image'
import { getDictionary } from "../../../../get-dictionary";

import Button from "../../components/button";
import Title from "../../components/title";

export default function CurrentFundraise({
    dictionary,
  }: {
    dictionary: Awaited<ReturnType<typeof getDictionary>>["currentFundraise"];
  }) {    
  return (
    <section className="container mx-auto p-12 flex flex-col gap-10">
			<div className="flex flex-row justify-between gap-10">
				<Link href="#" className="rounded-10 drop-shadow-md hover:drop-shadow-xl hover:scale-105 transition-all">
					<Image
						src="/currentFundraise.png"
						width={644}
						height={644}
						alt="Preview of current fundraising"
					/>
				</Link>

				<div className="flex flex-col justify-between">
					<div className="flex flex-col gap-6 text-right items-end max-w-md">
						<Title text={dictionary.title} />
						<p className="font-mono text-xl">
							{dictionary.description}
						</p>
					</div>

					<div className="flex flex-col gap-4 text-2xl">
						<p>
							{dictionary.collected.subtitle}
						</p>
						<div className="flex flex-row justify-between items-end">
							<p className="text-6xl">
								{dictionary.collected.number}
							</p>
							<p>
								{dictionary.collected.currency}
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-row justify-between">
				<Button
					text={dictionary.button.partner}
				/>
				<Button
					text={dictionary.button.support}
				/>
			</div>
    </section>
  );
}