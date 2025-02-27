
import React, { useEffect, useRef } from "react";
import { GraduationCap } from "lucide-react";

const Education = () => {
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

  const education = [
    {
      degree: "M.Sc in Artificial Intelligence and Machine Learning",
      institution: "Indian Institute of Information Technology Lucknow",
      period: "August 2023 - June 2025",
      location: "Lucknow, India",
      courses: [
        "Artificial intelligence", 
        "Machine Learning", 
        "Neural Networks", 
        "Computer Vision", 
        "NLP", 
        "Cloud computing"
      ],
      gpa: "8.14"
    },
    {
      degree: "B.Sc Mathematics (Honours)",
      institution: "Panskura Banamali College",
      period: "September 2020 - June 2023",
      location: "Panskura, India",
      courses: [
        "Linear Algebra", 
        "Probability Theory", 
        "Statistical Analysis", 
        "Computational Mathematics"
      ],
      gpa: "8.1"
    }
  ];

  return (
    <section id="education" className="section-container relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-accent/5 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="text-center mb-16">
        <h2 className="section-title reveal-item">Education</h2>
        <p className="section-subtitle reveal-item">My academic journey and qualifications</p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="reveal-item"
              style={{ transitionDelay: `${0.2 * index}s` }}
            >
              <div className="card-glass p-8 h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-sm text-muted-foreground">Period</span>
                    <span className="font-medium">{edu.period}</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-sm text-muted-foreground">Location</span>
                    <span className="font-medium">{edu.location}</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-sm text-muted-foreground">CGPA</span>
                    <span className="font-medium">{edu.gpa}</span>
                  </div>
                  
                  <div>
                    <span className="text-sm text-muted-foreground block mb-2">Relevant Coursework</span>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, idx) => (
                        <span 
                          key={idx}
                          className="px-2.5 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
