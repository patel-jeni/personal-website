import { motion } from 'framer-motion'
import { Card } from '@/components/Card'
import { Chapter } from '@/components/Chapter'
import { Button } from '@/components/Button'
import { meta } from '@/content/meta'
import copy from '@/content/copy.json'

export default function About() {
  return (
    <main id="main-content" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <Chapter className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {copy.about.heading}
          </h1>
          <p className="text-xl text-white/70">{meta.location}</p>
        </Chapter>

        {/* Bio */}
        <Chapter className="mb-16">
          <Card>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-white/80 leading-relaxed">
                {meta.bio}
              </p>
              <p className="text-lg text-white/80 leading-relaxed mt-4">
                My journey from professional tennis to software engineering has
                given me a unique perspective on problem-solving, teamwork, and
                continuous improvement. I bring the same dedication and
                competitive spirit to building exceptional software.
              </p>
            </div>
          </Card>
        </Chapter>

        {/* Skills */}
        <Chapter className="mb-16">
          <h2 className="text-3xl font-display font-bold mb-6">Skills</h2>
          <Card>
            <div className="flex flex-wrap gap-3">
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
        </Chapter>

        {/* Press/Mentions (Placeholder) */}
        <Chapter className="mb-16">
          <h2 className="text-3xl font-display font-bold mb-6">
            Press & Mentions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card hover={false}>
              <h3 className="text-xl font-bold mb-2">
                Tech Blog: Career Transitions
              </h3>
              <p className="text-white/70 mb-4">
                Featured story about transitioning from athletics to tech.
              </p>
              <a
                href="#"
                className="text-accent-purple hover:text-accent-purple/80"
              >
                Read article →
              </a>
            </Card>
            <Card hover={false}>
              <h3 className="text-xl font-bold mb-2">
                Podcast: Engineering Excellence
              </h3>
              <p className="text-white/70 mb-4">
                Discussing performance optimization and scalable systems.
              </p>
              <a
                href="#"
                className="text-accent-purple hover:text-accent-purple/80"
              >
                Listen now →
              </a>
            </Card>
          </div>
        </Chapter>

        {/* Resume CTA */}
        <Chapter className="text-center">
          <Card className="inline-block">
            <div className="py-8 px-12">
              <h2 className="text-2xl font-display font-bold mb-4">
                Want to know more?
              </h2>
              <p className="text-white/70 mb-6">
                Download my resume for a complete overview of my experience and
                qualifications.
              </p>
              <a href={meta.resumeUrl} download>
                <Button variant="primary">Download Resume</Button>
              </a>
            </div>
          </Card>
        </Chapter>
      </div>
    </main>
  )
}
