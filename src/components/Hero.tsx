import { useEffect, useRef } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Phone, FileText } from 'lucide-react';
import TypingEffect from 'react-typing-effect';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };

    const element = heroRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={heroRef}
      className="min-h-[70vh] pt-20 pb-16 px-6 relative overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(255,255,255,0.1) 0%, transparent 50%)',
        backgroundSize: '100% 100%'
      }}
    >
      <div className="bg-animation"></div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Image */}
          <div className="order-2 md:order-1 animate-slide-right">
            <div className="relative">
              <div className="aspect-square w-4/5 mx-auto rounded-3xl overflow-hidden glass glow-effect">
                <img 
                  src="https://res.cloudinary.com/dglti6vhb/image/upload/v1741158058/pavan_portfolio_hero_image_oxlgei.jpg" 
                  alt="Hero image" 
                  className="w-full h-full object-cover" 
                />
              </div>
              
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="order-1 md:order-2 animate-slide-left">
            <div className="space-y-6">
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in animation-delay-100">
                Pavan Kumar <span className="text-gradient">Gandrothu</span>
              </h1>

              {/* Typing Effect with Blue Color */}
              <div className="text-2xl md:text-3xl font-semibold text-blue-500">
                <TypingEffect
                  text={[
                    "Software Developer",
                    "Full Stack Developer",
                  ]}
                  speed={100}
                  eraseDelay={100}
                />
              </div>
              
              <p className="text-lg text-muted-foreground animate-fade-in animation-delay-200">
                Dedicated and results-driven Software Developer with experience in frontend development, machine learning, and
                backend technologies. Passionate about developing efficient, user-friendly applications and continuously
                enhancing my technical skills in a dynamic work environment.
              </p>
              
              <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                <a href="#projects" className="inline-flex items-center px-6 py-3 rounded-full bg-foreground text-background hover:opacity-90 transition-all duration-300">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="#contact" className="inline-flex items-center px-6 py-3 rounded-full bg-transparent border border-foreground hover:bg-foreground/5 transition-all duration-300">
                  Contact Me
                </a>
                <a 
                  href="https://drive.google.com/file/d/1t14YRU5vyOTQ5tKpMPXaS8ZpbMDxgb-1/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                >
                  Resume <FileText className="ml-2 h-4 w-4" />
                </a>
              </div>
              
              <div className="pt-6 flex items-center space-x-4 animate-fade-in animation-delay-400">
                <a 
                  href="https://github.com/pavankumar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass hover:scale-110 transition-transform duration-300"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass hover:scale-110 transition-transform duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:pavankumar85667@gmail.com"
                  className="p-3 rounded-full glass hover:scale-110 transition-transform duration-300"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a 
                  href="tel:9849816485"
                  className="p-3 rounded-full glass hover:scale-110 transition-transform duration-300"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
