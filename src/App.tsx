import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { SkipToContent } from './components/SkipToContent'

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'))
const Story = lazy(() => import('./pages/Story'))
const Projects = lazy(() => import('./pages/Projects'))
const AiMl = lazy(() => import('./pages/AiMl'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Loading fallback component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block w-12 h-12 border-4 border-accent-purple/30 border-t-accent-purple rounded-full animate-spin" />
        <p className="mt-4 text-white/60">Loading...</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <SkipToContent />
      <Nav />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/ai-ml" element={<AiMl />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}

export default App
