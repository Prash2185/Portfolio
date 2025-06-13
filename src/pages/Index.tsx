import React from "react";
import SidebarNav from "@/components/SidebarNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import SocialBar from "@/components/SocialBar";
import CustomCursor, { CustomCursorProvider } from "@/components/CustomCursor";
import { MobileNavigation } from "@/components/MobileNavigation";

const Index = () => {
  return (
    <CustomCursorProvider >
      <div className="bg-section-gradient dark:bg-section-gradient-dark">
        <MobileNavigation />
        <div className="relative flex">
          <div className="hidden md:block">
            <SidebarNav />
          </div>
          <div className="hidden md:block">
            <SocialBar />
          </div>
          <main className="flex-1 px-4 md:px-6 lg:px-8 pt-16 md:pt-2 w-full">
            <section
              id="home"
              className="min-h-screen flex items-center overflow-hidden scroll-mt-24"
            >
              <HeroSection />
            </section>
            <section id="about" className="py-24 scroll-mt-24">
              <AboutSection />
            </section>
            <section id="skills" className="py-24 scroll-mt-24">
              <SkillsSection />
            </section>
            <section id="projects" className="py-24 scroll-mt-24">
              <ProjectsSection />
            </section>
            <section id="contact" className="py-24 scroll-mt-24">
              <ContactSection />
            </section>
          </main>
        </div>
      </div>
    </CustomCursorProvider>
  );
};

export default Index;
