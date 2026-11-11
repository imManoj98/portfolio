# Manoj Salunke — UX Portfolio (GitHub Pages)

Static recreation of **Manoj's Portfolio Site** migrated from Webflow to GitHub Pages.

## Included Files
- `index.html` — Complete single-page application structure (`Landing`, `Works`, `About`, and `Contact` screens) with responsive images, semantic markup, dotLottie background, and local favicon links.
- `styles.css` — Extracted Webflow design tokens (`--alice-blue`, `--light-red`, `--dim-grey`, `--black`), custom `@font-face` declarations (`Luxia display`, `Luxia`, `Coves`, and `Comfortaa`), and all responsive layout fixes.
- `script.js` — Smooth screen switching, URL hash routing (`#works`, `#about`, `#contact`), and Formspree AJAX submission setup (`mjywbojz`).
- `.nojekyll` — Ensures GitHub Pages serves all static files directly without Jekyll processing.

## Quick Deployment to GitHub Pages
1. Upload the contents of this zip to your GitHub repository `immanoj98/portfolio` (overwrite existing files).
2. Go to **Settings → Pages** in your GitHub repository.
3. Under **Build and deployment**, select **Deploy from a branch**, choose `main` (and `/ (root)`), and click **Save**.
4. To link your custom domain (`manojsalunke.in`), enter it under **Custom domain** on the Pages settings screen, and ensure your DNS `A` records point to GitHub's servers.
5. Upload your custom `favicon.png` and `apple-touch-icon.png` (optional) to the root directory to replace the default Webflow logo on tabs and bookmarks.
