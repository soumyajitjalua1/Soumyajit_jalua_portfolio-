
import React, { useEffect, useRef } from "react";
import { Briefcase } from "lucide-react";

const Experience = () => {
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

  const experiences = [
    {
      title: "Full-Stack & ML Developer",
      company: "XyleneTech",
      period: "November 2024 - Present",
      description: [
        "Developed interactive poker gaming platform featuring real-time video interaction through OpenCV integration, enhancing social gameplay experience and user engagement",
        "Built full-stack solution using React.js frontend and Node.js backend, creating a user-friendly design with intuitive interfaces for seamless player interaction and game management"
      ],
      skills: ["React.js", "Node.js", "OpenCV", "Game Development"]
    },
    {
      title: "Generative AI Engineer",
      company: "Logical Analytics",
      period: "8 months",
      description: [
        "Engineered ML document processor with OCR and LLMs, reducing data extraction time by 85%",
        "Optimized Groq API prompting system achieving 95% accuracy in automated document classification",
        "Developed Flutter-Firebase mobile app increasing user engagement by 85% through real-time sync"
      ],
      skills: ["Python", "Laravel", "Flask", "Flutter", "Firebase", "Machine Learning", "PyTorch", "TensorFlow"]
    }
  ];

  return (
    <section id="experience" className="section-container relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="text-center mb-16">
        <h2 className="section-title reveal-item">Professional Experience</h2>
        <p className="section-subtitle reveal-item">A timeline of my professional journey and accomplishments</p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -ml-px md:ml-0"></div>
          
          {experiences.map((experience, index) => (
            <div 
              key={index} 
              className={`relative mb-12 md:mb-20 reveal-item ${
                index % 2 === 0 ? 'md:mr-auto md:pr-12 md:ml-0' : 'md:ml-auto md:pl-12 md:mr-0'
              } md:w-1/2 w-full pl-10 md:pl-0`}
              style={{ transitionDelay: `${0.2 * index}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-auto md:right-0 top-0 w-8 h-8 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center transform -translate-x-1/2 md:translate-x-1/2">
                <Briefcase className="h-3 w-3 text-primary" />
              </div>
              
              <div className={`card-glass p-6 md:p-8 ${index % 2 === 0 ? '' : ''}`}>
                <div className="flex flex-col md:items-start gap-1 mb-4">
                  <span className="text-sm font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary inline-flex">
                    {experience.period}
                  </span>
                  <h3 className="text-xl font-bold mt-2">{experience.title}</h3>
                  <p className="text-lg text-muted-foreground">{experience.company}</p>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {experience.description.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground flex">
                      <span className="mr-2 text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {experience.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
