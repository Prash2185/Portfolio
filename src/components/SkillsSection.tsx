import React, { useEffect, useState } from "react";

const skills = [
  { name: "React", level: 92, color: "bg-primary" },
  { name: "TypeScript", level: 84, color: "bg-secondary" },
  { name: "Tailwind CSS", level: 90, color: "bg-accent" },
  { name: "UI/UX", level: 85, color: "bg-tertiary" },
  { name: "Next.js", level: 70, color: "bg-primary" },
];

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="glass rounded-2xl p-10 md:p-14 mx-auto max-w-3xl md:max-w-4xl lg:max-w-7xl animate-slide-in-up shadow-glass hover-lift">
      <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-10 md:mb-14 animate-bounce-in">Skills</h2>
      <div className="flex flex-col gap-6 md:gap-8">
        {skills.map((skill, i) => (
          <div 
            key={skill.name}
            className={`transform transition-all duration-700 ${
              isVisible ? `animate-stagger-${i + 1}` : 'opacity-0 translate-x-[-50px]'
            }`}
          >
            <div className="flex justify-between mb-2 md:mb-3">
              <span className="text-lg md:text-2xl text-gray-800 dark:text-gray-200 font-medium hover:text-primary transition-colors duration-300">
                {skill.name}
              </span>
              <span className="text-md md:text-xl font-semibold text-gray-600 dark:text-gray-300 animate-bounce-in">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-3 md:h-4 overflow-hidden hover-glow">
              <div
                className={`h-3 md:h-4 rounded-full ${skill.color} shadow-lg transition-all duration-1000 hover:brightness-110`}
                style={{
                  width: isVisible ? `${skill.level}%` : '0%',
                  transition: `width ${1000 + i * 200}ms cubic-bezier(.4,1.4,.77,1) ${i * 100}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
