import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

const About = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  const careerPath = [
    {
      title: 'Frontend Developer',
      status: 'current',
      description: 'Building responsive and interactive web applications with modern frameworks',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      color: 'primary'
    },
    {
      title: 'DevOps Developer',
      status: 'learning',
      description: 'Mastering cloud infrastructure and deployment automation',
      technologies: ['Azure', 'Docker', 'CI/CD', 'Kubernetes'],
      color: 'accent'
    },
    {
      title: 'Full Stack Developer',
      status: 'future',
      description: 'Combining frontend expertise with backend development skills',
      technologies: ['Node.js', 'MongoDB', 'GraphQL', 'Microservices'],
      color: 'secondary'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.career-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'current':
        return 'border-primary shadow-neon bg-primary/5';
      case 'learning':
        return 'border-accent shadow-pink bg-accent/5';
      case 'future':
        return 'border-secondary shadow-purple bg-secondary/5';
      default:
        return 'border-muted';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'current':
        return { label: 'Currently', icon: '⚡' };
      case 'learning':
        return { label: 'Learning', icon: '🚀' };
      case 'future':
        return { label: 'Future Goal', icon: '🎯' };
      default:
        return { label: '', icon: '' };
    }
  };

  return (
    <section id="about" className="py-20 bg-space-dark relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-5xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate engineering student on a journey to become a versatile developer. 
            Currently mastering frontend technologies while expanding into DevOps and full-stack development.
          </p>
        </div>

        {/* Career Journey */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            My Developer Journey
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {careerPath.map((career, index) => {
              const statusInfo = getStatusLabel(career.status);
              const isVisible = visibleCards.includes(index);
              
              return (
                <Card
                  key={index}
                  className={`career-card p-6 border-2 transition-all duration-500 hover:scale-105 hover:shadow-elevation ${
                    getStatusStyles(career.status)
                  } ${isVisible ? 'animate-slide-in-up opacity-100' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                      {statusInfo.icon}
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      career.status === 'current' ? 'bg-primary/20 text-primary' :
                      career.status === 'learning' ? 'bg-accent/20 text-accent' :
                      'bg-secondary/20 text-secondary'
                    }`}>
                      {statusInfo.label}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-center mb-4 text-foreground">
                    {career.title}
                  </h4>
                  
                  <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                    {career.description}
                  </p>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {career.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-muted/50 text-foreground rounded-md border border-border/50 hover:border-primary/50 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Personal Information */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="p-8 bg-gradient-to-br from-card/50 to-muted/50 border border-border/50 hover:shadow-elevation transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-primary">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full animate-glow-pulse"></div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-medium">+91-988-9017-836</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-accent rounded-full animate-glow-pulse"></div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">shambhavi3jul@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-glow-pulse"></div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/shambhavi-852940297" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-secondary-glow transition-colors duration-200"
                    >
                      linkedin.com/in/shambhavi-852940297
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-neon-green rounded-full animate-glow-pulse"></div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">Lucknow, Uttar Pradesh</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Academic Performance */}
            <Card className="p-8 bg-gradient-to-br from-card/50 to-muted/50 border border-border/50 hover:shadow-elevation transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-accent">Education</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 animate-glow-pulse"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Computer Engineering</h4>
                    <p className="text-muted-foreground">TIET, Patiala</p>
                    <p className="text-sm text-muted-foreground">July 2023 - June 2027</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-accent rounded-full mt-2 animate-glow-pulse"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">ISC Board (12th)</h4>
                    <p className="text-muted-foreground">CMS Lucknow • 96.25%</p>
                    <p className="text-sm text-muted-foreground">2022 - 2023</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-secondary rounded-full mt-2 animate-glow-pulse"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">ICSE Board (10th)</h4>
                    <p className="text-muted-foreground">CMS Lucknow • 96.80%</p>
                    <p className="text-sm text-muted-foreground">2020 - 2021</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="p-8 bg-gradient-to-br from-card to-muted border border-border/50 hover:shadow-elevation transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-primary">Academic Excellence</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 animate-glow-pulse"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Top 20% Ranking</h4>
                  <p className="text-muted-foreground">Out of 20,000 applicants - AlgoUniversity Technological Fellowship</p>
                  <p className="text-sm text-muted-foreground">Currently 3rd Year</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Mentorships */}
          <Card className="p-8 bg-gradient-to-br from-card to-muted border border-border/50 hover:shadow-elevation transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-accent">Mentorships</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-accent rounded-full mt-2 animate-glow-pulse"></div>
                <div>
                  <h4 className="font-semibold text-foreground">CWB Microsoft Azure DevOps</h4>
                  <p className="text-muted-foreground">Mentee Program</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-secondary rounded-full mt-2 animate-glow-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div>
                  <h4 className="font-semibold text-foreground">codess.cafe</h4>
                  <p className="text-muted-foreground">Development Mentee</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;