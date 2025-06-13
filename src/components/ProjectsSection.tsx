import React, { useEffect, useState } from "react";

// AI-looking or tech images from Unsplash as placeholders
const projects = [
  {
    title: "Animated Portfolio",
    desc: "Personal website with modern animations and a glassy UI using React + Tailwind.",
    tech: ["React", "Tailwind", "shadcn"],
    link: "https://prasanna-dhotarkar.github.io/animated-portfolio/",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=thumb&w=400&q=80"
  },
  {
    title: "Ecommerce Dashboard",
    desc: "Admin dashboard with real-time charts and glassmorphism.",
    tech: ["React", "Recharts", "Tailwind"],
    link: "#",
    img: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=thumb&w=400&q=80"
  },
  {
    title: "Blog Platform",
    desc: "A clean blog with smooth animations and markdown support.",
    tech: ["Next.js", "MDX"],
    link: "#",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=thumb&w=400&q=80"
  },
];

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="glass rounded-2xl p-10 mx-auto max-w-5xl lg:max-w-7xl animate-slide-in-left shadow-glass hover-lift">
      <h2 className="text-3xl font-bold text-gradient mb-10 animate-rotate-in">Projects</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((p, index) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener"
            className={`block rounded-xl bg-white/70 dark:bg-[#0ea5e9]/10 shadow-sm hover:scale-105 hover:shadow-lg transition-all duration-500 border border-gray-200 dark:border-[#23354b] overflow-hidden group
              ${isVisible ? 'opacity-100 scale-100 animate-fade-in' : 'opacity-0 scale-75'}
            `}
          >
            <div className="overflow-hidden">
              <img 
                src={p.img} 
                alt={p.title} 
                className="w-full h-32 object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2" 
              />
            </div>
            <div className="p-4 space-y-3">
              <h3 className="font-semibold text-lg mb-2 text-primary dark:text-accent transition-colors duration-300 group-hover:text-secondary">
                {p.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-200 mb-3 text-sm transition-colors duration-300 group-hover:text-gray-600 dark:group-hover:text-gray-100">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t, techIndex) => (
                  <span 
                    key={t} 
                    className={`px-2 py-1 text-xs rounded bg-accent/20 dark:bg-primary/20 text-accent dark:text-primary font-semibold transition-all duration-300 hover:scale-110 hover:bg-accent/30 dark:hover:bg-primary/30
                      ${isVisible ? `animate-stagger-${techIndex + 2}` : 'opacity-0'}
                    `}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
