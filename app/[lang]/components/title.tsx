"use client";

export default function Title({
  text,
}: {
  text: string;
}) {
  return (
    <h2 className="text-6xl uppercase">
			{text}
    </h2>
  );
}
