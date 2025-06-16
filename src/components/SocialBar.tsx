
import React, { useEffect, useRef, useState, useContext } from "react";
import { Github, Linkedin, Instagram, Twitter, Mail } from "lucide-react";
import { CursorContext } from "./CustomCursor";

// Helper: icon brand colors
const brandColors: Record<string, string> = {
  GitHub: "#181717",
  LinkedIn: "#0077B5",
  Instagram: "radial-gradient(circle at 30% 110%, #fdc468 0%, #df4996 100%)",
  Twitter: "#1DA1F2",
  Mail: "#FF7139", // e.g. orange
};

const socials = [
  {
    label: "GitHub",
    icon: <Github size={21} />,
    url: "https://github.com/Prash2185",
  },
  {
    label: "LinkedIn",
    icon: <Linkedin size={21} />,
    url: "www.linkedin.com/in/prasanna-dhotarkar-57415b2b0",
  },
  {
    label: "Instagram",
    icon: <Instagram size={21} />,
    url: "https://instagram.com/",
  },
  {
    label: "Twitter",
    icon: <Twitter size={21} />,
    url: "https://twitter.com/",
  },
  {
    label: "Mail",
    icon: <Mail size={21} />,
    url: "prasannadhotarkar@gmail.com",
  },
];

const SocialBar = () => {
  const iconRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const { coords } = useContext(CursorContext);
  const [hovered, setHovered] = useState<number | null>(null);

  // Check if custom cursor overlaps with any social icon
  useEffect(() => {
    for (let i = 0; i < iconRefs.current.length; i++) {
      const ref = iconRefs.current[i];
      if (!ref) continue;
      const rect = ref.getBoundingClientRect();
      // Cursor's approx size
      const curX = coords.x, curY = coords.y;
      // Slightly large area for easier activation
      if (
        curX > rect.left - 5 &&
        curX < rect.right + 5 &&
        curY > rect.top - 5 &&
        curY < rect.bottom + 5
      ) {
        setHovered(i);
        return;
      }
    }
    setHovered(null);
  }, [coords]);

  return (
    <div className="hidden md:flex fixed right-2 top-0 h-screen flex-col items-center justify-center z-40">
      <div className="social-bar flex flex-col items-center gap-5 bg-transparent">
        {socials.map((s, i) => (
          <a
            key={s.label}
            href={s.url}
            ref={el => iconRefs.current[i] = el}
            aria-label={s.label}
            target="_blank"
            rel="noopener"
            className={`rounded-full p-2 shadow hover:scale-110 transition-all border border-gray-200 dark:border-gray-600
              ${hovered === i ? "social-icon-glow" : ""}
              `}
            style={
              hovered === i
                ? {
                    background: s.label === "Instagram"
                      ? brandColors[s.label]
                      : "#fff",
                    color:
                      s.label === "Instagram"
                        ? "#fff"
                        : brandColors[s.label],
                  }
                : {
                    background: "rgba(255,255,255,0.7)",
                    color: "var(--color-primary, #0ea5e9)",
                  }
            }
          >
            {React.cloneElement(
              s.icon,
              hovered === i
                ? // Use white for Instagram's logo, else brand color
                  {
                    color:
                      s.label === "Instagram"
                        ? "#fff"
                        : brandColors[s.label],
                  }
                : {
                    color: "var(--color-primary, #0ea5e9)",
                  }
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialBar;
