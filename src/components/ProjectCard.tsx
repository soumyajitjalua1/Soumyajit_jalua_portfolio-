import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Code, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  image,
  githubUrl,
  liveUrl,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 shadow-sm hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold mb-2 transition-transform duration-300 transform group-hover:translate-y-[-4px]">{title}</h3>
          
          <p className={cn(
            "text-foreground/80 mb-4 transition-all duration-300 overflow-hidden",
            isHovered ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
          )}>
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech) => (
              <span 
                key={tech} 
                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-3">
            {githubUrl && (
              <a 
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/80 hover:bg-primary/20 transition-colors"
              >
                <Code size={20} />
              </a>
            )}
            {liveUrl && (
              <a 
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/80 hover:bg-primary/20 transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;