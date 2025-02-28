import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

type SkillCategory = 'all' | 'ml-ai' | 'programming' | 'data-engineering' | 'core';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'ml-ai', name: 'ML & AI' },
    { id: 'programming', name: 'Programming' },
    { id: 'data-engineering', name: 'Data Engineering' },
    { id: 'core', name: 'Core Competencies' },
  ];

  const skills = [
    { name: 'Python', category: 'programming' },
    { name: 'JavaScript', category: 'programming' },
    { name: 'SQL', category: 'programming' },
    { name: 'C', category: 'programming' },
    { name: 'HTML/CSS', category: 'programming' },
    { name: 'React.js', category: 'programming' },
    { name: 'Django', category: 'programming' },
    { name: 'Flask', category: 'programming' },
    { name: 'Laravel', category: 'programming' },
    
    { name: 'Deep Learning', category: 'ml-ai' },
    { name: 'Supervised Learning', category: 'ml-ai' },
    { name: 'Unsupervised Learning', category: 'ml-ai' },
    { name: 'Reinforcement Learning', category: 'ml-ai' },
    { name: 'GANs', category: 'ml-ai' },
    { name: 'Time Series Analysis', category: 'ml-ai' },
    { name: 'NLP', category: 'ml-ai' },
    { name: 'Computer Vision', category: 'ml-ai' },
    { name: 'TensorFlow', category: 'ml-ai' },
    { name: 'PyTorch', category: 'ml-ai' },
    { name: 'Scikit-learn', category: 'ml-ai' },
    { name: 'Keras', category: 'ml-ai' },
    { name: 'LLM', category: 'ml-ai' },
    { name: 'Langchain', category: 'ml-ai' },
    { name: 'RAG', category: 'ml-ai' },
    
    { name: 'PostgreSQL', category: 'data-engineering' },
    { name: 'MongoDB', category: 'data-engineering' },
    { name: 'Pyspark', category: 'data-engineering' },
    { name: 'ETL', category: 'data-engineering' },
    { name: 'Power BI', category: 'data-engineering' },
    { name: 'Tableau', category: 'data-engineering' },
    { name: 'Hadoop', category: 'data-engineering' },
    { name: 'Apache Spark', category: 'data-engineering' },
    { name: 'AWS', category: 'data-engineering' },
    
    { name: 'Machine Learning Models', category: 'core' },
    { name: 'Statistical Analysis', category: 'core' },
    { name: 'Mathematical Modeling', category: 'core' },
    { name: 'Data Analysis', category: 'core' },
    { name: 'Data Structures', category: 'core' },
    { name: 'Algorithms', category: 'core' },
    { name: 'System Design', category: 'core' },
    { name: 'DBMS', category: 'core' },
    { name: 'Cloud Computing', category: 'core' },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section className="py-16 bg-secondary/30" id="skills">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A comprehensive set of technical skills accumulated through academic studies, 
            professional experience, and project work.
          </p>
        </AnimatedSection>

        <AnimatedSection className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as SkillCategory)}
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

        <AnimatedSection>
          <div className="flex flex-wrap justify-center gap-3">
            {filteredSkills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="skill-tag animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;