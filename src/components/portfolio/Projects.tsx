import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import profilePhoto from '../../assets/teddy-catcher.png';
import omniboard from '../../assets/omniboard.png';
import geminiclone from '../../assets/gemini-clone.png';
import aiRecipe from '../../assets/ai-recipe.png';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  
   const projects = [
  {
    id: 1,
    title: 'Teddy Catcher Game',
    description: 'Designed an interactive multiplayer arcade game inspired by the claw machine, where players compete to catch as many teddies as possible within a timer. Implemented player management, real-time score tracking, rankings, and engaging UI with playful animations.',
    technologies: ['ReactJS', 'HTML', 'CSS'],
    features: ['Multiplayer Game', 'Real-time Score Tracking', 'Player Rankings', 'Interactive UI'],
    status: 'Completed',
    demoUrl: 'https://teddy-catcher.netlify.app/',
    githubUrl: 'https://github.com/Shambhavi-coder/Teddy-Catcher',
    image: profilePhoto,
    gradient: 'from-primary/20 to-primary/5'
  },
  {
    id: 2,
    title: 'Gemini AI Clone',
    description: 'Developed an AI-powered chatbot using ReactJS and Gemini API, integrating real-time data processing and interactive UI components. Includes a history section to store and display past conversations for improved user experience.',
    technologies: ['ReactJS', 'HTML', 'CSS', 'JavaScript'],
    features: ['AI Chatbot', 'Real-time Data Processing', 'Conversation History', 'Interactive UI'],
    status: 'In Progress',
    demoUrl: 'https://shambhavisgemini.netlify.app/',
    githubUrl: 'https://github.com/Shambhavi-coder/Gemini-Clone',
    image: geminiclone,
    gradient: 'from-accent/20 to-accent/5'
  },
  {
    id: 3,
    title: 'Omniboard - Admin Dashboard',
    description: 'Engineered a ReactJS-based admin dashboard with real-time analytics using Nivo.rocks, enhancing data visualization and decision-making. Integrated interactive graphs and charts for real-time analytics.',
    technologies: ['ReactJS', 'Nivo.rocks', 'Material UI', 'CSS', 'HTML'],
    features: ['Real-time Analytics', 'Interactive Graphs', 'Data Visualization', 'Admin Dashboard'],
    status: 'Completed',
    demoUrl: 'https://omniboard.netlify.app/',
    githubUrl: 'https://github.com/Shambhavi-coder/OmniBoard',
    image: omniboard,
    gradient: 'from-secondary/20 to-secondary/5'
  },
  {
    id: 4,
    title: 'AI Recipe Generator',
    description: 'Built a content-based recipe recommendation app where users input ingredients, and the system suggests the most relevant recipes using TF-IDF vectorization and cosine similarity. Deployed using Streamlit for an interactive user interface.',
    technologies: ['Python', 'TF-IDF', 'Streamlit', 'NLP'],
    features: ['Recipe Recommendations', 'Content-based Filtering', 'Interactive UI', 'Deployed with Streamlit'],
    status: 'Completed',
    demoUrl: 'https://prezi.com/view/bp3p0EMMlrlMetCzGdwV/',
    githubUrl: 'https://github.com/Shambhavi-coder/AI-Recipe-Generator-',
    image:aiRecipe , 
    gradient: 'from-neon-green/20 to-neon-green/5'
  }
];


  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-neon-green/20 text-neon-green border-neon-green/30';
      case 'In Progress':
        return 'bg-primary/20 text-primary border-primary/30';
      case 'Planning':
        return 'bg-accent/20 text-accent border-accent/30';
      default:
        return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  return (
    <section id="projects" className="py-20 bg-space-darker relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-5xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and projects that demonstrate my skills in frontend development, 
            full-stack applications, and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group relative overflow-hidden bg-gradient-to-br from-card/50 to-muted/30 border border-border/50 backdrop-blur-sm hover:shadow-elevation transition-all duration-500 animate-slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} z-10`}></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay on Hover */}
                <div className={`absolute inset-0 bg-black/60 z-20 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      className="bg-primary/90 hover:bg-primary text-background shadow-neon"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary/50 text-primary hover:bg-primary/10"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      View Code
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className={`text-xs px-2 py-1 rounded-full border ${getStatusStyles(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-muted/50 text-foreground rounded border border-border/50 hover:border-primary/50 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 3D Hover Effect */}
              <div className={`absolute inset-0 border-2 border-transparent transition-all duration-300 ${
                hoveredProject === project.id ? 'border-primary shadow-neon' : ''
              }`}></div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="inline-block p-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-neon bg-clip-text text-transparent">
              Want to see more?
            </h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub profile for more projects and contributions
            </p>
            <Button className="bg-gradient-neon text-background shadow-neon hover:shadow-purple transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://github.com/Shambhavi-coder?tab=repositories', '_blank')}>
              View GitHub Profile
              
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;