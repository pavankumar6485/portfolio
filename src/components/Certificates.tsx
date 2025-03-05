
import { Award } from 'lucide-react';

const certificates = [
  {
    title: 'MERN Stack',
    issuer: 'Udemy',
    date: '2023',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1'
  },
  {
    title: 'Python',
    issuer: 'Udemy',
    date: '2022',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7'
  }
];

export function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block text-gradient">
            Certificates
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that demonstrate my commitment to continuous learning and skill development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificates.map((certificate, index) => (
            <div 
              key={index} 
              className="glass p-6 rounded-3xl card-hover reveal flex flex-col md:flex-row gap-6 items-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 p-3 glass rounded-full">
                <Award className="h-8 w-8 text-foreground" />
              </div>
              
              <div className="flex flex-col text-center md:text-left">
                <h3 className="text-xl font-semibold">{certificate.title}</h3>
                <p className="text-muted-foreground text-sm">Issued by {certificate.issuer}</p>
                <p className="text-muted-foreground text-xs mt-1">{certificate.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
