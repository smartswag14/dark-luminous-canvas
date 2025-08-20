import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Clock, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const ArticlesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const articles = [
    {
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn how to structure large-scale React applications using TypeScript, advanced patterns, and best practices for maintainable code.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "TypeScript", "Architecture"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=300&fit=crop",
      link: "#"
    },
    {
      title: "The Future of Web Development: AI and Machine Learning",
      excerpt: "Exploring how artificial intelligence is revolutionizing web development and what developers need to know about this emerging trend.",
      date: "2024-01-08",
      readTime: "6 min read",
      tags: ["AI", "Machine Learning", "Future"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop",
      link: "#"
    },
    {
      title: "Optimizing React Performance: Advanced Techniques",
      excerpt: "Deep dive into React performance optimization techniques including memoization, code splitting, and virtual DOM optimization.",
      date: "2024-01-01",
      readTime: "10 min read",
      tags: ["React", "Performance", "Optimization"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
      link: "#"
    },
    {
      title: "Modern CSS: Grid, Flexbox, and Beyond",
      excerpt: "Master modern CSS layout techniques and learn how to create responsive, beautiful interfaces with the latest CSS features.",
      date: "2023-12-20",
      readTime: "7 min read",
      tags: ["CSS", "Layout", "Responsive"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop",
      link: "#"
    }
  ];

  return (
    <section id="articles" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing knowledge and insights about web development, technology trends, 
            and best practices through detailed technical articles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="card-glow overflow-hidden h-full transition-all duration-300 group-hover:border-primary/50">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(article.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary">
                    <span>Read Article</span>
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </Card>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="btn-glow">
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesSection;