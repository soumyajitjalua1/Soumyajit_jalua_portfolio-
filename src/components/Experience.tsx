import { Calendar } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
const Experience = () => {
  const experiences = [
    {
      title: 'Assistant Professor',
      company: 'Swami Vivekananda University',
      period: 'January 2026 - Present',
      description: [
        'Teaching AI, ML, DSA, NLP, and Data Analysis to undergraduate students;',
        'Curriculum development and student engagement in emerging technologies.',
        'Guided student research projects in AI and machine learning, fostering innovation and practical application of theoretical concepts.'
        // 'Tech Feast Project: Led a team of students in developing an AI-powered food recommendation system, utilizing machine learning algorithms to analyze user preferences and dietary restrictions, resulting in a 20% increase in user satisfaction.'  
      ]
    },
    {
      title: 'Assistant Professor',
      company: 'Saroj International University',
      period: 'August 2025 - december 2025',
      description: [
        'Teaching AI, ML, DSA, NLP, and Data Analysis to undergraduate students; curriculum development and student engagement in emerging technologies.'
      ]
    },
    {
      title: 'Full-Stack & ML Developer',
      company: 'XyleneTech',
      period: 'February 2025 - July 2025',
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

  const researchPublications = [
    {
      title: 'Reducing Hallucinations in Large Language Models',
      details: 'Supervisor: Dr. Pabitra Pal | Tech: LLM, Deep Learning',
      venue: 'IEEE (ICDAI-26 Conference - Accepted)',
      year: '2026'
    },
    {
      title: 'SLMark: A Secure and Lightweight Digital Watermarking Scheme for IoT Devices using LSB and LBP',
      details: 'Supervisor: Dr. Pabitra Pal | Tech: Image Watermarking, Local Binary Patterns, Internet of Things, Advanced Document Retrieval with Semantic Search',
      venue: 'Hyderabad, India',
      year: '2026'
    },
    {
      title: "Master's Thesis: Adaptive Multi-Style Fusion for IoT-Driven Interior Design",
      details: 'Supervisor: Dr. Niharika Anand | Tech: Edge Computing, Neural Style Transfer, Deep Learning',
      venue: 'IIIT Lucknow',
      year: '2025-2026'
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

        <AnimatedSection className="text-center mt-20 mb-12" id="research-publications">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Publications</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Selected research work and academic publications in AI, machine learning, and intelligent systems.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto grid gap-8">
          {researchPublications.map((publication, index) => (
            <AnimatedSection
              key={publication.title}
              className="bg-background rounded-xl p-6 shadow-sm"
              animation="fade-in"
              delay={index * 200}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar size={32} className="text-primary/70" />
                  </div>
                </div>

                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">{publication.title}</h3>
                  <p className="text-primary/70 font-medium mb-3">{publication.details}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    {publication.year && (
                      <div className="flex items-center text-sm text-foreground/60">
                        <Calendar size={16} className="mr-2" />
                        {publication.year}
                      </div>
                    )}
                    {publication.venue && (
                      <div className="flex items-center text-sm text-foreground/60">
                        <Calendar size={16} className="mr-2" />
                        {publication.venue}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-secondary/80 text-secondary-foreground">
                      Research Publication
                    </span>
                    {publication.year && (
                      <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                        {publication.year}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;