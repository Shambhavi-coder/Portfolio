import Navigation from '@/components/portfolio/Navigation';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Skills from '@/components/portfolio/Skills';
import FloatingSkills from '@/components/portfolio/FloatingSkills';
import Projects from '@/components/portfolio/Projects';
import Contact from '@/components/portfolio/Contact';
import Loader from '@/components/portfolio/Loader';
import { useEffect, useState } from 'react';
import { useMousePosition } from '@/hooks/useMousePosition';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const mousePosition = useMousePosition();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Smooth scroll behavior for all navigation
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden scroll-smooth">
      {/* Mouse Follower Effect */}
      <div 
        className="fixed w-4 h-4 bg-primary/20 rounded-full pointer-events-none z-30 transition-all duration-300 ease-out"
        style={{
          left: `${mousePosition.x - 8}px`,
          top: `${mousePosition.y - 8}px`,
        }}
      />
      
      <Navigation />
      <div className="pressure-container">
        <Hero />
      </div>
      <div className="pressure-container">
        <About />
      </div>
      <div className="pressure-container">
        <Skills />
      </div>
      <div className="pressure-container">
        <FloatingSkills />
      </div>
      <div className="pressure-container">
        <Projects />
      </div>
      <div className="pressure-container">
        <Contact />
      </div>
    </div>
  );
};

export default Portfolio;