// Build for GitHub Pages: sets the /<repo>/ base path, then adds the SPA fallback.
// GitHub Pages has no redirect rules, so a copy of index.html served as 404.html
// is what lets /projects/<slug> open directly on a phone or a shared link.
import { execSync } from 'node:child_process'
import { copyFileSync, writeFileSync } from 'node:fs'

execSync('npx vite build', {
  stdio: 'inherit',
  env: { ...process.env, DEPLOY_TARGET: 'gh' },
})

copyFileSync('dist/index.html', 'dist/404.html')
writeFileSync('dist/.nojekyll', '') // stop Jekyll from hiding /assets

console.log('\nBuilt for GitHub Pages (404.html + .nojekyll added).')
