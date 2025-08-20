import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, Eye, MapPin, Mail, Phone, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experience = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Led development of scalable web applications using React, Node.js, and AWS. Managed a team of 5 developers and architected microservices handling 1M+ daily users."
    },
    {
      title: "Full-Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2020 - 2022",
      description: "Built full-stack applications from scratch using modern technologies. Implemented CI/CD pipelines and improved application performance by 40%."
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      location: "New York, NY",
      period: "2019 - 2020",
      description: "Developed responsive web applications and collaborated with design teams to create exceptional user experiences."
    }
  ];

  const education = [
    {
      degree: "Master of Computer Science",
      school: "Stanford University",
      period: "2017 - 2019",
      gpa: "3.8/4.0"
    },
    {
      degree: "Bachelor of Computer Engineering", 
      school: "UC Berkeley",
      period: "2013 - 2017",
      gpa: "3.7/4.0"
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "Meta React Developer Certificate",
    "MongoDB Certified Developer"
  ];

  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A comprehensive overview of my professional journey, education, and achievements 
            in the field of software development.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="btn-glow">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Eye className="mr-2 h-4 w-4" />
              View Online
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact & Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="card-glow p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>alex@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </Card>

            <Card className="card-glow p-6">
              <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
              <p className="text-sm text-muted-foreground">
                Experienced Full-Stack Developer with 5+ years in building scalable web applications. 
                Passionate about clean code, user experience, and emerging technologies. 
                Proven track record of leading development teams and delivering high-quality solutions.
              </p>
            </Card>

            <Card className="card-glow p-6">
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <Badge variant="secondary" className="w-full justify-start text-xs">
                      {cert}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Right Column - Experience & Education */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="card-glow p-6">
                <h3 className="text-2xl font-semibold mb-6">Professional Experience</h3>
                <div className="space-y-6">
                  {experience.map((job, index) => (
                    <motion.div
                      key={job.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="relative pl-6 border-l-2 border-primary/30 last:border-l-0"
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h4 className="text-lg font-semibold">{job.title}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {job.period}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                        <span className="font-medium text-primary">{job.company}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{job.description}</p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="card-glow p-6">
                <h3 className="text-2xl font-semibold mb-6">Education</h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={edu.degree}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      className="relative pl-6 border-l-2 border-primary/30 last:border-l-0"
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h4 className="text-lg font-semibold">{edu.degree}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-1 text-sm">
                        <span className="font-medium text-primary">{edu.school}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">GPA: {edu.gpa}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;