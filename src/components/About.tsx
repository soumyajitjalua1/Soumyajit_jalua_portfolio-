
import React, { useEffect, useRef } from "react";

const About = () => {
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
    <section id="about" className="section-container relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent/5 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="text-center mb-16">
        <h2 className="section-title reveal-item">About Me</h2>
        <p className="section-subtitle reveal-item">Get to know my professional journey and expertise</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 order-2 lg:order-1">
          <div className="card-glass p-8 space-y-6 reveal-item">
            <h3 className="text-2xl font-bold">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              Innovative AI/ML Engineer with proven expertise in developing advanced machine learning solutions and
              data-driven technologies. Specializing in generative AI, predictive modeling, and full-stack development with 90%+
              accuracy across diverse projects.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Demonstrated track record of translating complex technical challenges into scalable,
              high-impact solutions using Python, SQL, JavaScript, and React. Currently pursuing M.Sc. in AI and Machine
              Learning, bringing cutting-edge academic insights to practical enterprise challenges.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Skilled in deploying end-to-end machine learning models that drive actionable business intelligence and technological innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 reveal-item">
            <div className="card-glass p-6">
              <div className="text-3xl font-bold">2+</div>
              <div className="text-muted-foreground mt-2">Years of Experience</div>
            </div>
            <div className="card-glass p-6">
              <div className="text-3xl font-bold">90%+</div>
              <div className="text-muted-foreground mt-2">Project Success Rate</div>
            </div>
          </div>
        </div>
        
        <div className="relative order-1 lg:order-2 reveal-item">
          <div className="relative mx-auto max-w-md">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
            <div className="relative card-glass p-8 space-y-6 transform -rotate-3 transition-transform hover:rotate-0 duration-500">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Current Focus</h3>
                <p className="text-muted-foreground">
                  Developing advanced AI/ML solutions with real-world applications in business and technology.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Academic Pursuit</h3>
                <p className="text-muted-foreground">
                  M.Sc. in Artificial Intelligence and Machine Learning at Indian Institute of Information Technology Lucknow.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Technical Interests</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Generative AI", "Computer Vision", "NLP", "Data Science", "Full-Stack Development"].map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
