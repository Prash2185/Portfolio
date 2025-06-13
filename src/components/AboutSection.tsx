import React, { useEffect, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="glass rounded-2xl p-8 md:p-12 mx-auto max-w-3xl md:max-w-4xl lg:max-w-7xl animate-slide-in-right shadow-glass hover-lift">
      <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-8 md:mb-10 animate-bounce-in">About Me</h2>
      <p className={`text-lg md:text-2xl text-gray-700 dark:text-gray-200 mb-4 md:mb-6 transition-all duration-700 ${
        isVisible ? 'animate-stagger-1' : 'opacity-0 translate-y-4'
      }`}>
        I'm <span className="font-medium text-primary hover:text-secondary transition-colors duration-300 cursor-pointer hover:scale-105 inline-block">Prasanna Dhotarkar</span>, a passionate developer and designer focused on building beautiful and functional digital experiences. 
      </p>
      <p className={`text-base md:text-xl text-gray-600 dark:text-gray-300 mt-4 md:mt-6 transition-all duration-700 ${
        isVisible ? 'animate-stagger-2' : 'opacity-0 translate-y-4'
      }`}>
        Strong background in <span className="text-accent hover:text-primary transition-colors duration-300 cursor-pointer hover:scale-105 inline-block">React</span>, <span className="text-primary hover:text-secondary transition-colors duration-300 cursor-pointer hover:scale-105 inline-block">Tailwind CSS</span>, UX/UI design, and creative problem solving. I love collaborating and always eager to learn cutting-edge tech!
      </p>
    </div>
  );
};

export default AboutSection;
