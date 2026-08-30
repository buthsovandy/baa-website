// Publish dist/ to the gh-pages branch — no GitHub Actions, so it needs no
// `workflow` token scope. Run `npm run deploy:gh` after any change.
import { execSync } from 'node:child_process'
import { existsSync, rmSync } from 'node:fs'

const run = (cmd, opts = {}) => execSync(cmd, { stdio: 'inherit', ...opts })
const WORKTREE = '.gh-pages-worktree'

run('node scripts/build-gh.mjs')

// a detached worktree keeps the working tree and main branch untouched
if (existsSync(WORKTREE)) {
  try {
    run(`git worktree remove ${WORKTREE} --force`)
  } catch {
    rmSync(WORKTREE, { recursive: true, force: true })
  }
}

const branchExists = (() => {
  try {
    execSync('git rev-parse --verify gh-pages', { stdio: 'ignore' })
    return true
  } catch {
    return false
  }
})()

run(
  branchExists
    ? `git worktree add ${WORKTREE} gh-pages`
    : `git worktree add --detach ${WORKTREE} && git -C ${WORKTREE} checkout --orphan gh-pages`,
)

// --orphan stages every source file, so force-clear the worktree before copying dist
run(`git -C ${WORKTREE} rm -rfq --ignore-unmatch .`)
run(`node -e "require('fs').cpSync('dist','${WORKTREE}',{recursive:true})"`)
run(`git -C ${WORKTREE} add -A`)
run(
  `git -C ${WORKTREE} -c commit.gpgsign=false commit -q -m "Deploy ${new Date().toISOString()}" --allow-empty`,
)
run(`git -C ${WORKTREE} push -q --force origin gh-pages`)
run(`git worktree remove ${WORKTREE} --force`)

console.log('\nPushed to gh-pages.')
