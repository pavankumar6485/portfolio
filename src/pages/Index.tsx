
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Certificates } from "@/components/Certificates";
import { GetInTouch } from "@/components/GetInTouch";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useEffect } from "react";

const Index = () => {
  // Add a class to the body for global styling
  useEffect(() => {
    document.body.classList.add('bg-dots');
    
    return () => {
      document.body.classList.remove('bg-dots');
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Certificates />
      <GetInTouch />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
