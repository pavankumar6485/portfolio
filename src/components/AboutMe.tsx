
import { Code, GraduationCap, Briefcase, User, BookOpen, Lightbulb } from 'lucide-react';

export function AboutMe() {
  return (
    <section id="about-me" className="py-24 px-6 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block text-gradient">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey, experience, and passion for software development
          </p>
        </div>

        {/* Personal Bio Section */}
        <div className="glass p-8 rounded-3xl card-hover mb-12 reveal max-w-4xl mx-auto">
          <div className="flex items-start gap-6">
            <div className="hidden md:block">
              <div className="p-4 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600">
                <User className="h-8 w-8 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Hello, Nice to meet you!</h3>
              <p className="text-muted-foreground mb-4">
                I'm Pavan Kumar Gandrothu, a passionate Software Developer with expertise in full-stack development and machine learning. 
                I enjoy building scalable and efficient applications using React.js, Flask, Express.js, and MongoDB.
              </p>
              <p className="text-muted-foreground">
                During my internship at IIIT Hyderabad, I worked on a Flight Booking Platform, enhancing my frontend development 
                skills and gaining hands-on experience in building user-friendly web applications. I have also developed projects 
                like an E-Shop platform and a scene understanding model using CNNs and transformers.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education Section */}
          <div className="glass p-6 rounded-3xl card-hover reveal" style={{ animationDelay: '100ms' }}>
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-gradient-to-br from-blue-400 to-blue-600">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Education</h3>
            <ul className="space-y-4">
              <li className="border-l-2 border-blue-400 pl-4 py-1">
                <div className="font-medium">KIET Group Of Institutions</div>
                <div className="text-sm text-muted-foreground">B.Tech (2022 - 2025)</div>
                <div className="text-sm">Kakinada, India</div>
              </li>
              <li className="border-l-2 border-blue-400 pl-4 py-1">
                <div className="font-medium">SMVM Polytechnic</div>
                <div className="text-sm text-muted-foreground">Diploma (2019 - 2022)</div>
                <div className="text-sm">Tanuku, India</div>
              </li>
            </ul>
          </div>

          {/* Experience Section */}
          <div className="glass p-6 rounded-3xl card-hover reveal" style={{ animationDelay: '200ms' }}>
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-gradient-to-br from-purple-400 to-purple-600">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Experience</h3>
            <div className="border-l-2 border-purple-400 pl-4 py-1">
              <div className="font-medium">Frontend Developer</div>
              <div className="text-sm text-muted-foreground">IIIT Hyderabad (May 2023 - Jul 2023)</div>
              <div className="text-sm">Hyderabad, India</div>
              <p className="text-sm mt-2">
                Developed a website-based Flight Booking Platform using React.js as the frontend framework. 
                Responsible for designing and implementing web pages.
              </p>
            </div>
          </div>

          {/* Interests Section */}
          <div className="glass p-6 rounded-3xl card-hover reveal col-span-1 md:col-span-2" style={{ animationDelay: '300ms' }}>
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-gradient-to-br from-green-400 to-green-600">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Interests & Passions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center p-4 glass hover:scale-105 transition-all duration-300">
                <Code className="h-8 w-8 text-indigo-500 mb-2" />
                <span>Web Development</span>
              </div>
              <div className="flex flex-col items-center p-4 glass hover:scale-105 transition-all duration-300">
                <svg className="h-8 w-8 text-blue-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Machine Learning</span>
              </div>
              <div className="flex flex-col items-center p-4 glass hover:scale-105 transition-all duration-300">
                <BookOpen className="h-8 w-8 text-green-500 mb-2" />
                <span>Learning New Tech</span>
              </div>
              <div className="flex flex-col items-center p-4 glass hover:scale-105 transition-all duration-300">
                <svg className="h-8 w-8 text-amber-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <span>Problem Solving</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
