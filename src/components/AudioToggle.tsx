import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Icons } from './Icon'
import { useLocalStorage } from '@/hooks/useLocalStorage'

export function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioPreference] = useLocalStorage<'enabled' | 'disabled'>(
    'audio-preference',
    'disabled'
  )
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Only auto-play if user has previously enabled audio
    if (audioPreference === 'enabled' && audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay blocked by browser
          console.log('Autoplay blocked')
        })
    }
  }, [audioPreference])

  const toggleAudio = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
      localStorage.setItem('audio-preference', 'disabled')
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true)
          localStorage.setItem('audio-preference', 'enabled')
        })
        .catch((error) => {
          console.error('Audio play failed:', error)
        })
    }
  }

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/audio/ambient-calm.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <motion.button
        onClick={toggleAudio}
        className="relative w-10 h-10 rounded-lg flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isPlaying ? 'Mute audio' : 'Play audio'}
        aria-pressed={isPlaying}
      >
        {isPlaying ? <Icons.VolumeUp /> : <Icons.VolumeOff />}
      </motion.button>
    </>
  )
}
