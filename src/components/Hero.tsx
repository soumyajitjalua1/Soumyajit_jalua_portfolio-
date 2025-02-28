import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 section-spacing">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-8">
            <AnimatedSection animation="fade-in" delay={200}>
              <div className="inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium mb-4">
                AI & Machine Learning Engineer
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={400}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Soumyajit <span className="text-primary/70">Jalua</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={600}>
              <p className="text-lg md:text-xl text-foreground/80 max-w-xl">
                Innovative AI/ML Engineer with expertise in developing advanced machine learning 
                solutions and data-driven technologies. Specializing in generative AI, 
                predictive modeling, and full-stack development.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={800}>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  to="/projects"
                  className="inline-flex items-center gap-2 bg-primary px-6 py-3 rounded-md text-primary-foreground font-medium transition-all hover:translate-y-[-2px] hover:shadow-lg"
                >
                  View Projects <ArrowRight size={18} />
                </Link>
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-secondary px-6 py-3 rounded-md text-secondary-foreground font-medium transition-all hover:bg-secondary/70"
                >
                  Contact Me
                </Link>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="md:col-span-5">
            <AnimatedSection animation="fade-in-left" delay={600}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/10 rounded-3xl transform rotate-6"></div>
                <div className="glass-card relative rounded-3xl overflow-hidden aspect-square shadow-xl">
                <img 
                  src="/my_image.png" 
                  alt="Soumyajit Jalua Profile"
                  className="w-full h-full object-cover"
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="text-center bg-background/20 backdrop-blur-sm p-3 rounded-lg">
                        <p className="text-sm text-foreground/70">Experience</p>
                        <p className="text-lg font-semibold">1+ Years</p>
                      </div>
                      <div className="text-center bg-background/20 backdrop-blur-sm p-3 rounded-lg">
                        <p className="text-sm text-foreground/70">Projects</p>
                        <p className="text-lg font-semibold">20+</p>
                      </div>
                      <div className="text-center bg-background/20 backdrop-blur-sm p-3 rounded-lg">
                        <p className="text-sm text-foreground/70">M.Sc.</p>
                        <p className="text-lg font-semibold">AI & ML</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;