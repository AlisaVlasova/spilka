"use client";

import { getDictionary } from "../../../../get-dictionary";
import Carousel from "../../components/carousel";
import Title from "../../components/title";

const DATA = [
  { image: '/image/slide1.png' },
  { image: '/image/slide2.png' },
  { image: '/image/slide3.png' },
  { image: '/image/slide4.png' },
  { image: '/image/slide5.png' },
  { image: '/image/slide6.png' },
  { image: '/image/slide7.png' },
  { image: '/image/slide8.png' },
  { image: '/image/slide9.png' },
  { image: '/image/slide10.png' },
  { image: '/image/slide11.png' },
  { image: '/image/slide12.png' },
]

export default function RecentFundraisings({
    dictionary,
  }: {
    dictionary: Awaited<ReturnType<typeof getDictionary>>["recentFundraisings"];
  }) {    
  return (
    <section className="pb-12">
      <div className="container mx-auto p-12 pb-0 flex justify-between mb-14">
        <Title text={dictionary.title1} />
        <Title text={dictionary.title2} />
      </div>
      <Carousel data={DATA} />
    </section>
  );
}