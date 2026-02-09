import { Icons } from './Icon'
import { meta } from '@/content/meta'
import copy from '@/content/copy.json'

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div>
            <h2 className="text-xl font-display font-bold mb-4">
              {meta.name}
            </h2>
            <p className="text-white/60 text-sm">{meta.title}</p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-white/80">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href={meta.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-accent-purple transition-colors"
                aria-label="GitHub profile"
              >
                <Icons.GitHub />
              </a>
              <a
                href={meta.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-accent-purple transition-colors"
                aria-label="LinkedIn profile"
              >
                <Icons.LinkedIn />
              </a>
              <a
                href={`mailto:${meta.email}`}
                className="text-white/60 hover:text-accent-purple transition-colors"
                aria-label="Email"
              >
                <Icons.Mail />
              </a>
            </div>
          </div>

          {/* Attribution */}
          <div>
            <p className="text-white/60 text-sm">{copy.footer.audioAttribution}</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          <p>
            © {new Date().getFullYear()} {meta.name}. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
