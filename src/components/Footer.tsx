
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="py-12 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Pavan Kumar Gandrothu</h2>
            <p className="text-muted-foreground max-w-md">
              Software Developer based in Tanuku, India. 
              Specializing in frontend development, machine learning, and backend technologies.
            </p>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/pavankumar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:scale-110 transition-transform duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:scale-110 transition-transform duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:pavankumar85667@gmail.com"
                className="p-3 rounded-full glass hover:scale-110 transition-transform duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="tel:9849816485"
                className="p-3 rounded-full glass hover:scale-110 transition-transform duration-300"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <a href="mailto:pavankumar85667@gmail.com" className="hover:underline">
                  pavankumar85667@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <a href="tel:9849816485" className="hover:underline">
                  +91 9849816485
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Tanuku, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Pavan Kumar Gandrothu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
