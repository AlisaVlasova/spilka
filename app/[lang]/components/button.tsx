"use client";

export default function Button({
  text,
  callback = () => {},
}: {
  text: string;
  callback?: () => void;
}) {
  return (
    <button
			className="text-sm md:text-2xl rounded-full border-2	border-black p-2 md:p-7 cursor-pointer drop-shadow-none hover:drop-shadow-md shadow hover:shadow-lg transition-all"
			type="button"
			onClick={callback}
		>
      {text}
    </button>
  );
}
