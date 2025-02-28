import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import ProjectCard from '@/components/ProjectCard';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const projects = [
  {
    title: "AnywhereLLM: Contextual AI Assistant",
    description: "This AI solution deployable across any PC environment, featuring multiple specialized modes (general, creative) for diverse user.",
    techStack: ["Python", "Azure OpenAI", "NLP", "Keyboard Automation"],
    image: "https://staticlearn.shine.com/l/m/images/blog/mobile/emerging_technologies_in_finance.webp",
  },
  {
    title: "Advanced Medical Image Analysis System",
    description: "Implemented GAN-based cancer detection system achieving 90% accuracy in medical image analysis. Integrated Google Cloud Vision and Groq APIs for image processing and interactive medical consultations. Developed automated medical report generation system with actionable healthcare recommendations.",
    techStack: ["Python", "GANs", "Computer Vision", "Google Cloud Vision API", "Groq API"],
    image: "https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-goggles_23-2149611193.jpg",
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <Hero />
        
        <Skills />
        
        <Experience />
        
        <Education />
        
        <section className="py-16" id="featured-projects">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                A selection of my technical projects showcasing AI/ML capabilities and full-stack development.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {projects.map((project, index) => (
                <AnimatedSection 
                  key={project.title} 
                  animation={index % 2 === 0 ? "fade-in-right" : "fade-in-left"}
                  delay={index * 200}
                >
                  <ProjectCard {...project} />
                </AnimatedSection>
              ))}
            </div>
            
            <div className="text-center">
              <Link 
                to="/projects" 
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/70 px-6 py-3 rounded-md text-secondary-foreground font-medium transition-all"
              >
                View All Projects <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-primary/5">
          <div className="container-custom text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
                Interested in collaborating on a project or have an opportunity to discuss?
                I'm always open to new challenges and opportunities.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-primary px-6 py-3 rounded-md text-primary-foreground font-medium transition-all hover:translate-y-[-2px] hover:shadow-lg"
              >
                Get in Touch <ArrowRight size={18} />
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;