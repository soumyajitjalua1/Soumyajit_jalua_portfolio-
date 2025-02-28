import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { ArrowRight, Award, BookOpen, Code, Database, Lightbulb, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Experience from '@/components/Experience';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-5">
                <AnimatedSection animation="fade-in-right">
                  <div className="relative">
                    <div className="glass-card relative rounded-3xl overflow-hidden aspect-square shadow-xl">
                    <img 
                        src="/about_image.png" 
                        alt="Soumyajit Jalua Profile"
                        className="w-full h-full object-cover"
                    />
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-background p-5 rounded-full shadow-lg">
                      <User size={40} className="text-primary/70" />
                    </div>
                  </div>
                </AnimatedSection>
              </div>
              
              <div className="md:col-span-7">
                <AnimatedSection animation="fade-in-left" className="space-y-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium">
                    About Me
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold">
                    Soumyajit Jalua
                  </h1>
                  <p className="text-xl text-foreground/80 font-medium">
                    AI & Machine Learning Engineer | Data Scientist
                  </p>
                  <p className="text-foreground/70">
                    Innovative AI/ML Engineer with proven expertise in developing advanced machine learning solutions and 
                    data-driven technologies. Specializing in generative AI, predictive modeling, and full-stack development 
                    with 90%+ accuracy across diverse projects.
                  </p>
                  <p className="text-foreground/70">
                    Demonstrated track record of translating complex technical challenges into scalable, 
                    high-impact solutions using Python, SQL, JavaScript, and React.
                  </p>
                  <p className="text-foreground/70">
                    Currently pursuing M.Sc. in AI and Machine Learning, bringing cutting-edge academic 
                    insights to practical enterprise challenges.
                  </p>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-secondary/30">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                My areas of expertise and the services I offer
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection 
                className="bg-background p-6 rounded-xl shadow-sm"
                animation="fade-in"
                delay={100}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Code size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Machine Learning Development</h3>
                <p className="text-foreground/70">
                  Development of custom machine learning solutions including predictive models, classification systems, 
                  and anomaly detection with 90%+ accuracy.
                </p>
              </AnimatedSection>
              
              <AnimatedSection 
                className="bg-background p-6 rounded-xl shadow-sm"
                animation="fade-in"
                delay={300}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Lightbulb size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Generative AI Solutions</h3>
                <p className="text-foreground/70">
                  Implementation of cutting-edge generative AI technologies for content creation, image generation, 
                  and interactive AI assistants.
                </p>
              </AnimatedSection>
              
              <AnimatedSection 
                className="bg-background p-6 rounded-xl shadow-sm"
                animation="fade-in"
                delay={500}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Database size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Data Engineering & Analytics</h3>
                <p className="text-foreground/70">
                  Design and implementation of robust data pipelines, ETL processes, and analytics solutions 
                  that transform raw data into actionable insights.
                </p>
              </AnimatedSection>
              
            </div>
          </div>
        </section>
        
        <Experience />
        
        <Education />
        
        <Skills />
        
        <section className="py-16 bg-primary/5">
          <div className="container-custom text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in Working Together?</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
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

export default About;