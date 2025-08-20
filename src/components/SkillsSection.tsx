import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, 
  Database, 
  Palette, 
  Smartphone, 
  Server, 
  Globe,
  Brain,
  Shield
} from 'lucide-react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "Tailwind CSS", level: 92 }
      ]
    },
    {
      icon: Server,
      title: "Backend",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 82 },
        { name: "Express.js", level: 90 },
        { name: "GraphQL", level: 78 }
      ]
    },
    {
      icon: Database,
      title: "Database",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 88 },
        { name: "Redis", level: 75 },
        { name: "Prisma", level: 82 }
      ]
    },
    {
      icon: Globe,
      title: "DevOps",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "CI/CD", level: 78 },
        { name: "Kubernetes", level: 70 }
      ]
    }
  ];

  const tools = [
    "React", "Node.js", "TypeScript", "Python", "PostgreSQL", 
    "MongoDB", "Docker", "AWS", "Next.js", "Vue.js", "Express",
    "GraphQL", "Tailwind", "Framer Motion", "Three.js"
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and the tools I use 
            to bring ideas to life.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="group"
            >
              <Card className="card-glow p-6 h-full transition-all duration-300 group-hover:border-primary/50">
                <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.color} rounded-lg mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-center mb-6 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 + skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={isInView ? skill.level : 0} 
                        className="h-2"
                      />
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tools Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-secondary/50 rounded-full text-sm font-medium border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;