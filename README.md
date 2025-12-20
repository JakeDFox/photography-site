# BF Photography Site

A Jekyll-based photography portfolio website with Bootstrap, jQuery, and Slick Slider integration.

## Features

- **Jekyll Static Site Generator** - Fast, secure, and easy to deploy
- **Bootstrap 5** - Responsive, mobile-first design framework
- **jQuery 3.7** - JavaScript library for enhanced interactivity
- **Slick Slider** - Beautiful image carousel/slider functionality
- **Custom Photography Theme** - Designed specifically for photography portfolios
- **Responsive Design** - Works perfectly on all devices

## Project Structure

```
photography-site/
├── _config.yml          # Jekyll configuration
├── _layouts/
│   └── default.html     # Base layout template
├── _includes/
│   ├── header.html      # Site header/navigation
│   └── footer.html      # Site footer
├── _sass/
│   └── main.scss        # SCSS styles
├── assets/
│   ├── css/
│   │   └── main.css     # Compiled CSS
│   └── js/
│       └── main.js      # Custom JavaScript
├── index.html           # Homepage
├── gallery.md           # Gallery page
├── about.md             # About page
├── contact.md           # Contact page
└── .gitignore           # Git ignore file
```

## GitHub Pages Deployment

This site is designed to work with GitHub Pages, which automatically builds Jekyll sites.

### Quick Setup

1. Push this repository to GitHub
2. Go to your repository Settings → Pages
3. Select your source branch (usually `main` or `master`)
4. Your site will be live at `https://yourusername.github.io/repository-name/`

### Local Preview (Optional)

If you want to preview locally, you can use GitHub Pages locally with Docker or use a simple HTTP server after GitHub builds it. However, GitHub Pages will handle all the Jekyll building automatically.

## Customization

### Adding Your Photos

Replace the placeholder images in:
- `index.html` - Homepage gallery
- `gallery.md` - Full gallery page

Simply replace the placeholder URLs with paths to your actual images in the `assets/images/` directory.

### Styling

Edit `_sass/main.scss` to customize colors, fonts, and layout. The SCSS will automatically compile to CSS.

### JavaScript

Customize the Slick Slider settings in `assets/js/main.js` to adjust:
- Number of slides shown
- Autoplay speed
- Responsive breakpoints
- Animation effects

## Libraries Included

- **Bootstrap 5.3.0** - CDN link in layout
- **jQuery 3.7.0** - CDN link in layout
- **Slick Carousel 1.8.1** - CDN links in layout

## Deployment

This site is optimized for **GitHub Pages** deployment. Simply push your code to GitHub and enable GitHub Pages in your repository settings. GitHub will automatically build and serve your Jekyll site.

No build step required - GitHub Pages handles everything automatically!

## License

All rights reserved - BF Photography