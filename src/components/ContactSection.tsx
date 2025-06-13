import React, { useRef, useState, useEffect } from "react";
import { Mail } from "lucide-react";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("success");
    formRef.current?.reset();
  };

  return (
    <div className="glass rounded-2xl p-10 md:p-14 mx-auto max-w-2xl md:max-w-4xl lg:max-w-7xl animate-slide-in-up shadow-glass hover-lift">
      <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-8 md:mb-12 animate-rotate-in">Contact</h2>
      <form ref={formRef} className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
        <div className={`transition-all duration-700 ${
          isVisible ? 'animate-stagger-1' : 'opacity-0 translate-x-[-30px]'
        }`}>
          <label className="block text-gray-700 dark:text-gray-200 font-semibold text-lg md:text-xl mb-2 transition-colors duration-300 hover:text-primary" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            required
            className="w-full px-4 py-2 md:px-6 md:py-3 text-base md:text-lg rounded border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-[#1a263b] text-gray-900 dark:text-white transition-all duration-300 focus:scale-105 focus:border-primary hover:border-accent"
          />
        </div>
        <div className={`transition-all duration-700 ${
          isVisible ? 'animate-stagger-2' : 'opacity-0 translate-x-[-30px]'
        }`}>
          <label className="block text-gray-700 dark:text-gray-200 font-semibold text-lg md:text-xl mb-2 transition-colors duration-300 hover:text-primary" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            className="w-full px-4 py-2 md:px-6 md:py-3 text-base md:text-lg rounded border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-[#1a263b] text-gray-900 dark:text-white transition-all duration-300 focus:scale-105 focus:border-primary hover:border-accent"
          />
        </div>
        <div className={`transition-all duration-700 ${
          isVisible ? 'animate-stagger-3' : 'opacity-0 translate-x-[-30px]'
        }`}>
          <label className="block text-gray-700 dark:text-gray-200 font-semibold text-lg md:text-xl mb-2 transition-colors duration-300 hover:text-primary" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={6}
            className="w-full px-4 py-2 md:px-6 md:py-3 text-base md:text-lg rounded border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-[#1a263b] text-gray-900 dark:text-white transition-all duration-300 focus:scale-105 focus:border-primary hover:border-accent resize-none"
          />
        </div>
        <button
          type="submit"
          className={`w-full py-3 md:py-4 px-6 md:px-8 rounded text-lg md:text-xl bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 group
            ${isVisible ? 'opacity-100 scale-100 animate-fade-in' : 'opacity-0 scale-75'}
          `}
        >
          <span className="flex items-center justify-center gap-3 transition-all duration-300">
            <Mail size={24} className="group-hover:rotate-12 transition-transform duration-300" /> 
            Send
          </span>
        </button>
        {status === "success" && (
          <div className="text-green-600 font-semibold text-center mt-2 animate-bounce-in">
            Message sent! (This is a demo)
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactSection;
