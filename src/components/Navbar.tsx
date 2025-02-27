
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Code, Briefcase, GraduationCap, User, Cpu, Github, Linkedin } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      closeMenu();
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300 px-4 md:px-6",
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md py-3 shadow-md"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#home"
          className="flex items-center gap-2 text-lg font-display font-bold"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          <Cpu className="h-6 w-6" />
          <span>Soumyajit Jalua</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink onClick={() => scrollToSection("about")} icon={<User className="h-4 w-4" />}>
            About
          </NavLink>
          <NavLink onClick={() => scrollToSection("experience")} icon={<Briefcase className="h-4 w-4" />}>
            Experience
          </NavLink>
          <NavLink onClick={() => scrollToSection("education")} icon={<GraduationCap className="h-4 w-4" />}>
            Education
          </NavLink>
          <NavLink onClick={() => scrollToSection("projects")} icon={<Code className="h-4 w-4" />}>
            Projects
          </NavLink>
          <NavLink onClick={() => scrollToSection("skills")} icon={<Cpu className="h-4 w-4" />}>
            Skills
          </NavLink>
          <NavLink onClick={() => scrollToSection("contact")} className="ml-4 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-full">
            Contact
          </NavLink>
        </div>

        {/* Social Links */}
        <div className="hidden md:flex items-center space-x-3">
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a 
            href="https://linkedin.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-sm transition-transform duration-300 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-8 pt-24">
          <div className="flex flex-col space-y-6">
            <MobileNavLink onClick={() => scrollToSection("about")} icon={<User className="h-5 w-5" />}>
              About
            </MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection("experience")} icon={<Briefcase className="h-5 w-5" />}>
              Experience
            </MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection("education")} icon={<GraduationCap className="h-5 w-5" />}>
              Education
            </MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection("projects")} icon={<Code className="h-5 w-5" />}>
              Projects
            </MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection("skills")} icon={<Cpu className="h-5 w-5" />}>
              Skills
            </MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection("contact")} className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-3 rounded-md text-center">
              Contact
            </MobileNavLink>
          </div>

          <div className="mt-auto flex justify-center space-x-6 pt-8">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Desktop NavLink component
const NavLink = ({ 
  children, 
  onClick, 
  className, 
  icon 
}: { 
  children: React.ReactNode; 
  onClick: () => void; 
  className?: string;
  icon?: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={cn(
      "group flex items-center gap-1.5 font-medium text-sm transition-colors hover:text-primary",
      className
    )}
  >
    {icon && <span className="opacity-70 group-hover:opacity-100">{icon}</span>}
    <span className="relative overflow-hidden">
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
    </span>
  </button>
);

// Mobile NavLink component
const MobileNavLink = ({ 
  children, 
  onClick, 
  className, 
  icon 
}: { 
  children: React.ReactNode; 
  onClick: () => void; 
  className?: string;
  icon?: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center gap-3 p-3 rounded-md hover:bg-secondary transition-colors text-lg",
      className
    )}
  >
    {icon && <span>{icon}</span>}
    {children}
  </button>
);

export default Navbar;
