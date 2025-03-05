
import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
      scrolled ? 'glass backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="text-xl font-medium tracking-tight hover:opacity-80 transition-opacity"
        >
          Pavan Kumar
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="story-link text-foreground hover:text-primary transition-colors">About</a>
          <a href="#projects" className="story-link text-foreground hover:text-primary transition-colors">Projects</a>
          <a href="#certificates" className="story-link text-foreground hover:text-primary transition-colors">Certificates</a>
          <a href="#contact" className="story-link text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
