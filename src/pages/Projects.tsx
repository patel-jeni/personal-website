import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { Chapter } from '@/components/Chapter'
import { Icons } from '@/components/Icon'
import copy from '@/content/copy.json'

// Placeholder project data - replace with real projects
const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A scalable web application built with React and TypeScript.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    link: '#',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Cloud-native microservices architecture on Azure.',
    tech: ['Azure', 'Docker', 'Kubernetes', 'Go'],
    link: '#',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Performance optimization reducing load time by 60%.',
    tech: ['Performance', 'Webpack', 'React', 'Lighthouse'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <main id="main-content" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Chapter className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {copy.projects.heading}
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A selection of projects I've worked on, showcasing my skills in
            full-stack development, cloud architecture, and performance
            optimization.
          </p>
        </Chapter>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card as="article" className="h-full flex flex-col">
                <h2 className="text-2xl font-display font-bold mb-3">
                  {project.title}
                </h2>
                <p className="text-white/70 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-accent-purple/20 text-accent-purple rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-accent-purple hover:text-accent-purple/80 transition-colors"
                >
                  View Project <Icons.ExternalLink />
                </a>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* AI/ML CTA */}
        <Chapter>
          <Card className="text-center py-12">
            <h2 className="text-3xl font-display font-bold mb-4">
              AI & Machine Learning Projects
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Exploring the intersection of AI, machine learning, and software
              engineering. Check out my specialized ML projects.
            </p>
            <Link to="/projects/ai-ml">
              <Button variant="primary" size="lg">
                {copy.projects.aiMlCta}
              </Button>
            </Link>
          </Card>
        </Chapter>
      </div>
    </main>
  )
}
