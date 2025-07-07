import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'shambhavi3jul@gmail.com',
      description: 'Send me an email anytime',
      color: 'primary'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/shambhavi-852940297',
      description: 'Let\'s connect professionally',
      color: 'accent'
    },
    {
      icon: '🐱',
      title: 'GitHub',
      value: 'github.com/Shambhavi-coder',
      description: 'Check out my code',
      color: 'secondary'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 98890 17836',
      description: 'Call for urgent matters',
      color: 'neon-green'
    }
  ];

  const getContactColor = (color: string) => {
    switch (color) {
      case 'primary': return 'text-primary border-primary/30 bg-primary/5';
      case 'accent': return 'text-accent border-accent/30 bg-accent/5';
      case 'secondary': return 'text-secondary border-secondary/30 bg-secondary/5';
      case 'neon-green': return 'text-neon-green border-neon-green/30 bg-neon-green/5';
      default: return 'text-primary border-primary/30 bg-primary/5';
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-30 animate-glow-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-5xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can work together to bring your ideas to life!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Let's Start a Conversation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Choose your preferred way to connect:
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((contact, index) => (
                <Card
                  key={index}
                  className={`p-6 border-2 transition-all duration-500 hover:scale-105 hover:shadow-elevation cursor-pointer group ${
                    getContactColor(contact.color)
                  } animate-slide-in-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className="text-3xl mb-3 animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                      {contact.icon}
                    </div>
                    <h4 className="font-bold text-foreground mb-1 group-hover:text-current transition-colors duration-300">
                      {contact.title}
                    </h4>
                    <p className="text-sm font-medium mb-1">
                      {contact.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {contact.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <Card className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm">
              <h4 className="font-bold text-foreground mb-2">Quick Response Time</h4>
              <p className="text-sm text-muted-foreground">
                I typically respond to emails within 24 hours. For urgent matters, 
                feel free to reach out via phone or LinkedIn.
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-gradient-to-br from-card/50 to-muted/30 border border-border/50 backdrop-blur-sm animate-slide-in-right">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project collaboration, job opportunity, etc."
                  required
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or what you'd like to discuss..."
                  rows={5}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-neon text-background font-semibold py-3 shadow-neon hover:shadow-purple transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:scale-100"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </Card>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            Made with ❤️ using React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;