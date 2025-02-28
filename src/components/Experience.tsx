import { Briefcase, Calendar } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Experience = () => {
  const experiences = [
    {
      title: 'Full-Stack & ML Developer',
      company: 'XyleneTech',
      period: 'November 2024 - Present',
      description: [
        'Developed interactive poker gaming platform featuring real-time video interaction through OpenCV integration, enhancing social gameplay experience and user engagement',
        'Built full-stack solution using React.js frontend and Node.js backend, creating a user-friendly design with intuitive interfaces for seamless player interaction and game management'
      ]
    },
    {
      title: 'Generative AI Engineer',
      company: 'Logical Analytics',
      period: '8 months',
      description: [
        'Engineered ML document processor with OCR and LLMs, reducing data extraction time by 85%',
        'Optimized Groq API prompting system achieving 95% accuracy in automated document classification',
        'Developed Flutter-Firebase mobile app increasing user engagement by 85% through real-time sync',
        'Tech Stack: Python, Laravel, Flask, Laragon, Flutter, Limini, Machine Learning (PyTorch, TensorFlow), Cloud (Firebase)'
      ]
    }
  ];

  return (
    <section className="py-16" id="experience">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            My professional journey in AI and machine learning development.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <AnimatedSection 
              key={`${exp.company}-${index}`} 
              className="mb-12 last:mb-0" 
              animation="fade-in-right"
              delay={index * 200}
            >
              <div className="relative pl-8 border-l-2 border-primary/20 pb-8">
                <div className="absolute top-0 left-[-10px] w-5 h-5 rounded-full bg-primary/20 border-4 border-background" />
                
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 mb-4">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <div className="px-3 py-1 bg-primary/10 rounded-full text-primary text-sm">
                    {exp.company}
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-foreground/60 mb-4">
                  <Calendar size={16} className="mr-2" />
                  {exp.period}
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 mr-2 flex-shrink-0" />
                      <p className="text-foreground/80">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;