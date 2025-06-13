import React, { useEffect, useRef, useState } from "react";
import CustomCursor from "./CustomCursor";

const useTyping = (text: string, speed = 50, startAfter = 0) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, ++i));
        if (i > text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, startAfter);
    return () => clearTimeout(timeout);
  }, [text, speed, startAfter]);
  return displayed;
};

const HeroSection = () => {
  // Typing animations for subtitle and description
  const subtitle = useTyping("Creative Web Developer & Designer 🚀", 38, 800);
  const description = useTyping(
    "I bring ideas to life with animated React/Tailwind magic. Let's build something awesome together!",
    18,
    1700
  );

  // Bounce fall for name
  const [showName, setShowName] = useState(false);
  const [showAvatar, setShowAvatar] = useState(false);

  useEffect(() => {
    const avatarTimer = setTimeout(() => setShowAvatar(true), 100);
    const nameTimer = setTimeout(() => setShowName(true), 400);

    return () => {
      clearTimeout(avatarTimer);
      clearTimeout(nameTimer);
    };
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center text-center select-none">
      <div className="hidden md:block">
        <CustomCursor />
      </div>
      {/* Avatar with enhanced entrance animation */}
      <div
        className={`w-44 h-44 md:w-72 md:h-72 rounded-full bg-hero-gradient mb-6 md:mb-10 flex items-center justify-center border-8 border-white dark:border-[#1a1f2c] overflow-hidden transition-opacity duration-300
          ${showAvatar ? "opacity-100" : "opacity-0"}
        `}
      >
        <img
          src="/lovable-uploads/474768c2-50e4-4a0c-a9b2-f56af5e66d0e.png"
          alt="Prasanna Dhotarkar"
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Name with animated bounce-fall */}
      <div
        className={`inline-block font-extrabold tracking-tight mb-4 md:mb-8
          text-4xl md:text-7xl lg:text-8xl text-gradient
          ${showName ? "hero-bounce-in" : "opacity-0"}
        `}
        style={{ lineHeight: 1.15, minHeight: "56px" }}
      >
        Prasanna Dhotarkar
      </div>

      {/* Subtitle typing animation with stagger */}
      <h2
        className="text-xl md:text-3xl lg:text-4xl font-semibold mb-8 md:mb-10 dark:text-white text-gray-700 min-h-[32px] animate-stagger-1"
        style={{ whiteSpace: "pre" }}
        aria-label="subtitle"
      >
        {subtitle}
      </h2>

      {/* Description typing animation with stagger */}
      <p
        className="max-w-xl mx-auto text-base md:text-lg text-gray-600/90 dark:text-gray-200/70 min-h-[64px] animate-stagger-2"
        style={{ whiteSpace: "pre-line" }}
        aria-label="description"
      >
        {description}
      </p>
    </div>
  );
};

export default HeroSection;
