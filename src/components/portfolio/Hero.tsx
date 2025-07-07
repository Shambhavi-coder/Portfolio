import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = [
    'Frontend Developer',
    'DevOps Developer',
    'Full Stack Developer',
    'AI Tools Explorer',
    'Problem Solver',
    'Tech Enthusiast'
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating 3D Shapes */}
        <div 
          className="absolute top-20 left-20 w-20 h-20 bg-gradient-neon rounded-lg animate-float opacity-20"
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px) rotateX(45deg) rotateY(45deg)`,
          }}
        />
        <div 
          className="absolute top-40 right-32 w-16 h-16 bg-gradient-glow rounded-full animate-glow-pulse opacity-30"
          style={{
            transform: `translate(-${mousePosition.x * 0.05}px, -${mousePosition.y * 0.05}px)`,
          }}
        />
        <div 
          className="absolute bottom-32 left-40 w-24 h-24 border-2 border-primary rounded-lg animate-rotate-3d opacity-40"
          style={{
            transform: `translate(${mousePosition.x * 0.08}px, ${mousePosition.y * 0.08}px)`,
          }}
        />
        
        {/* Particle Grid */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-glow-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <p className="text-primary text-lg font-medium animate-text-glow">
                Hello, I'm Shambhavi
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight min-h-[2em] flex items-center">
                <span 
                  key={currentRoleIndex}
                  className="animate-fade-in bg-gradient-neon bg-clip-text text-transparent"
                >
                  {roles[currentRoleIndex]}
                </span>
              </h1>
              <div className="text-2xl text-muted-foreground space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></span>
                  <span>Building Amazing Web Experiences</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" style={{ animationDelay: '0.5s' }}></span>
                  <span>Exploring AI Tools & Technologies</span>
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Third-year Engineering student at Thapar Institute of Engineering and Technology, 
              passionate about creating interactive and responsive web applications with cutting-edge technologies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-gradient-neon text-background font-semibold px-6 py-3 rounded-lg shadow-neon hover:shadow-purple transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </Button>
              <Button 
                onClick={scrollToProjects}
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-background px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-neon"
              >
                View Projects
              </Button>
              <Button 
                onClick={() => window.open('https://linkedin.com/in/shambhavi-852940297', '_blank')}
                variant="outline" 
                className="border-accent text-accent hover:bg-accent hover:text-background px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-pink"
              >
                LinkedIn
              </Button>
              <Button 
                onClick={() => window.open('https://leetcode.com/Shambhavi_coder/', '_blank')}
                variant="outline" 
                className="border-secondary text-secondary hover:bg-secondary hover:text-background px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-purple"
              >
                LeetCode
              </Button>
            </div>

            {/* LeetCode Stats */}
            <div className="bg-gradient-to-r from-card/50 to-muted/50 backdrop-blur-sm border border-border/50 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-neon rounded-lg flex items-center justify-center">
                    <span className="text-background font-bold text-sm">LC</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LeetCode Profile</p>
                    <p className="text-foreground font-semibold">Problem Solver</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold bg-gradient-neon bg-clip-text text-transparent">150+</p>
                  <p className="text-xs text-muted-foreground">Problems Solved</p>
                </div>
              </div>
            </div>

          </div>

          {/* Profile Photo with 3D Effects */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* Glowing Border */}
              <div className="absolute inset-0 bg-gradient-neon rounded-2xl blur-lg opacity-50 animate-glow-pulse"></div>
              
              {/* Main Photo Container */}
              <div className="relative bg-gradient-to-br from-card to-muted p-1 rounded-2xl shadow-elevation">
                <div className="relative overflow-hidden rounded-xl">
<img
  src={profilePhoto}
  alt="Developer Profile"
  className="w-80 h-80 object-cover object-top transition-transform duration-500 hover:scale-110"
/>


                  
                  {/* Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-neon opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-neon-blue rounded-lg flex items-center justify-center animate-float shadow-neon">
                <span className="text-background font-bold">JS</span>
              </div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-neon-purple rounded-lg flex items-center justify-center animate-float shadow-purple" style={{ animationDelay: '1s' }}>
                <span className="text-background font-bold">TS</span>
              </div>
              <div className="absolute top-4 -right-8 w-10 h-10 bg-neon-pink rounded-lg flex items-center justify-center animate-float shadow-pink" style={{ animationDelay: '2s' }}>
                <span className="text-background text-sm font-bold">⚛</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;