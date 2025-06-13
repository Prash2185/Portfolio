
import React from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = React.useState(
    () =>
      (localStorage.getItem("theme") as "light" | "dark" | null) ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      aria-label="Toggle theme"
      className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-accent dark:text-primary shadow transition-all hover:scale-110 border border-gray-300 dark:border-gray-500"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "dark" ? <Sun size={23} /> : <Moon size={22} />}
      <span className="sr-only">Switch Theme</span>
    </button>
  );
};

export default ThemeToggle;
