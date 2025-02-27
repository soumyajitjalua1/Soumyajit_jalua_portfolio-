
import React, { useEffect, useRef } from "react";
import { Code, Database, ChevronRight, Cpu, BrainCircuit, ServerIcon } from "lucide-react";

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Programming & Development",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "JavaScript", "SQL", "C (Intermediate)", "HTML", "CSS", "REST APIs", "Git", "CI/CD", "Django", "Flask", "Laravel", "React.js"]
    },
    {
      title: "Machine Learning & AI",
      icon: <BrainCircuit className="h-6 w-6" />,
      skills: ["EDA", "Deep Learning", "Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "GANs", "Time Series Analysis", "Regression Analysis", "NLP", "DBMS", "LLM", "Langchain", "RAG", "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Natural Language Processing", "Computer Vision", "Deep Learning"]
    },
    {
      title: "Data Engineering & Analytics",
      icon: <Database className="h-6 w-6" />,
      skills: ["PostgreSQL", "MongoDB", "Pyspark", "Spark", "ETL", "Power BI", "Tableau", "Hadoop", "Apache Spark", "AWS (EC2, S3, Lambda, SageMaker)"]
    },
    {
      title: "Core Competencies",
      icon: <Cpu className="h-6 w-6" />,
      skills: ["Machine Learning Model Development", "Statistical Analysis and Mathematical Modeling", "DAA", "DBMS", "Cloud computing", "Data Analysis", "Data Structures and Algorithms", "System Design and Architecture", "ETL Pipeline Development", "Data Privacy and GDPR Compliance"]
    }
  ];

  return (
    <section id="skills" className="section-container relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 right-20 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-40 w-72 h-72 bg-accent/5 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="text-center mb-16">
        <h2 className="section-title reveal-item">Technical Expertise</h2>
        <p className="section-subtitle reveal-item">A comprehensive overview of my technical skills and competencies</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="reveal-item"
            style={{ transitionDelay: `${0.2 * index}s` }}
          >
            <div className="card-glass p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <div 
                    key={idx}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="max-w-3xl mx-auto reveal-item">
        <div className="card-glass p-8">
          <h3 className="text-xl font-bold mb-6 text-center">Professional Development</h3>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0" />
              <p className="text-muted-foreground">Currently pursuing M.Sc. in AI and Machine Learning at Indian Institute of Information Technology Lucknow</p>
            </div>
            
            <div className="flex items-center gap-3">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0" />
              <p className="text-muted-foreground">Continuously expanding expertise in generative AI models and large language models</p>
            </div>
            
            <div className="flex items-center gap-3">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0" />
              <p className="text-muted-foreground">Focused on developing scalable machine learning solutions for enterprise applications</p>
            </div>
            
            <div className="flex items-center gap-3">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0" />
              <p className="text-muted-foreground">Exploring advanced applications of computer vision in healthcare diagnostics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
