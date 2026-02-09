import { Icons } from './Icon'
import { meta } from '@/content/meta'
import copy from '@/content/copy.json'

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Centered Content */}
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Branding */}
          <div>
            <h2 className="text-2xl font-display font-bold mb-2">
              {meta.name}
            </h2>
            <p className="text-white/60">{meta.title}</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href={meta.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-accent-purple transition-colors hover:scale-110 transform duration-200"
              aria-label="GitHub profile"
            >
              <Icons.GitHub />
            </a>
            <a
              href={meta.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-accent-purple transition-colors hover:scale-110 transform duration-200"
              aria-label="LinkedIn profile"
            >
              <Icons.LinkedIn />
            </a>
            <a
              href={`mailto:${meta.email}`}
              className="text-white/60 hover:text-accent-purple transition-colors hover:scale-110 transform duration-200"
              aria-label="Email"
            >
              <Icons.Mail />
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-6 text-white/40 text-sm">
            <p>
              © {new Date().getFullYear()} {meta.name}. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
