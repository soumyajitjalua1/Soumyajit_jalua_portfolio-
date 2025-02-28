import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';


const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary/5 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          <div className="md:col-span-5">
            <Link to="/" className="text-2xl font-display font-bold mb-4 inline-block">
              SJ<span className="text-primary/70">.</span>
            </Link>
            <p className="text-foreground/70 mb-6 max-w-md">
              Innovative AI/ML Engineer specializing in generative AI, predictive modeling, 
              and full-stack development with a track record of delivering scalable, high-impact solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/soumyajitjalua1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/soumyajit-jalua-09a98a270/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://x.com/Soumyajitjalua" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:soumyajitjalua@gmail.com" 
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3 md:col-start-8">
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-foreground/70 hover:text-primary transition-colors">Home</Link>
              <Link to="/about" className="text-foreground/70 hover:text-primary transition-colors">About</Link>
              <Link to="/projects" className="text-foreground/70 hover:text-primary transition-colors">Projects</Link>
              <Link to="/contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="font-display font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <p className="text-foreground/70">
                <a href="mailto:soumyajitjalua@gmail.com" className="hover:text-primary transition-colors">
                  soumyajitjalua@gmail.com
                </a>
              </p>
              <p className="text-foreground/70">Lucknow, India</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-foreground/60 text-sm">
          <p>© {currentYear} Soumyajit Jalua. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;