"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Carousel = ({
  data,
}: {
  data: {
    image: string;
  }[];
}) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 });
  const carouselRef = useRef(null);

  useEffect(() => {
    let elem = carouselRef.current as unknown as HTMLDivElement;
    let { width, height } = elem.getBoundingClientRect();
    if (carouselRef.current) {
      setCarouselSize({
        width: 240 + 56,
        height: 240,
      });
    }
  }, []);

  return (
		<div className="relative container mx-auto px-12">
			<div className="w-full h-60 rounded-md overflow-hidden relative px-12">
      <div
        ref={carouselRef}
        style={{
          left: -currentImg * carouselSize.width + 10 ,
        }}
        className="w-84 h-full absolute left-14 flex gap-14 transition-all duration-300"
      >
        {data.map((v, i) => (
          <Link
						key={i}
						className="block relative shrink-0 w-60 h-full"
						href=""
					>
            <Image
              className="pointer-events-none"
              alt={`carousel-image-${i}`}
              fill
              src={v.image}
            />
          </Link>
        ))}
      </div>
    </div>

			<button
        disabled={currentImg === 0}
        onClick={() => setCurrentImg((prev) => prev - 1)}
        className={`pr-4 py-2 absolute left-0 top-1/2 translate-y-[-50%] ${
          currentImg === 0 && "opacity-50"
        }`}
      >
        <svg
          width="46"
          height="16"
          viewBox="0 0 46 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.292893 7.29289C-0.0976295 7.68341 -0.0976296 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.928929C7.68054 0.538404 7.04738 0.538404 6.65685 0.928929L0.292893 7.29289ZM46 7L1 7L1 9L46 9L46 7Z"
            fill="#87B466"
          />
        </svg>
      </button>
      <button
        disabled={currentImg > data.length - currentImg}
        onClick={() => setCurrentImg((prev) => prev + 1)}
        className={`pl-4 py-2 absolute right-0 top-1/2 translate-y-[-50%] ${
          currentImg > data.length - currentImg && "opacity-50"
        }`}
      >
        <svg
          width="46"
          height="16"
          viewBox="0 0 46 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M45.7071 7.29289C46.0976 7.68341 46.0976 8.31658 45.7071 8.7071L39.3431 15.0711C38.9526 15.4616 38.3195 15.4616 37.9289 15.0711C37.5384 14.6805 37.5384 14.0474 37.9289 13.6569L43.5858 8L37.9289 2.34314C37.5384 1.95262 37.5384 1.31945 37.9289 0.928929C38.3195 0.538404 38.9526 0.538404 39.3431 0.928929L45.7071 7.29289ZM-8.74228e-08 7L45 7L45 9L8.74228e-08 9L-8.74228e-08 7Z"
            fill="#87B466"
          />
        </svg>
      </button>
		</div>
    
  );
};

export default Carousel;
