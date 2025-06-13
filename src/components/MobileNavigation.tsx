import { useState } from "react";
import { Menu, X } from "lucide-react";

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full text-white z-50 md:hidden">
      <div className="flex justify-between items-center p-4 bg-background/180 backdrop-blur-sm text-white">
        <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-6 py-3"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
};
