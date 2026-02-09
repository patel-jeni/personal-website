import { GradientBackground } from '@/components/GradientBackground'
import { StoryTimeline } from '@/features/story/StoryTimeline'

export default function About() {
  return (
    <main id="main-content" className="relative">
      <GradientBackground />

      {/* Story Timeline Section */}
      <section>
        <StoryTimeline />
      </section>
    </main>
  )
}
