
import React, { useEffect, useRef, useState } from "react";
import { Code, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [activeTab, setActiveTab] = useState("all");
  
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

  const projects = [
    {
      title: "AnywhereLLM: Contextual AI Assistant",
      description: "Developed a system-wide AI assistant with multi-modal content generation capabilities using Azure OpenAI API. Implemented advanced context-aware generation modes including creative, analytical, and code generation.",
      techStack: ["Python", "Azure OpenAI", "Keyboard Automation", "Natural Language Processing"],
      details: [
        "Developed a system-wide AI assistant with multi-modal content generation capabilities using Azure OpenAI API",
        "Implemented advanced context-aware generation modes including creative, analytical, and code generation",
        "Engineered global hotkey system for seamless AI interaction across multiple applications",
        "Designed long-term memory management with dynamic context retrieval and summarization"
      ],
      category: "ai",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop"
    },
    {
      title: "Advanced Medical Image Analysis System Using GAN",
      description: "Implemented GAN-based cancer detection system achieving 90% accuracy in medical image analysis. Integrated Google Cloud Vision and Groq APIs for image processing and interactive medical consultations.",
      techStack: ["Python", "GANs", "Computer Vision", "Google Cloud Vision API", "Groq API", "Deep Learning"],
      details: [
        "Implemented GAN-based cancer detection system achieving 90% accuracy in medical image analysis",
        "Integrated Google Cloud Vision and Groq APIs for image processing and interactive medical consultations",
        "Developed automated medical report generation system with actionable healthcare recommendations"
      ],
      category: "computer-vision",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop"
    }
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI & ML" },
    { id: "computer-vision", label: "Computer Vision" }
  ];

  return (
    <section id="projects" className="section-container relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-40 right-40 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="text-center mb-16">
        <h2 className="section-title reveal-item">Technical Projects</h2>
        <p className="section-subtitle reveal-item">Showcasing my technical expertise and problem-solving abilities</p>
      </div>
      
      <div className="flex justify-center mb-8 reveal-item">
        <div className="inline-flex p-1 bg-secondary rounded-full">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                activeTab === category.id 
                  ? "bg-white dark:bg-black text-primary shadow-sm" 
                  : "hover:bg-white/50 dark:hover:bg-black/20"
              }`}
              onClick={() => setActiveTab(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <div 
            key={index}
            className="group reveal-item"
            style={{ transitionDelay: `${0.2 * index}s` }}
          >
            <div className="card-glass overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 z-20">
                  <div className="px-3 py-1 bg-black/60 backdrop-blur-sm text-white rounded-full text-xs">
                    {project.category === "ai" ? "AI & ML" : "Computer Vision"}
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {project.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex">
                          <span className="mr-2 text-primary">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-2.5 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <a 
                      href="#" 
                      className="inline-flex items-center text-sm font-medium hover:text-primary"
                    >
                      <Github className="mr-1 h-4 w-4" />
                      Source Code
                    </a>
                    <a 
                      href="#" 
                      className="inline-flex items-center text-sm font-medium hover:text-primary"
                    >
                      <ExternalLink className="mr-1 h-4 w-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 text-center reveal-item">
        <a 
          href="https://github.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/80 transition-colors"
        >
          <Github className="mr-2 h-4 w-4" />
          View More Projects on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
