import { StoryTimeline } from '@/features/story/StoryTimeline'
import { GradientBackground } from '@/components/GradientBackground'

export default function Story() {
  return (
    <main id="main-content" className="relative">
      <GradientBackground />
      <StoryTimeline />
    </main>
  )
}
