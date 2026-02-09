import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { Chapter } from '@/components/Chapter'
import copy from '@/content/copy.json'

const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

type EmailFormData = z.infer<typeof emailSchema>

export default function AiMl() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  })

  const onSubmit = async (data: EmailFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Email submitted:', data.email)
    setSubmitted(true)
  }

  return (
    <main id="main-content" className="py-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Chapter className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            {/* Illustration */}
            <div className="w-64 h-64 mx-auto mb-8">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full"
                aria-label="AI and ML illustration"
              >
                <defs>
                  <linearGradient
                    id="aiGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="var(--gradient-from)" />
                    <stop offset="50%" stopColor="var(--gradient-via)" />
                    <stop offset="100%" stopColor="var(--gradient-to)" />
                  </linearGradient>
                </defs>
                {/* Neural network nodes */}
                {[
                  { x: 50, y: 60 },
                  { x: 50, y: 100 },
                  { x: 50, y: 140 },
                  { x: 100, y: 40 },
                  { x: 100, y: 80 },
                  { x: 100, y: 120 },
                  { x: 100, y: 160 },
                  { x: 150, y: 60 },
                  { x: 150, y: 100 },
                  { x: 150, y: 140 },
                ].map((node, i) => (
                  <circle
                    key={i}
                    cx={node.x}
                    cy={node.y}
                    r="8"
                    fill="url(#aiGradient)"
                    opacity="0.8"
                  />
                ))}
                {/* Connections */}
                {[
                  [50, 60, 100, 40],
                  [50, 60, 100, 80],
                  [50, 100, 100, 80],
                  [50, 100, 100, 120],
                  [50, 140, 100, 120],
                  [50, 140, 100, 160],
                  [100, 40, 150, 60],
                  [100, 80, 150, 60],
                  [100, 80, 150, 100],
                  [100, 120, 150, 100],
                  [100, 120, 150, 140],
                  [100, 160, 150, 140],
                ].map((line, i) => (
                  <line
                    key={i}
                    x1={line[0]}
                    y1={line[1]}
                    x2={line[2]}
                    y2={line[3]}
                    stroke="var(--gradient-via)"
                    strokeWidth="2"
                    opacity="0.3"
                  />
                ))}
              </svg>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              {copy.aiMl.heading}
            </h1>
            <p className="text-xl text-white/70">{copy.aiMl.description}</p>
          </div>

          <Card className="max-w-md mx-auto">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-accent-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-accent-purple"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-2">
                  {copy.aiMl.successMessage}
                </h2>
                <p className="text-white/70">
                  We'll notify you when the AI/ML projects section launches.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    {copy.aiMl.formLabel}
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    placeholder={copy.aiMl.formPlaceholder}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-purple focus:border-transparent transition-all"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="mt-2 text-sm text-red-400"
                      role="alert"
                    >
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  loading={isSubmitting}
                  disabled={isSubmitting}
                >
                  {copy.aiMl.formSubmit}
                </Button>
              </form>
            )}
          </Card>
        </Chapter>
      </div>
    </main>
  )
}
