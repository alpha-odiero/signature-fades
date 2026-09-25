import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const heroAsset = 'hero backgroung'

function preloadHeroImage(): Plugin {
  return {
    name: 'preload-hero-image',
    apply: 'build',
    enforce: 'post',
    generateBundle(_options, bundle) {
      const html = bundle['index.html']
      if (!html || html.type !== 'asset') return

      let hero: string | undefined
      for (const key of Object.keys(bundle)) {
        const chunk = bundle[key]
        if (chunk.type === 'asset' && chunk.fileName.indexOf(heroAsset) !== -1) {
          hero = '/' + encodeURI(chunk.fileName)
          break
        }
      }
      if (!hero) return

      const tag = `<link rel="preload" as="image" href="${hero}" fetchpriority="high">`
      html.source = html.source.toString().replace('</head>', `  ${tag}\n  </head>`)
    },
  }
}

export default defineConfig({
  plugins: [react(), preloadHeroImage()],
})
