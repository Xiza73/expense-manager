import { useEffect, useState } from "react";
export function DarkModeBtn() {
  const sun =
    "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
  const moon =
    "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg";
  const [icon, setIcon] = useState<string>(sun);
  const [changeClass, setChangeClass] = useState<string>("change");

  // useEffect on initial render to set a correct icon
  useEffect(() => {
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? setTheme("dark")
      : setTheme("light");
  }, []);

  const setTheme = (currentTheme: string) => {
    let newIcon: string;
    let newTheme: string;
    if (currentTheme === "dark") {
      document.documentElement.classList.remove("dark");
      newIcon = sun;
      newTheme = "light";
    } else {
      document.documentElement.classList.add("dark");
      newIcon = moon;
      newTheme = "dark";
    }
    setTimeout(() => {
      setChangeClass("");
    }, 600);
    setChangeClass("change");
    setIcon(newIcon);
    localStorage.setItem("theme", newTheme);
  };

  const darkMode = () => {
    if (
      !("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    )
      localStorage.setItem("theme", "dark");
    setTheme(localStorage.theme);
  };
  return (
    <div
      className="sm:w-20 sm:h-20 w-14 h-14 rounded-[50%] fixed bottom-5 right-5 
                  flex justify-center items-center transition-all duration-500 hover:opacity-80
                  dark-mode-button"
      onClick={darkMode}
    >
      <img id="theme-icon" className={changeClass} src={icon} alt="ERR" />
    </div>
  );
}
