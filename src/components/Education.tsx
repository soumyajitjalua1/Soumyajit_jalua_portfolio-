import { Book, Calendar, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Education = () => {
  const educationData = [
    {
      institution: 'Indian Institute of Information Technology Lucknow',
      degree: 'M.Sc. in Artificial Intelligence and Machine Learning',
      period: 'August 2023 - June 2025',
      location: 'Lucknow, India',
      courses: [
        'Artificial Intelligence', 'Machine Learning','Deep Learning', 'Neural Networks',
        'Computer Vision', 'NLP', 'Cloud Computing','DBMS', 'Data Structures & Algorithms'
      ],
      gpa: '8.14'
    },
    {
      institution: 'Panskura Banamali College',
      degree: 'B.Sc. Mathematics (Honours)',
      period: 'September 2020 - June 2023',
      location: 'Panskura, India',
      courses: [
        'Linear Algebra', 'Probability Theory', 'Statistical Analysis', 'Computational Mathematics'
      ],
      gpa: '8.1'
    }
  ];

  return (
    <section className="py-16 bg-secondary/30" id="education">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            My academic journey that built the foundation for my expertise in AI and machine learning.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto grid gap-8">
          {educationData.map((edu, index) => (
            <AnimatedSection 
              key={edu.institution} 
              className="bg-background rounded-xl p-6 shadow-sm"
              animation="fade-in"
              delay={index * 200}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                    <Book size={32} className="text-primary/70" />
                  </div>
                </div>
                
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">{edu.institution}</h3>
                  <p className="text-primary/70 font-medium mb-3">{edu.degree}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center text-sm text-foreground/60">
                      <Calendar size={16} className="mr-2" />
                      {edu.period}
                    </div>
                    <div className="flex items-center text-sm text-foreground/60">
                      <MapPin size={16} className="mr-2" />
                      {edu.location}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">CGPA: {edu.gpa}</p>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-primary/70 h-2 rounded-full"
                        style={{ width: `${(parseFloat(edu.gpa) / 10) * 100}%` }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map(course => (
                        <span 
                          key={course} 
                          className="px-3 py-1 text-xs rounded-full bg-secondary/80 text-secondary-foreground"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
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

export default Education;