import { useState } from 'react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      color: 'primary',
      skills: [
        { name: 'React', level: 90, description: 'Building dynamic user interfaces' },
        { name: 'TypeScript', level: 85, description: 'Type-safe JavaScript development' },
        { name: 'Tailwind CSS', level: 95, description: 'Utility-first CSS framework' },
        { name: 'Next.js', level: 80, description: 'Full-stack React framework' },
        { name: 'HTML5/CSS3', level: 95, description: 'Modern web standards' },
        { name: 'JavaScript ES6+', level: 90, description: 'Modern JavaScript features' }
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: '☁️',
      color: 'accent',
      skills: [
        { name: 'Azure DevOps', level: 70, description: 'CI/CD and project management' },
        { name: 'Docker', level: 65, description: 'Containerization technology' },
        { name: 'Git/GitHub', level: 85, description: 'Version control systems' },
        { name: 'CI/CD Pipelines', level: 60, description: 'Automated deployment' },
        { name: 'Linux/Bash', level: 70, description: 'Command line proficiency' }
      ]
    },
    {
      title: 'Backend & Database',
      icon: '⚙️',
      color: 'secondary',
      skills: [
        { name: 'Node.js', level: 75, description: 'Server-side JavaScript' },
        { name: 'Express.js', level: 70, description: 'Web application framework' },
        { name: 'MongoDB', level: 65, description: 'NoSQL database' },
        { name: 'REST APIs', level: 80, description: 'API design and development' },
        { name: 'GraphQL', level: 50, description: 'Query language for APIs' }
      ]
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      color: 'neon-green',
      skills: [
        { name: 'VS Code', level: 95, description: 'Primary development environment' },
        { name: 'Figma', level: 75, description: 'UI/UX design tool' },
        { name: 'Postman', level: 80, description: 'API testing and development' },
        { name: 'Webpack/Vite', level: 70, description: 'Build tools and bundlers' },
        { name: 'Jest/Testing', level: 60, description: 'Unit and integration testing' }
      ]
    }
  ];

  const getSkillColor = (category: string) => {
    switch (category) {
      case 'primary': return 'bg-primary';
      case 'accent': return 'bg-accent';
      case 'secondary': return 'bg-secondary';
      case 'neon-green': return 'bg-neon-green';
      default: return 'bg-primary';
    }
  };

  const getSkillShadow = (category: string) => {
    switch (category) {
      case 'primary': return 'shadow-neon';
      case 'accent': return 'shadow-pink';
      case 'secondary': return 'shadow-purple';
      case 'neon-green': return 'shadow-[0_0_20px_hsl(var(--neon-green)/0.5)]';
      default: return 'shadow-neon';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-5xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="p-8 bg-gradient-to-br from-card/50 to-muted/50 border border-border/50 backdrop-blur-sm hover:shadow-elevation transition-all duration-500 animate-slide-in-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="text-4xl animate-float" style={{ animationDelay: `${categoryIndex * 0.5}s` }}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group cursor-pointer"
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Skill Bar */}
                    <div className="relative h-3 bg-muted/30 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${getSkillColor(category.color)} rounded-full transition-all duration-1000 ease-out ${
                          hoveredSkill === `${categoryIndex}-${skillIndex}` ? getSkillShadow(category.color) : ''
                        }`}
                        style={{
                          width: `${skill.level}%`,
                          transitionDelay: `${skillIndex * 0.1}s`
                        }}
                      />
                      
                      {/* Glow Effect */}
                      {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                        <div
                          className={`absolute top-0 left-0 h-full ${getSkillColor(category.color)} rounded-full blur-sm opacity-50 transition-all duration-300`}
                          style={{ width: `${skill.level}%` }}
                        />
                      )}
                    </div>

                    {/* Skill Description */}
                    <div className={`mt-2 text-sm text-muted-foreground transition-all duration-300 ${
                      hoveredSkill === `${categoryIndex}-${skillIndex}`
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y-2'
                    }`}>
                      {skill.description}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Interactive 3D Skill Showcase */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 animate-glow-pulse">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-neon bg-clip-text text-transparent">
              Always Learning & Growing
            </h3>
            <p className="text-muted-foreground">
              Constantly expanding my skill set and staying updated with the latest technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;