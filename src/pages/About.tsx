import { motion } from 'framer-motion'
import { Card } from '@/components/Card'
import { GradientBackground } from '@/components/GradientBackground'
import { StoryTimeline } from '@/features/story/StoryTimeline'
import copy from '@/content/copy.json'

export default function About() {
  return (
    <main id="main-content" className="relative">
      <GradientBackground />

      {/* Story Timeline Section */}
      <section>
        <StoryTimeline />
      </section>

      {/* Skills Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
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
      </section>
    </main>
  )
}
