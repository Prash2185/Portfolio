import React, { useEffect, useRef, useState } from "react";

// Helper type
export type CursorCoords = { x: number; y: number };

export const CursorContext = React.createContext<{
  coords: CursorCoords;
  setCoords: (c: CursorCoords) => void;
}>({
  coords: { x: 0, y: 0 },
  setCoords: () => {},
});

const CustomCursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [coords, setCoords] = useState<CursorCoords>({ x: 0, y: 0 });
  return (
    <CursorContext.Provider value={{ coords, setCoords }}>
      {children}
    </CursorContext.Provider>
  );
};

const useTheme = () => {
  const [theme, setTheme] = React.useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    if (window.localStorage.getItem("theme")) {
      return window.localStorage.getItem("theme") as "light" | "dark";
    }
    // Fallback to OS preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });
  useEffect(() => {
    const handler = () => {
      const newTheme = window.localStorage.getItem("theme")
        ? (window.localStorage.getItem("theme") as "light" | "dark")
        : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      setTheme(newTheme);
    };
    window.addEventListener("storage", handler);
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handler);
    return () => {
      window.removeEventListener("storage", handler);
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handler);
    };
  }, []);
  return theme;
};

const CustomCursorDesktop = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-50">
      <div
        className="w-8 h-8 bg-gradient-to-r from-primary/50 to-accent/50 rounded-full blur-sm transition-all duration-100 ease-out"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
        }}
      />
      <div
        className=" transition-all duration-75 ease-out"
        style={{
          transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
        }}
      />
    </div>
  );
};

const CustomCursorMobile = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { setCoords } = React.useContext(CursorContext);
  const [visible, setVisible] = useState(true);
  const theme = useTheme();

  // Simple single colors for better visibility
  const cursorColor = theme === "dark" ? "#00D4FF" : "#000000";
  const cursorShadow =
    theme === "dark"
      ? "drop-shadow(0 0 10px #00D4FF)"
      : "drop-shadow(0 0 8px rgba(0,0,0,0.5))";

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const cx = e.clientX - 8; // Offset for pointer tip
      const cy = e.clientY - 8;
      setCoords({ x: e.clientX, y: e.clientY });
      if (cursorRef.current) {
        cursorRef.current.style.left = `${cx}px`;
        cursorRef.current.style.top = `${cy}px`;
      }
    };
    const handleEnter = () => setVisible(true);
    const handleLeave = () => setVisible(false);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseenter", handleEnter);
    window.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseenter", handleEnter);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [setCoords]);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] transition-opacity"
      style={{
        left: 0,
        top: 0,
        opacity: visible ? 1 : 0,
        width: "20px",
        height: "20px",
        transition:
          "left 0.065s cubic-bezier(.55,1.27,.38,1.01), top 0.065s cubic-bezier(.55,1.27,.38,1.01), opacity 0.2s",
        pointerEvents: "none",
      }}
    >
      {/* Simple SVG Cursor with single color */}
      <svg
        width={20}
        height={20}
        viewBox="0 0 48 48"
        fill="none"
        style={{ filter: cursorShadow }}
      >
        {/* Single stroke cursor */}
        <polyline
          points="6,3 42,24 24,28 28,42 20,25 6,3"
          fill="none"
          stroke={cursorColor}
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const CustomCursorCombined = () => {
  return (
    <>
      <CustomCursorDesktop />
      <CustomCursorMobile />
    </>
  );
};

// Provide the CursorContext for the app (usage in _app or main layout)
export { CustomCursorProvider };
export default CustomCursorCombined;
