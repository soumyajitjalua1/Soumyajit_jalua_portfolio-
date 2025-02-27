
import React, { useEffect, useRef } from "react";
import { User, ArrowDown } from "lucide-react";

const Hero = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal-item');
    
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    revealItems.forEach(item => {
      observerRef.current?.observe(item);
    });
    
    return () => {
      revealItems.forEach(item => {
        observerRef.current?.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-secondary rounded-full text-sm font-medium reveal-item" style={{ transitionDelay: '0.1s' }}>
                <User className="h-4 w-4 mr-2" />
                <span>AI & Machine Learning Engineer</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight reveal-item" style={{ transitionDelay: '0.3s' }}>
                <span className="block">Hello, I'm</span>
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-foreground">
                  Soumyajit Jalua
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl reveal-item" style={{ transitionDelay: '0.5s' }}>
                Innovative AI/ML Engineer with expertise in developing advanced machine learning solutions and
                data-driven technologies. Specializing in generative AI, predictive modeling, and full-stack development.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 reveal-item" style={{ transitionDelay: '0.7s' }}>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById('contact');
                  if (section) {
                    window.scrollTo({
                      top: section.offsetTop - 80,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/80 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById('projects');
                  if (section) {
                    window.scrollTo({
                      top: section.offsetTop - 80,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                View Projects
              </a>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-8 reveal-item" style={{ transitionDelay: '0.9s' }}>
              <div className="p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-border shadow-sm">
                <div className="font-bold text-2xl">2+</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </div>
              <div className="p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-border shadow-sm">
                <div className="font-bold text-2xl">95%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-border shadow-sm">
                <div className="font-bold text-2xl">ML/AI</div>
                <div className="text-sm text-muted-foreground">Specialization</div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex justify-center lg:justify-end reveal-item" style={{ transitionDelay: '0.5s' }}>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-accent/20 backdrop-blur-sm animate-pulse"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/80 to-white/30 dark:from-black/80 dark:to-black/30 backdrop-blur-md shadow-xl flex items-center justify-center overflow-hidden border border-white/20 dark:border-white/10">
                <div className="text-center p-8">
                  <h3 className="text-xl font-bold">AI & Machine Learning</h3>
                  <p className="text-muted-foreground mt-2">Transforming data into intelligence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
        <ArrowDown className="h-5 w-5 scroll-down" />
      </div>
    </section>
  );
};

export default Hero;
