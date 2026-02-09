export type Palette = {
  name: string
  base: string
  gradient: string[]
  accents: {
    primary: string
    secondary: string
    tertiary: string
  }
}

export const palettes: Palette[] = [
  {
    name: 'Dark Luxury',
    base: '#030014',
    gradient: ['#ba9cff', '#9cb2ff', '#FC72FF'],
    accents: { primary: '#ba9cff', secondary: '#487BFF', tertiary: '#2CFFCC' },
  },
  {
    name: 'Warm Sunset',
    base: '#0f0a1e',
    gradient: ['#ff9a76', '#ffc947', '#ff5e62'],
    accents: { primary: '#ff9a76', secondary: '#ffc947', tertiary: '#ff5e62' },
  },
  {
    name: 'Cool Ocean',
    base: '#0a1628',
    gradient: ['#4facfe', '#00f2fe', '#43e97b'],
    accents: { primary: '#4facfe', secondary: '#00f2fe', tertiary: '#43e97b' },
  },
]

export type HeroVariant = 'centered' | 'split-screen'

export const heroVariants: Record<
  HeroVariant,
  { layout: string; maxWidth: string }
> = {
  centered: {
    layout: 'flex flex-col items-center text-center',
    maxWidth: 'max-w-3xl',
  },
  'split-screen': {
    layout: 'grid lg:grid-cols-2 gap-12 items-center',
    maxWidth: 'max-w-7xl',
  },
}

export const DEFAULT_PALETTE = palettes[0]
export const DEFAULT_HERO_VARIANT: HeroVariant = 'centered'
