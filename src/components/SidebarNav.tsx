import React, { useState, useEffect } from "react";
import { Home, User, Briefcase, Code, Mail, Palette } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { id: "home", icon: <Home size={24} />, label: "Home" },
  { id: "about", icon: <User size={24} />, label: "About" },
  { id: "skills", icon: <Palette size={24} />, label: "Skills" },
  { id: "projects", icon: <Code size={24} />, label: "Projects" },
  { id: "contact", icon: <Mail size={24} />, label: "Contact" },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const SidebarNav = () => {
  const [active, setActive] = useState("home");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const onScroll = () => {
      const scroll = window.scrollY + 120;
      let current = "home";
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section && scroll >= section.offsetTop) current = item.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-30 h-screen w-[70px] flex flex-col items-center justify-between py-8 px-1 glass shadow-glass border-r border-gray-300 dark:border-gray-700 animate-slide-in-left">
      <div>
        <div
          className={`mb-8 transition-all duration-700 ${
            isLoaded ? "animate-bounce-in" : "opacity-0 scale-0"
          }`}
        >
          {/* Logo or initials */}
          <div className="border-2 rounded-full p-1 dark:border-gray-400 border-gray-800">
            <img
              src="https://github.com/Prash2185/Portfolio/blob/main/public/lovable-uploads/474768c2-50e4-4a0c-a9b2-f56af5e66d0e.png?raw=true"
              alt="logo"
              className="rounded-full w-10 h-10"
            />
          </div>
        </div>
        <ul className="flex flex-col gap-7">
          {navItems.map((item, index) => (
            <li
              key={item.id}
              className={`transition-all duration-700 ${
                isLoaded
                  ? `animate-stagger-${index + 1}`
                  : "opacity-0 translate-x-[-20px]"
              }`}
            >
              <button
                aria-label={item.label}
                className={`relative group w-12 h-12 flex items-center justify-center text-primary dark:text-white hover:scale-110 transition-all duration-300 rounded-lg hover:bg-primary/10 dark:hover:bg-white/10 hover-glow
                  ${
                    active === item.id
                      ? "after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-2 after:w-2 after:h-2 after:rounded-full after:bg-accent animate-bounce-in bg-primary/10 dark:bg-white/10"
                      : ""
                  }
                `}
                onClick={() => {
                  setActive(item.id);
                  scrollToSection(item.id);
                }}
              >
                <div
                  className={`transition-all duration-300 ${
                    active === item.id
                      ? "scale-110 text-accent"
                      : "group-hover:scale-110 group-hover:rotate-12"
                  }`}
                >
                  {item.icon}
                </div>
                <span className="sr-only">{item.label}</span>

                {/* Tooltip */}
                <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  {item.label}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`flex flex-col items-center gap-6 transition-all duration-700 ${
          isLoaded ? "animate-stagger-5" : "opacity-0 translate-y-4"
        }`}
      >
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default SidebarNav;
