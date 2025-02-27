
import React from "react";
import { Github, Linkedin, Mail, Code, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/50 backdrop-blur-sm border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xl font-bold">Soumyajit Jalua</h3>
            <p className="text-muted-foreground max-w-md">
              AI & Machine Learning Engineer specializing in cutting-edge 
              technologies and full-stack development solutions.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:soumyajitjalua@gmail.com" 
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <FooterLink href="#about">About Me</FooterLink>
              <FooterLink href="#experience">Experience</FooterLink>
              <FooterLink href="#education">Education</FooterLink>
              <FooterLink href="#projects">Projects</FooterLink>
              <FooterLink href="#skills">Skills</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Technical Areas</h3>
            <div className="flex flex-wrap gap-2">
              {["Machine Learning", "AI", "Computer Vision", "NLP", "Data Science", "Full-Stack"].map((tag, index) => (
                <span 
                  key={index}
                  className="px-2.5 py-1 bg-secondary rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Soumyajit Jalua. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0 text-sm text-muted-foreground">
            <span className="flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> and <Code className="h-4 w-4 mx-1" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href}
    className="text-muted-foreground hover:text-foreground transition-colors"
    onClick={(e) => {
      e.preventDefault();
      const section = document.querySelector(href);
      if (section) {
        window.scrollTo({
          top: section.getBoundingClientRect().top + window.scrollY - 80,
          behavior: "smooth",
        });
      }
    }}
  >
    {children}
  </a>
);

export default Footer;
