import { MouseEventHandler } from "react";

type Props = {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  fullWidth?: boolean;
};

export default function Button({ text, onClick, fullWidth }: Props) {
  return (
    <button
      onClick={onClick!}
      className={`${fullWidth ? "w-full" : "w-min"}
                    bg-secondary-100 shadow-secondary-150 shadow-sm font-bold py-2 px-4 rounded 
                    hover:bg-secondary-150 dark:bg-secondary-d-100 dark:hover:bg-secondary-d-150 
                    dark:shadow-secondary-d-150 focus:outline-none focus:shadow-md dark:text-light-100 `}
    >
      {text}
    </button>
  );
}
