type Props = {
  message: string;
};

export function Alert({ message }: Props) {
  return (
    <div
      className="hover:bg-neutral-200 dark:bg-neutral-d-100 dark:hover:bg-neutral-d-150 dark:shadow-neutral-d-200 focus:shadow-md
                  bg-neutral-150 shadow-danger-150 shadow-sm rounded-md border-0 py-2 px-4 w-full font-bold mb-4"
    >
      <span className="sm:inline-block dark:text-dark-100 text-light-100">
        {message}
      </span>
    </div>
  );
}
