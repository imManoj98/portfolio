# Manoj Salunke — UX Portfolio (GitHub Pages)

Static recreation of **Manoj's Portfolio Site** migrated from Webflow to GitHub Pages.

## Included Files
- `index.html` — Complete single-page application structure (`Landing`, `Works`, `About`, and `Contact` screens) with responsive images and semantic markup.
- `styles.css` — Extracted Webflow design tokens (`--alice-blue`, `--light-red`, `--dim-grey`, `--black`), custom `@font-face` declarations (`Luxia display`, `Luxia`, `Coves`, and `Comfortaa`), and responsive breakpoints (`991px`, `767px`, `479px`).
- `script.js` — Smooth screen switching (`Landing` ↔ `Works` / `About` / `Contact`), URL hash routing (`#works`, `#about`, `#contact`), and contact form mailto handler.
- `.nojekyll` — Ensures GitHub Pages serves all static files directly without Jekyll processing.

## Quick Deployment to GitHub Pages
1. Create a new repository on GitHub named `<your-username>.github.io` (or any project repository name).
2. Upload `index.html`, `styles.css`, `script.js`, and `.nojekyll` to the root of the repository (or push via Git).
3. Go to **Settings → Pages** in your GitHub repository.
4. Under **Build and deployment**, select **Deploy from a branch**, choose `main` (and `/ (root)`), and click **Save**.
5. To connect your custom domain (`manojsalunke.in`), enter it under **Custom domain** in **Settings → Pages** and point your DNS `A` records to GitHub Pages' IPv4 addresses (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`).
