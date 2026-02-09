# Setup Guide

## Initial Setup

Follow these steps to get your portfolio up and running:

### 1. Install Dependencies

```bash
pnpm install
```

This will install all required packages including React, TypeScript, Tailwind CSS, Framer Motion, and more.

### 2. Customize Your Content

#### Update Personal Information
Edit `content/meta.ts`:
```typescript
export const meta = {
  name: 'Your Full Name',           // Replace with your name
  title: 'Software Engineer',       // Your title
  bio: 'Your bio here...',          // Short bio
  email: 'your@email.com',          // Your email
  social: {
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/yourusername',
    twitter: 'https://twitter.com/yourhandle',  // optional
  },
  resumeUrl: '/resume.pdf',
  location: 'Your City, State',
}
```

#### Update Site Copy
Edit `content/copy.json` - update all text content including:
- Hero headline and subheadline
- Story chapter titles and descriptions
- About page skills
- All button labels and navigation text

### 3. Add Required Assets

Create or add these files to the `public/` directory:

#### Images
- `og-image.png` - Social sharing image (1200×630px)
- `og-image-dark.png` - Dark mode variant (1200×630px)
- `icon-192.png` - PWA icon (192×192px)
- `icon-512.png` - PWA icon (512×512px)

#### Documents
- `resume.pdf` - Your resume

#### Audio (Optional)
- `audio/ambient-calm.mp3` - Background music
  - Sources: [FreePD](https://freepd.com), [Pixabay](https://pixabay.com/music/), [Incompetech](https://incompetech.com)

### 4. Update SEO Metadata

Edit `index.html`:
- Update `<title>` tag with your name
- Update meta descriptions
- Update Open Graph tags
- Update JSON-LD structured data with your information
- Update canonical URL

Edit `public/sitemap.xml`:
- Replace `username.github.io/portfolio` with your actual URL

Edit `public/robots.txt`:
- Update sitemap URL

### 5. Configure GitHub Repository

If your repository name is NOT "portfolio":

1. Update `vite.config.ts` - the workflow handles this automatically via VITE_BASE_PATH
2. Update URLs in `public/sitemap.xml`
3. Update URLs in `public/robots.txt`

### 6. Start Development Server

```bash
pnpm dev
```

Visit `http://localhost:5173` to see your portfolio!

## Optional Customizations

### Change Color Palette

Edit `src/config/palettes.ts` to switch between:
- Dark Luxury (default)
- Warm Sunset
- Cool Ocean

Or create your own custom palette.

### Modify Projects

Edit `src/pages/Projects.tsx` - replace placeholder projects with your real projects:
```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description',
    tech: ['React', 'TypeScript', 'etc'],
    link: 'https://project-url.com',
  },
  // Add more projects...
]
```

### Add Real Story Illustrations

Replace SVG placeholders with:
- Custom Lottie animations (add to `src/assets/illustrations/`)
- Or keep the SVG illustrations and customize them

## Deployment

### Local Testing

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Deploy to GitHub Pages

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: GitHub Actions

2. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

3. **Automatic Deployment**:
   - GitHub Actions will automatically build and deploy
   - Check Actions tab for progress
   - Site will be live at `https://yourusername.github.io/repository-name/`

## Troubleshooting

### Husky pre-commit hook fails
On Windows, you may need to run:
```bash
pnpm prepare
```

### Build fails
- Verify Node.js version: `node --version` (needs 18+)
- Clear cache: `pnpm store prune`
- Reinstall: `rm -rf node_modules && pnpm install`

### Styles not working
- Ensure Tailwind is configured: check `tailwind.config.js`
- Rebuild: `pnpm build`

## Next Steps

1. ✅ Install dependencies
2. ✅ Customize content (meta.ts, copy.json)
3. ✅ Add images and assets
4. ✅ Update SEO metadata
5. ✅ Test locally (`pnpm dev`)
6. ✅ Deploy to GitHub Pages
7. ✅ Run Lighthouse audit
8. ✅ Share your portfolio!

## Support

For detailed information, see the main [README.md](./README.md).
