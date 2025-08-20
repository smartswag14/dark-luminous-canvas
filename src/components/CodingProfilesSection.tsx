import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Star, Target, Code, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const CodingProfilesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const profiles = [
    {
      platform: "LeetCode",
      username: "alexsmith_dev",
      rating: "2156",
      rank: "Knight",
      solved: "450+",
      color: "from-orange-500 to-yellow-500",
      icon: Code,
      stats: [
        { label: "Problems Solved", value: "456" },
        { label: "Contest Rating", value: "2156" },
        { label: "Global Ranking", value: "15.2K" }
      ],
      link: "https://leetcode.com"
    },
    {
      platform: "CodeForces", 
      username: "alex_codes",
      rating: "1847",
      rank: "Expert",
      solved: "280+",
      color: "from-blue-500 to-purple-500",
      icon: Trophy,
      stats: [
        { label: "Max Rating", value: "1847" },
        { label: "Problems Solved", value: "287" },
        { label: "Contest Participated", value: "45" }
      ],
      link: "https://codeforces.com"
    },
    {
      platform: "HackerRank",
      username: "alexsmith92",
      rating: "Gold",
      rank: "5 Star",
      solved: "320+",
      color: "from-green-500 to-emerald-500",
      icon: Star,
      stats: [
        { label: "Badges Earned", value: "28" },
        { label: "Certifications", value: "12" },
        { label: "Score", value: "98.5%" }
      ],
      link: "https://hackerrank.com"
    },
    {
      platform: "CodeChef",
      username: "alex_chef",
      rating: "1923",
      rank: "4 Star",
      solved: "190+",
      color: "from-purple-500 to-pink-500",
      icon: Target,
      stats: [
        { label: "Current Rating", value: "1923" },
        { label: "Best Rating", value: "1956" },
        { label: "Global Rank", value: "8.7K" }
      ],
      link: "https://codechef.com"
    }
  ];

  return (
    <section id="coding-profiles" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My competitive programming journey across various platforms, 
            showcasing problem-solving skills and algorithmic thinking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.platform}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="card-glow p-6 h-full transition-all duration-300 group-hover:border-primary/50">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${profile.color} rounded-lg group-hover:scale-110 transition-transform`}>
                      <profile.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {profile.platform}
                      </h3>
                      <p className="text-sm text-muted-foreground">@{profile.username}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <Badge variant="secondary" className="text-sm font-medium">
                    {profile.rank}
                  </Badge>
                  <div className="text-sm text-muted-foreground">
                    Rating: <span className="text-foreground font-semibold">{profile.rating}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Solved: <span className="text-foreground font-semibold">{profile.solved}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {profile.stats.map((stat, statIndex) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 + statIndex * 0.1 }}
                      className="flex justify-between items-center py-2 border-b border-border/30 last:border-b-0"
                    >
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                      <span className="font-semibold">{stat.value}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="mt-6"
                >
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:border-primary group-hover:text-primary"
                    asChild
                  >
                    <a href={profile.link} target="_blank" rel="noopener noreferrer">
                      View Profile
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Card className="card-glow p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Competitive Programming Stats</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">1200+</div>
                <div className="text-sm text-muted-foreground">Problems Solved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">150+</div>
                <div className="text-sm text-muted-foreground">Contests</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">45+</div>
                <div className="text-sm text-muted-foreground">Badges</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">3+</div>
                <div className="text-sm text-muted-foreground">Years Active</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;