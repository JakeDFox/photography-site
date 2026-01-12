# Redirect Guide for Jekyll/GitHub Pages

## Method 1: Jekyll Redirect From Plugin (Recommended)

The `jekyll-redirect-from` plugin is now enabled in `_config.yml`. This is the best method for SEO and user experience.

### How to Use:

#### Option A: Redirect from multiple old URLs to one new page
Create or edit any page and add this front matter:

```yaml
---
layout: default
title: New Page
redirect_from:
  - /old-url-1/
  - /old-url-2/
  - /old-page.html
---
```

#### Option B: Redirect one page to another
Add this to the source page:

```yaml
---
layout: default
title: Old Page
redirect_to: /new-page/
---
```

### Example: Creating a redirect page

If you want to redirect `/old-gallery/` to `/gallery/animals.html`, create a file like this:

**File: `old-gallery.html`**
```yaml
---
layout: null
redirect_to: /gallery/animals.html
---
```

Or if you want to redirect multiple old URLs to a new one, add to the target page:

**File: `gallery/animals.html`** (add to existing front matter)
```yaml
---
layout: default
title: Animals Gallery
redirect_from:
  - /old-animals/
  - /pets/
---
```

---

## Method 2: HTML Meta Refresh Redirect

Create a simple HTML file that redirects using meta tags. This works but is less SEO-friendly.

**Example: `old-page.html`**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=/new-page/">
    <link rel="canonical" href="/new-page/">
    <title>Redirecting...</title>
</head>
<body>
    <p>If you are not redirected automatically, <a href="/new-page/">click here</a>.</p>
</body>
</html>
```

---

## Method 3: JavaScript Redirect

Similar to meta refresh, but uses JavaScript:

**Example: `old-page.html`**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Redirecting...</title>
    <script>
        window.location.href = "/new-page/";
    </script>
</head>
<body>
    <p>If you are not redirected automatically, <a href="/new-page/">click here</a>.</p>
</body>
</html>
```

---

## Method 4: Using Jekyll Layout for Redirects

You can create a redirect layout to reuse:

**File: `_layouts/redirect.html`**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url={{ page.redirect_to }}">
    <link rel="canonical" href="{{ page.redirect_to }}">
    <title>Redirecting...</title>
</head>
<body>
    <p>If you are not redirected automatically, <a href="{{ page.redirect_to }}">click here</a>.</p>
</body>
</html>
```

Then use it in any page:
```yaml
---
layout: redirect
redirect_to: /new-page/
---
```

---

## Which Method Should You Use?

1. **Jekyll Redirect From Plugin** (Method 1) - Best for SEO, automatic, works with GitHub Pages
2. **HTML Meta Refresh** (Method 2) - Simple, works everywhere, but less SEO-friendly
3. **JavaScript Redirect** (Method 3) - Works but can be blocked, not ideal for SEO
4. **Jekyll Layout** (Method 4) - Good middle ground if you want more control

**Recommendation:** Use Method 1 (Jekyll Redirect From Plugin) for most cases.
