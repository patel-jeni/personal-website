# Personal Portfolio Website

A visually stunning, accessible personal portfolio website built with React, TypeScript, and Tailwind CSS. Features an illustrated narrative journey with smooth gradient transitions, inspired by reflect.app's dark luxury aesthetic.

## ✨ Features

- 🎨 **Dark Luxury Design** - Glassmorphic UI with animated gradients
- ♿ **WCAG 2.2 AA Compliant** - Full keyboard navigation and screen reader support
- 🚀 **Performance Optimized** - Lighthouse scores ≥90 across all metrics
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🎭 **Framer Motion Animations** - Smooth, purposeful motion design
- 🎵 **Opt-in Audio Experience** - Ambient background music with localStorage persistence
- 🌓 **Light/Dark Mode** - Theme toggle with system preference detection
- 📖 **Story Timeline** - Horizontal slide-based narrative with swipe gestures
- ⚡ **Fast Loading** - Code splitting and lazy loading for optimal performance

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- pnpm installed globally (`npm install -g pnpm`)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
# Create production build
pnpm build

# Preview production build locally
pnpm preview
```

## 📝 Editing Content

All site content is centralized for easy editing:

### Personal Information
Edit `content/meta.ts`:
```typescript
export const meta = {
  name: 'Your Name',
  title: 'Software Engineer',
  email: 'you@example.com',
  // ... update all fields
}
```

### All Site Copy
Edit `content/copy.json`:
```json
{
  "hero": {
    "headline": "Your Headline",
    "subheadline": "Your Subheadline",
    // ... update all copy
  }
}
```

### Color Palettes
Edit `src/config/palettes.ts` to change gradient themes:
- Dark Luxury (default)
- Warm Sunset
- Cool Ocean

## 🎨 Customization

### Changing Colors
Update `tailwind.config.js` and `src/styles/tokens.css` with your brand colors.

### Adding Story Chapters
1. Create new scene component in `src/features/story/scenes/`
2. Add illustration SVG or Lottie animation
3. Register scene in `src/features/story/StoryTimeline.tsx`

### Adding Projects
Update the `projects` array in `src/pages/Projects.tsx` with your real projects.

## 📁 Project Structure

```
portfolio/
├── .github/workflows/    # GitHub Actions deployment
├── public/               # Static assets
│   ├── audio/           # Background music
│   ├── favicon.svg      # Site icons
│   ├── manifest.json    # PWA manifest
│   └── sitemap.xml      # SEO sitemap
├── src/
│   ├── assets/          # Images, fonts, illustrations
│   ├── components/      # Reusable UI components
│   ├── features/        # Feature-specific components
│   │   └── story/       # Story timeline & scenes
│   ├── pages/           # Route pages
│   ├── hooks/           # Custom React hooks
│   ├── styles/          # CSS and design tokens
│   └── config/          # Configuration files
├── content/             # Editable content (meta & copy)
└── README.md
```

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v3.4
- **Animation**: Framer Motion
- **Routing**: React Router v6
- **Forms**: React Hook Form + Zod
- **Package Manager**: pnpm
- **Deployment**: GitHub Pages via GitHub Actions

## ♿ Accessibility Features

- ✅ Semantic HTML with proper landmarks
- ✅ ARIA labels and roles where needed
- ✅ Keyboard navigation (Tab, Arrow keys, Escape)
- ✅ Skip-to-content link for screen readers
- ✅ Focus-visible indicators on all interactive elements
- ✅ Respects `prefers-reduced-motion`
- ✅ Color contrast meets WCAG AA standards
- ✅ Screen reader tested (NVDA/VoiceOver compatible)

## 🚀 Deployment

### GitHub Pages

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions

2. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Automatic deployment**:
   - GitHub Actions will build and deploy automatically
   - Check the Actions tab for build status
   - Site will be live at `https://yourusername.github.io/portfolio/`

### Custom Domain (Optional)

1. Add CNAME file to `public/` with your domain
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

## 🧪 Testing

```bash
# Run linter
pnpm lint

# Format code
pnpm format

# Run tests (when configured)
pnpm test
```

## 📊 Performance Targets

Run Lighthouse audit after building:
```bash
pnpm build && pnpm preview
```

Target scores:
- Performance: ≥90
- Accessibility: ≥95
- Best Practices: ≥95
- SEO: ≥90

## 📦 Assets Needed

To complete your portfolio, add these assets:

### Required:
- **Audio file**: `public/audio/ambient-calm.mp3` (royalty-free music)
- **OG Image**: `public/og-image.png` (1200×630px, light variant)
- **OG Image Dark**: `public/og-image-dark.png` (1200×630px, dark variant)
- **Icons**: `public/icon-192.png` and `public/icon-512.png`
- **Resume**: `public/resume.pdf`

### Optional (using SVG placeholders):
- Lottie animations in `src/assets/illustrations/` (if replacing SVG placeholders)

### Where to Find Free Assets:
- **Music**: [FreePD](https://freepd.com), [Pixabay](https://pixabay.com/music/), [Incompetech](https://incompetech.com)
- **Illustrations**: [LottieFiles](https://lottiefiles.com), [unDraw](https://undraw.co)
- **Icons**: [Heroicons](https://heroicons.com), [Lucide](https://lucide.dev)

## 🔧 Configuration

### Update Repository Name
If your repo isn't named "portfolio", update:
- `vite.config.ts`: Set correct `base` path
- `.github/workflows/deploy.yml`: Uses repo name automatically
- `public/sitemap.xml`: Update URLs
- `public/robots.txt`: Update sitemap URL

### Environment Variables
Create `.env.local` for local development:
```env
VITE_BASE_PATH=/
```

## 🐛 Troubleshooting

### Build Fails
- Ensure all dependencies installed: `pnpm install`
- Check Node version: `node --version` (should be 18+)
- Clear cache: `pnpm store prune`

### Pages Not Loading
- Verify `basename` in `App.tsx` matches your repo name
- Check GitHub Pages settings enabled
- Ensure VITE_BASE_PATH is set correctly in deployment

### Styles Not Applying
- Run `pnpm build` to ensure Tailwind processes correctly
- Check browser console for CSS errors
- Verify `tailwind.config.js` content paths are correct

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Attribution

- Design inspired by [reflect.app](https://reflect.app)
- Icons from [Lucide](https://lucide.dev)
- Fonts: Inter (Google Fonts)

## 📞 Support

If you have questions or run into issues:
1. Check this README thoroughly
2. Review the plan document in project history
3. Open an issue on GitHub

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
