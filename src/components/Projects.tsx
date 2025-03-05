
import { useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Shop',
    description: 'Shopping platform with secure payments, real-time order tracking, and restaurant management.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    github: 'https://github.com/pavankumar',
    demo: '#'
  },
  {
    title: 'Scene Understanding',
    description: 'Developed a machine learning model for scene understanding, leveraging CNNs and transformers for object detection, scene classification, and segmentation.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Flask'],
    github: 'https://github.com/pavankumar',
    demo: '#'
  },
  {
    title: 'Flight Booking Platform',
    description: 'Website-based Flight Booking Platform developed during summer internship at IIIT Hyderabad.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    technologies: ['React.js', 'CSS', 'HTML', 'JavaScript'],
    github: 'https://github.com/pavankumar',
    demo: '#'
  }
];

export function Projects() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const reveal = () => {
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', reveal);
    // Initial check
    reveal();
    
    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, []);

  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block text-gradient">
            Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in frontend development, machine learning, and backend technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="glass rounded-3xl overflow-hidden card-hover reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between pt-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm hover:underline"
                  >
                    <Github className="mr-1 h-4 w-4" /> Source
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm hover:underline"
                  >
                    <ExternalLink className="mr-1 h-4 w-4" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
