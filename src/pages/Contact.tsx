import { Card } from '@/components/Card'
import { Chapter } from '@/components/Chapter'
import { Icons } from '@/components/Icon'
import { meta } from '@/content/meta'
import copy from '@/content/copy.json'

export default function Contact() {
  return (
    <main id="main-content" className="py-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        {/* Header */}
        <Chapter className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {copy.contact.heading}
          </h1>
          <p className="text-xl text-white/70">{copy.contact.description}</p>
        </Chapter>

        {/* Email */}
        <Chapter className="mb-8">
          <Card className="text-center py-12">
            <div className="w-16 h-16 bg-accent-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icons.Mail />
            </div>
            <h2 className="text-2xl font-display font-bold mb-4">
              {copy.contact.emailLabel}
            </h2>
            <a
              href={`mailto:${meta.email}`}
              className="text-xl text-accent-purple hover:text-accent-purple/80 transition-colors"
            >
              {meta.email}
            </a>
          </Card>
        </Chapter>

        {/* Social Links */}
        <Chapter>
          <h2 className="text-2xl font-display font-bold mb-6 text-center">
            {copy.contact.socialLabel}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href={meta.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="text-center py-8 hover:scale-105 transition-transform">
                <div className="w-12 h-12 mx-auto mb-4 text-accent-purple">
                  <Icons.GitHub />
                </div>
                <h3 className="text-xl font-bold mb-2">GitHub</h3>
                <p className="text-white/70">View my code and contributions</p>
              </Card>
            </a>

            <a
              href={meta.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="text-center py-8 hover:scale-105 transition-transform">
                <div className="w-12 h-12 mx-auto mb-4 text-accent-purple">
                  <Icons.LinkedIn />
                </div>
                <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
                <p className="text-white/70">Connect professionally</p>
              </Card>
            </a>
          </div>
        </Chapter>
      </div>
    </main>
  )
}
