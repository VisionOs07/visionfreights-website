# Deploy V5.0

Your Cloudflare Pages project is already connected to GitHub. Do not upload V4.0 first.

1. Extract `Vision-Freight-Logistics-V5.0.zip`.
2. Copy all V5.0 files into the existing local Git repository that currently tracks `VisionOs07/visionfreights-website`.
3. In Terminal, enter that repository folder.
4. Run:

```bash
git status
git add .
git commit -m "Vision Freight Logistics Website V5.0 - Production Release"
git push
```

5. Wait for Cloudflare Pages to complete the automatic deployment.
6. Verify `https://www.visionfreights.com/`, Services, Quote, Tracking, About and Contact on desktop and mobile.

If you are unsure which local folder is the Git repository, run `git status` inside your existing V3.0 folder before copying files.
