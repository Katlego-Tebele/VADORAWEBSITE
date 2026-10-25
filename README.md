# VADORA Supply Solutions Website

Professional business website for **VADORA Supply Solutions (Pty) Ltd** - Your trusted partner for cleaning products, hygiene essentials, refuse bags, paper bags, office consumables and wholesale distribution.

## 🌟 Features

- **Modern Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Professional Branding** - Black, emerald green, and gold color scheme
- **WhatsApp Integration** - Direct customer enquiries via WhatsApp
- **Product Showcase** - Six main product categories with detailed cards
- **Contact Form** - Client-side form that opens WhatsApp with pre-filled message
- **Accessible** - Keyboard navigation, focus states, and screen reader support
- **Performance Optimized** - Lazy loading images, smooth animations

## 📁 Project Structure

```
VADORA/
├── index.html          # Main HTML file
├── style.css           # All styling and responsive design
├── script.js           # JavaScript functionality
├── README.md           # This file
└── assets/
    └── images/         # Image assets folder
        └── README.md   # Image requirements guide
```

## 🚀 Getting Started

### 1. Add Your Images

Place your company images in the `assets/images/` folder. Required images:

- `logo.png` or `logo.jpg` - Your company logo
- `hygiene-products.jpg` - Hygiene products photo
- `cleaning-supplies.jpg` - Cleaning supplies photo
- `office-supplies.jpg` - Office supplies photo
- `refuse-bags.jpg` - Refuse bags photo
- `paper-bags.jpg` - Paper bags photo
- `wholesale.jpg` - Wholesale/distribution photo

See `assets/images/README.md` for detailed image requirements.

### 2. Update Contact Information

Open `index.html` and search for the following placeholder text to update:

#### **Business Address**
Search for: `[INSERT BUSINESS ADDRESS]`
Replace with your physical business address

#### **Business Email**
Search for: `[INSERT BUSINESS EMAIL]`
Replace with your business email address

#### **Business Hours**
Search for: `[INSERT BUSINESS HOURS]`
Replace with your operating hours (e.g., "Monday - Friday: 8:00 AM - 5:00 PM")

#### **TikTok Profile**
Search for: `[INSERT TIKTOK PROFILE URL]`
Replace with your TikTok profile URL (e.g., "https://www.tiktok.com/@vadora")

**Note:** These placeholders appear in two places:
1. Contact section (around line 335-365)
2. Footer section (around line 435-445)

Make sure to update both locations!

### 3. Optional: Create a Favicon

To add a favicon (the small icon in the browser tab):

1. Use your logo to create a favicon (16x16, 32x32, and 48x48 pixels)
2. Save it as `favicon.ico` in the root folder
3. Add this line in the `<head>` section of `index.html`:

```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

Or use a PNG:

```html
<link rel="icon" type="image/png" href="assets/images/favicon.png">
```

## 📱 WhatsApp Integration

All enquiry buttons are configured to open WhatsApp with the number **076 159 5942** (country code: +27).

### WhatsApp Number Format

The WhatsApp links use this format:
```
https://wa.me/27761595942
```

If you need to change the WhatsApp number:

1. Open `index.html`
2. Search for: `27761595942`
3. Replace with your new number in international format (country code + number without leading zero)
4. Do the same in `script.js`

### Pre-filled Messages

Product enquiry buttons include the relevant product category in the WhatsApp message. The contact form automatically includes:
- Customer name
- Company name (if provided)
- Contact number
- Product category
- Enquiry message

## 🎨 Customization

### Colors

The website uses CSS variables for easy color customization. Edit `style.css` at the top:

```css
:root {
    --color-black: #0a0a0a;           /* Main dark background */
    --color-emerald: #10b981;          /* Primary brand color */
    --color-emerald-dark: #059669;     /* Hover states */
    --color-gold: #f59e0b;             /* Accent and CTAs */
    --color-gold-dark: #d97706;        /* Gold hover states */
    --color-white: #ffffff;            /* Text and backgrounds */
}
```

### Typography

The website uses system fonts for optimal performance:

```css
--font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
```

To use a custom font:
1. Add the font import at the top of `style.css`
2. Update the `--font-primary` variable

## 📋 Content Updates

### Adding New Products

To add a new product card, copy the product card structure in `index.html` (lines ~195-250) and update:
- Product image source
- Product title
- Product description
- WhatsApp enquiry message

### Updating Company Information

Edit the About Us section in `index.html` (around line 150-165) to update company description.

### Modifying Navigation

Add or remove navigation items in the `<nav>` section (lines 20-30).

## 🌐 Deployment

### Option 1: Simple Hosting
Upload all files to any web hosting service that supports static websites:
- cPanel
- FTP upload
- Static hosting services

### Option 2: Free Hosting
Deploy to free hosting platforms:
- **GitHub Pages** - Free hosting from GitHub
- **Netlify** - Drag and drop deployment
- **Vercel** - Git integration
- **Cloudflare Pages** - Fast global delivery

### Option 3: Your Own Server
Simply copy all files to your web server's public directory.

## ✅ Testing Checklist

Before going live, test the following:

- [ ] All images display correctly
- [ ] Navigation works on mobile and desktop
- [ ] Mobile menu opens and closes properly
- [ ] All WhatsApp buttons open with correct number
- [ ] Contact form validates required fields
- [ ] Contact form opens WhatsApp with complete message
- [ ] All placeholder contact details have been replaced
- [ ] Website looks good on phone, tablet, and desktop
- [ ] All sections scroll smoothly
- [ ] No horizontal scrolling on mobile
- [ ] All links work correctly

## 📞 Support

For technical support or questions about this website:
- Review this README
- Check `assets/images/README.md` for image requirements
- Ensure all placeholder text has been replaced

## 📄 Browser Support

This website works on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

Copyright © 2026 VADORA Supply Solutions (Pty) Ltd. All rights reserved.

---

**Built with:** HTML5, CSS3, Vanilla JavaScript  
**Tagline:** Reliable Supply. Smarter Solutions.  
**Contact:** WhatsApp 076 159 5942
