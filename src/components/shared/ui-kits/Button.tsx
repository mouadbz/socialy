import React, { HTMLAttributes } from "react";

type Props = Pick<HTMLAttributes<HTMLButtonElement>, "onClick"> & {
  text: string;
};

function Button({ text, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max astro-ESKEKC2M "
    >
      <span className="relative text-sm font-semibold text-white astro-ESKEKC2M">
        {text}
      </span>
    </button>
  );
}

export default Button;
