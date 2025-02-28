import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ProjectCard from '@/components/ProjectCard';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type ProjectCategory = 'all' | 'ml-ai' | 'fullstack' | 'data-engineering';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  category: ProjectCategory;
  githubUrl?: string;
  liveUrl?: string;
}

const projectsData: Project[] = [
  {
    title: "LLMAnywhere: Contextual AI Assistant",
    description: "AI solution deployable across any PC environment, featuring multiple specialized modes (general, creative) for diverse user .",
    techStack: ["Python", "Azure OpenAI", "NLP", "Keyboard Automation"],
    image: "https://miro.medium.com/v2/resize:fit:1358/1*dtpfWTfy33G-VB-98jLDpg.jpeg",
    category: "ml-ai",
    githubUrl: "https://github.com/soumyajitjalua1/LLMAnywhere-Contextual-AI-Assistant",
  },
  {
    title: "Advanced Medical Image Analysis System",
    description: "Implemented GAN-based cancer detection system achieving 90% accuracy in medical image analysis. Integrated Google Cloud Vision and Groq APIs for image processing and interactive medical consultations. Developed automated medical report generation system with actionable healthcare recommendations.",
    techStack: ["Python", "GANs", "Computer Vision", "Google Cloud Vision API", "Groq API", "Deep Learning"],
    image: "https://varteq.com/wp-content/uploads/2020/02/med-_imaging-1-680x360.png",
    category: "ml-ai",
    githubUrl: "https://github.com/soumyajitjalua1/Cancers_prediction_Using_GAN",
    liveUrl: "#"
  },
  {
    title: "Interactive Poker Gaming Platform",
    description: "Developed interactive poker gaming platform featuring real-time video interaction through OpenCV integration, enhancing social gameplay experience.",
    techStack: ["React.js", "Node.js", "OpenCV", "WebRTC", "Socket.io"],
    image: "https://gamezy.com/wp-content/uploads/2023/08/21134458/Poker-Game-e1692606142669.jpg",
    category: "fullstack",
    githubUrl: "#"
  },
  {
    title: "Common Vulnerabilities and Exposures analysis using NLP",
    description: "An AI-integrated system that retrieves detailed information about a CVE ID and generates user-friendly explanations using NLP.",
    techStack: ["Python", "NLP","Groq API","HTML/CSS"],
    image: "https://media.istockphoto.com/id/1412282189/photo/lock-network-technology-concept.jpg?s=612x612&w=0&k=20&c=hripuxLs9pS_7Ln6YWQR-Ow2_-BU5RdQ4vOY8s1q1iQ=",
    category: "ml-ai",
    githubUrl: "https://github.com/soumyajitjalua1/NLP_CVE_project",
    liveUrl: "https://nlp-project-0axg.onrender.com/"
  },
  {
    title: "Real-time Mobile Application for Financial Transactions",
    description: "Developed Flutter-Firebase mobile app increasing user engagement by 85% through real-time synchronization features and intuitive UI/UX design.",
    techStack: ["Flutter", "Firebase", "Dart", "Mobile Development"],
    image: "https://staticlearn.shine.com/l/m/images/blog/mobile/emerging_technologies_in_finance.webp",
    category: "fullstack",
    githubUrl: "https://github.com/soumyajitjalua1/Flutter-mobile-app",
    liveUrl: "https://tokenflow.lovable.app/"
  },
  {
    title: "ETL Data Pipeline System for weather data",
    description: "Built robust ETL pipeline for processing and analyzing large datasets from multiple sources, enabling real-time business intelligence and automated reporting.",
    techStack: ["Python", "Apache Spark", "PostgreSQL", "AWS", "Data Engineering"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    category: "data-engineering",
    githubUrl: "https://github.com/soumyajitjalua1/weatherFlow",
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ml-ai', name: 'ML & AI' },
    { id: 'fullstack', name: 'Full-Stack' },
    { id: 'data-engineering', name: 'Data Engineering' },
  ];
  
  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        <section className="py-16">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                A showcase of my technical projects across machine learning, artificial intelligence, 
                and full-stack development.
              </p>
            </AnimatedSection>
            
            <AnimatedSection className="mb-12">
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id as ProjectCategory)}
                    className={cn(
                      'px-4 py-2 rounded-full transition-all',
                      activeCategory === category.id
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'bg-background text-foreground/70 hover:bg-secondary'
                    )}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <AnimatedSection 
                  key={project.title} 
                  animation="fade-in"
                  delay={index * 100}
                >
                  <ProjectCard {...project} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;