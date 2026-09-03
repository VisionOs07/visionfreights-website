# Vision Freight Logistics V8 deployment

This is a static Cloudflare Pages-ready replacement. It preserves the approved logo, forms, CNAME, and GitHub deployment model. VisionOS remains separate; future API endpoints stay configured through `window.VisionFreightConfig`.

## Copy and review

```bash
cd /Users/cs25/Desktop/Vision-Freight-Logistics-V6.0-Enterprise-Final-Layout-Fix
git status --short
git fetch origin
git pull --rebase origin main
rsync -av --exclude='.DS_Store' --exclude='DEPLOY-V5.md' --exclude='DEPLOY-V6.md' --exclude='DEPLOY-V7.md' "/Users/cs25/Documents/Codex/2026-08-26/referenced-chatgpt-conversation-this-is-an/outputs/Vision-Freight-Logistics-V8/" ./
git status --short
git diff --stat
python3 -m http.server 4173
```

Open `http://localhost:4173`, test every transport tab, quote, tracking, desktop, and mobile. Stop the server with `Control-C`.

## Commit only after approval

```bash
git add index.html about.html services.html quote.html tracking.html contact.html VERSION.txt DEPLOY-V8.md assets/css/v8-dynamic.css assets/js/v8-dynamic.js assets/images/scenes assets/images/vehicles assets/video/vision-freight-hero.mp4
git commit -m "Launch V8 photoreal freight motion experience"
git push origin main
```

Cloudflare Pages should deploy through the existing GitHub integration. Never force-push. If rebase reports conflicts, stop and resolve them before committing.
