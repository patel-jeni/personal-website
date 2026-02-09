import { motion } from 'framer-motion'
import { Card } from '@/components/Card'
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
    link: '/404',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Cloud-native microservices architecture on Azure.',
    tech: ['Azure', 'Docker', 'Kubernetes', 'Go'],
    link: '/404',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Performance optimization reducing load time by 60%.',
    tech: ['Performance', 'Webpack', 'React', 'Lighthouse'],
    link: '/404',
  },
]

export default function Projects() {
  return (
    <main id="main-content" className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Chapter className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {copy.projects.heading}
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A selection of projects I've worked on, showcasing my skills in
            full-stack, AI and ML engineering.
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

        {/* Skills Section */}
        <Chapter>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
              Skills & Expertise
            </h2>
            <Card>
              <div className="flex flex-wrap gap-3 justify-center">
                {copy.about.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gradient-to-br from-accent-purple/20 to-accent-magenta/20 border border-accent-purple/30 rounded-lg text-white font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </Card>
          </div>
        </Chapter>
      </div>
    </main>
  )
}
