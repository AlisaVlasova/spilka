"use client";

import Link from "next/link";

export default function NavItem({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
		<Link
			className="block text-nowrap text-xs md:text-xl py-1 md:py-5 lg:py-8 cursor-pointer drop-shadow-sm hover:drop-shadow-md hover:scale-105 transition-all"
			href={link}
		>
			{text}
		</Link>
  );
}
