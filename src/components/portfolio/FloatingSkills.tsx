import { useState, useEffect } from 'react';

const FloatingSkills = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const skills = [
    { name: 'React', icon: '⚛️', color: 'primary', size: 'w-16 h-16' },
    { name: 'TypeScript', icon: 'TS', color: 'accent', size: 'w-14 h-14' },
    { name: 'JavaScript', icon: 'JS', color: 'secondary', size: 'w-12 h-12' },
    { name: 'Python', icon: '🐍', color: 'neon-green', size: 'w-10 h-10' },
    { name: 'Node.js', icon: '📗', color: 'primary', size: 'w-12 h-12' },
    { name: 'Azure', icon: '☁️', color: 'accent', size: 'w-14 h-14' },
    { name: 'Docker', icon: '🐳', color: 'secondary', size: 'w-10 h-10' },
    { name: 'Git', icon: '🔧', color: 'neon-green', size: 'w-8 h-8' },
    { name: 'HTML', icon: '🌐', color: 'primary', size: 'w-10 h-10' },
    { name: 'CSS', icon: '🎨', color: 'accent', size: 'w-12 h-12' },
    { name: 'MongoDB', icon: '🍃', color: 'secondary', size: 'w-8 h-8' },
    { name: 'AI/ML', icon: '🤖', color: 'neon-green', size: 'w-14 h-14' },
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

  const getSkillColor = (color: string) => {
    switch (color) {
      case 'primary': return 'bg-primary';
      case 'accent': return 'bg-accent';
      case 'secondary': return 'bg-secondary';
      case 'neon-green': return 'bg-neon-green';
      default: return 'bg-primary';
    }
  };

  const getSkillShadow = (color: string) => {
    switch (color) {
      case 'primary': return 'shadow-neon';
      case 'accent': return 'shadow-pink';
      case 'secondary': return 'shadow-purple';
      case 'neon-green': return 'shadow-[0_0_20px_hsl(var(--neon-green)/0.5)]';
      default: return 'shadow-neon';
    }
  };

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-4">
            Skills in Motion
          </h2>
          <p className="text-muted-foreground">
            Interactive skill showcase with floating tech icons
          </p>
        </div>

        {/* Floating Skills Container */}
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm overflow-hidden shadow-elevation">
          {skills.map((skill, index) => {
            const randomDelay = index * 0.5;
            const randomDuration = 3 + (index % 3);
            const randomPosition = {
              x: 10 + (index * 7) % 70,
              y: 15 + (index * 11) % 60,
            };

            return (
              <div
                key={skill.name}
                className={`absolute ${skill.size} ${getSkillColor(skill.color)} rounded-full flex items-center justify-center text-background font-bold transition-all duration-500 hover:scale-125 animate-float cursor-pointer group shadow-lg hover:shadow-2xl`}
                style={{
                  left: `${randomPosition.x}%`,
                  top: `${randomPosition.y}%`,
                  animationDelay: `${randomDelay}s`,
                  animationDuration: `${randomDuration}s`,
                  transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
                }}
                title={skill.name}
              >
                <span className="text-xs sm:text-sm">
                  {skill.icon.length <= 2 ? skill.icon : skill.icon}
                </span>
                
                {/* Hover Tooltip */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-background/90 text-foreground px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {skill.name}
                </div>
              </div>
            );
          })}

          {/* Background Particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full opacity-30 animate-glow-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Technology Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/20">
            <div className="text-2xl mb-2">💻</div>
            <p className="text-primary font-semibold">Frontend</p>
            <p className="text-xs text-muted-foreground">React, TypeScript, CSS</p>
          </div>
          <div className="text-center p-4 bg-accent/10 rounded-lg border border-accent/20">
            <div className="text-2xl mb-2">🚀</div>
            <p className="text-accent font-semibold">DevOps</p>
            <p className="text-xs text-muted-foreground">Azure, Docker, CI/CD</p>
          </div>
          <div className="text-center p-4 bg-secondary/10 rounded-lg border border-secondary/20">
            <div className="text-2xl mb-2">⚙️</div>
            <p className="text-secondary font-semibold">Backend</p>
            <p className="text-xs text-muted-foreground">Node.js, Python, MongoDB</p>
          </div>
          <div className="text-center p-4 bg-neon-green/10 rounded-lg border border-neon-green/20">
            <div className="text-2xl mb-2">🤖</div>
            <p className="text-neon-green font-semibold">AI/ML</p>
            <p className="text-xs text-muted-foreground">TF-IDF, NLP, Streamlit</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloatingSkills;