"use client";

export default function Title({
  text,
}: {
  text: string;
}) {
  return (
    <h2 className="text-3xl md:text-5xl xl:text-6xl uppercase font-bold">
			{text}
    </h2>
  );
}
