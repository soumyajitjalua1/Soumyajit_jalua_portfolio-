import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        <section className="py-16">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-5">
                <AnimatedSection animation="fade-in-right" className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                    <p className="text-foreground/70">
                      Feel free to reach out to me through any of the following channels.
                      I'll do my best to respond as soon as possible.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Phone size={20} className="text-primary" />
                        </div>
                        <div>
                            <h3 className="font-medium">Phone</h3>
                            <a href="tel:+919732591634" className="text-foreground/70 hover:text-primary transition-colors">
                            +91 9732591634
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail size={20} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <a href="mailto:soumyajitjalua@gmail.com" className="text-foreground/70 hover:text-primary transition-colors">
                          soumyajitjalua@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin size={20} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Location</h3>
                        <p className="text-foreground/70">Lucknow, India</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Linkedin size={20} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">LinkedIn</h3>
                        <a 
                          href="https://www.linkedin.com/in/soumyajit-jalua-09a98a270/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-foreground/70 hover:text-primary transition-colors"
                        >
                          LinkedIn Profile
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Github size={20} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">GitHub</h3>
                        <a 
                          href="https://github.com/soumyajitjalua1" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-foreground/70 hover:text-primary transition-colors"
                        >
                          GitHub Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
              
              <div className="md:col-span-7">
                <AnimatedSection animation="fade-in-left">
                  <form onSubmit={handleSubmit} className="bg-background rounded-xl p-6 shadow-sm">
                    <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Project Inquiry"
                      />
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <label htmlFor="message" className="block text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                        placeholder="Your message here..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 rounded-md text-primary-foreground font-medium transition-all hover:translate-y-[-2px] hover:shadow-lg disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                    >
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          Send Message <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;