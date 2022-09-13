import { DarkModeBtn } from "../components/DarkModeBtn";
import { IProps } from "../utils/models";

export function Layout({ children }: IProps) {
  return (
    <section className="bg-light-100 dark:bg-dark-100 h-screen w-full flex flex-col relative">
      {children}
      <DarkModeBtn />
    </section>
  );
}
