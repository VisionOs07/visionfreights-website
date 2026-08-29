# V7 deployment commands

```bash
cd /Users/cs25/Desktop/Vision-Freight-Logistics-V6.0-Enterprise-Final-Layout-Fix
git status --short
cp -R /Users/cs25/Documents/Codex/2026-08-26/referenced-chatgpt-conversation-this-is-an/outputs/Vision-Freight-Logistics-V7/. .
git status --short
git diff --check
git diff --stat
git add index.html quote.html assets/js/main.js assets/js/v7-motion.js assets/css/v7-motion.css assets/images/*.webp README.md DEPLOY-V7.md VERSION.txt
git diff --cached --check
git diff --cached --stat
git commit -m "Upgrade V7 with professional freight photography"
git push origin HEAD
```

The push triggers the existing Cloudflare Pages deployment. Verify Home on desktop and mobile, all five mode tabs, `tracking.html?reference=VFL-DEMO`, the quote wizard, contact links, and the approved logo.

Do not commit until the current uncommitted `assets/css/enterprise-final.css` change in the existing repository has been reviewed. The targeted `git add` intentionally excludes it.
