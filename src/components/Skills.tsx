
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Database, Figma, Github, Globe, 
  Languages, Layers, LineChart, MonitorSmartphone, 
  PenTool, Server, Terminal, FileDown
} from 'lucide-react';
import { cn } from '@/lib/utils';

type Skill = {
  name: string;
  icon: React.ReactNode;
  color: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
};

const skillsData: Skill[] = [
  {
    name: 'HTML/CSS',
    icon: <Code className="h-6 w-6" />,
    color: 'from-orange-500 to-red-500',
    category: 'frontend'
  },
  {
    name: 'JavaScript',
    icon: <motion.div 
      initial={{ rotate: 0 }} 
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    ><Globe className="h-6 w-6" /></motion.div>,
    color: 'from-yellow-400 to-yellow-600',
    category: 'frontend'
  },
  {
    name: 'React.js',
    icon: <motion.div 
      initial={{ rotate: 0 }} 
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    ><Globe className="h-6 w-6" /></motion.div>,
    color: 'from-cyan-400 to-blue-500',
    category: 'frontend'
  },
  {
    name: 'Node.js',
    icon: <Server className="h-6 w-6" />,
    color: 'from-green-400 to-green-600',
    category: 'backend'
  },
  {
    name: 'Python',
    icon: <Terminal className="h-6 w-6" />,
    color: 'from-blue-500 to-indigo-600',
    category: 'backend'
  },
  {
    name: 'MongoDB',
    icon: <Database className="h-6 w-6" />,
    color: 'from-green-500 to-emerald-600',
    category: 'backend'
  },
  {
    name: 'Git/GitHub',
    icon: <Github className="h-6 w-6" />,
    color: 'from-gray-600 to-gray-800',
    category: 'tools'
  },
  {
    name: 'Responsive Design',
    icon: <MonitorSmartphone className="h-6 w-6" />,
    color: 'from-purple-500 to-pink-500',
    category: 'frontend'
  },
  {
    name: 'UI/UX Design',
    icon: <PenTool className="h-6 w-6" />,
    color: 'from-indigo-400 to-purple-500',
    category: 'frontend'
  },
  {
    name: 'RESTful APIs',
    icon: <Layers className="h-6 w-6" />,
    color: 'from-blue-400 to-blue-600',
    category: 'backend'
  },
  {
    name: 'SQL/Databases',
    icon: <Database className="h-6 w-6" />,
    color: 'from-amber-500 to-orange-600',
    category: 'backend'
  },
  {
    name: 'Data Visualization',
    icon: <LineChart className="h-6 w-6" />,
    color: 'from-emerald-400 to-teal-600',
    category: 'other'
  }
];

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'tools', name: 'Tools' },
    { id: 'other', name: 'Other' }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical toolkit and expertise as a web developer
          </p>
        </div>

        <div className="flex justify-center mb-10 reveal">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-foreground text-background'
                    : 'bg-muted/50 hover:bg-muted'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          layout
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="reveal"
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div 
                className={cn(
                  "glass rounded-xl p-6 h-full transition-all duration-300",
                  "hover-glow group border border-transparent",
                  hoveredSkill === index ? "border-white/30 shadow-lg scale-105" : ""
                )}
              >
                <div className={cn(
                  "mb-4 p-3 rounded-lg bg-gradient-to-br w-fit mx-auto",
                  skill.color
                )}>
                  {skill.icon}
                </div>
                <h3 className="text-center font-medium">{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center reveal">
          <a 
            href="https://drive.google.com/file/d/1t14YRU5vyOTQ5tKpMPXaS8ZpbMDxgb-1/view?usp=drive_link" 
            target="_blank"
            rel="noopener noreferrer" 
            className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium transition duration-300 ease-out border-2 border-foreground rounded-full shadow-md"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-foreground group-hover:translate-x-0 ease">
              <FileDown className="mr-1 h-5 w-5" />
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-foreground transition-all duration-300 transform group-hover:translate-x-full ease">
              Download Resume
            </span>
            <span className="relative invisible">Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}
