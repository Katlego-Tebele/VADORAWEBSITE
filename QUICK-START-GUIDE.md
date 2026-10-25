# 🚀 VADORA Website - Quick Start Guide

## ⚡ 3 Steps to Launch Your Website

### Step 1: Add Your Logo (Optional) 📸

The homepage displays "VADORA" in large text with a placeholder box for your logo.

**To add your logo:**
1. Go to the `assets/images/` folder
2. Add your logo file as `logo.png` (or `.jpg`)
3. Open `index.html`
4. Find the hero section (around line 35)
5. Replace the placeholder box with:
```html
<div class="hero-logo-placeholder">
    <img src="assets/images/logo.png" alt="VADORA Logo" style="max-width: 150px; height: auto;">
</div>
```

**Or keep the placeholder:** The "LOGO" placeholder box looks professional and you can add your actual logo later.

**Additional images needed** (for product sections):
- `hygiene-products.jpg` - Hygiene products photo
- `cleaning-supplies.jpg` - Cleaning supplies photo
- `office-supplies.jpg` - Office supplies photo
- `refuse-bags.jpg` - Refuse bags photo
- `paper-bags.jpg` - Paper bags photo
- `wholesale.jpg` - Wholesale/distribution photo

### Step 2: Update Contact Details ✏️

Open `index.html` and search for these 4 items (they appear twice - once in the Contact section and once in the Footer):

1. **[INSERT BUSINESS ADDRESS]** - Replace with your physical address
2. **[INSERT BUSINESS EMAIL]** - Replace with your email
3. **[INSERT BUSINESS HOURS]** - Replace with your hours (e.g., "Mon-Fri: 8AM-5PM")
4. **[INSERT TIKTOK PROFILE URL]** - Replace with your TikTok URL

💡 **Quick Find Method:**
- Press `Ctrl + F` (Windows) or `Cmd + F` (Mac)
- Search for `[INSERT`
- Replace each occurrence with your actual information

### Step 3: Test & Deploy 🌐

1. **Test Locally:**
   - Open `index.html` in your web browser
   - Test on your phone (WhatsApp links)
   - Check all sections scroll properly

2. **Deploy Online:**
   - Upload all files to your web hosting
   - Or use free hosting: GitHub Pages, Netlify, or Vercel

## ✅ Final Checklist

Before going live:

- [ ] Logo displays in navigation
- [ ] All 7 product images show correctly
- [ ] WhatsApp buttons open with number 076 159 5942
- [ ] No text says "[INSERT...]"
- [ ] Mobile menu works (test on phone)
- [ ] Contact form opens WhatsApp correctly
- [ ] Website looks good on desktop and mobile

## 📱 Testing WhatsApp Integration

Click any "Enquire Now" button - it should:
- Open WhatsApp (or WhatsApp Web)
- Show number: 076 159 5942
- Include a pre-filled message with product category

## 🎨 Need to Change Colors?

Open `style.css` and edit lines 8-13:

```css
--color-black: #0a0a0a;        /* Dark backgrounds */
--color-emerald: #10b981;      /* Primary green */
--color-gold: #f59e0b;         /* Accent gold */
```

## 🆘 Troubleshooting

**Images not showing?**
- Check filenames match exactly (case-sensitive)
- Ensure images are in `assets/images/` folder
- Check image format (JPG or PNG)

**WhatsApp not opening?**
- Verify number format: 27761595942
- Test on mobile device
- Check if WhatsApp is installed

**Mobile menu not working?**
- Clear browser cache
- Check if JavaScript is enabled
- Test in different browser

## 📞 Contact Information

**WhatsApp:** 076 159 5942  
**Business:** VADORA Supply Solutions (Pty) Ltd

---

**That's it!** Your professional website is ready to go live. 🎉
