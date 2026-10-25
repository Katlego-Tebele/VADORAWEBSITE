# 📝 Placeholder Update Guide

This guide shows you exactly where to find and update each placeholder in `index.html`.

---

## 🔍 How to Find Placeholders

### Method 1: Use Search Function (Recommended)
1. Open `index.html` in a text editor (Notepad, VS Code, Sublime, etc.)
2. Press `Ctrl + F` (Windows) or `Cmd + F` (Mac)
3. Type: `[INSERT`
4. Press Enter to find each occurrence
5. Replace with your actual information
6. Press "Find Next" to move to the next one

### Method 2: Manual Search
Scroll through `index.html` and look for text in **gold color** (if your editor supports syntax highlighting) or text between square brackets `[...]`.

---

## 📍 All Placeholder Locations

### Placeholder 1: Business Address
**Search for:** `[INSERT BUSINESS ADDRESS]`  
**Found at:** 2 locations

#### Location 1A: Contact Section (approximately line 335)
```html
<div class="contact-item">
    <div class="contact-icon">
        <!-- Map icon -->
    </div>
    <div>
        <strong>Address:</strong>
        <p class="placeholder-text">[INSERT BUSINESS ADDRESS]</p>
    </div>
</div>
```

**Replace with example:**
```html
<p class="placeholder-text">123 Industrial Road, Johannesburg, 2001, South Africa</p>
```

**After update, change to:**
```html
<p>123 Industrial Road, Johannesburg, 2001, South Africa</p>
```
(Remove `class="placeholder-text"`)

#### Location 1B: Footer (approximately line 435)
```html
<li>
    <strong>Address:</strong>
    <span class="placeholder-text">[INSERT ADDRESS]</span>
</li>
```

**Replace with example:**
```html
<span>123 Industrial Road, Johannesburg, 2001</span>
```
(Remove `class="placeholder-text"`)

---

### Placeholder 2: Business Email
**Search for:** `[INSERT BUSINESS EMAIL]`  
**Found at:** 2 locations

#### Location 2A: Contact Section (approximately line 350)
```html
<div class="contact-item">
    <div class="contact-icon">
        <!-- Email icon -->
    </div>
    <div>
        <strong>Email:</strong>
        <p class="placeholder-text">[INSERT BUSINESS EMAIL]</p>
    </div>
</div>
```

**Replace with example:**
```html
<p><a href="mailto:info@vadorasupply.co.za">info@vadorasupply.co.za</a></p>
```
(Remove `class="placeholder-text"` and add `mailto:` link)

#### Location 2B: Footer (approximately line 440)
```html
<li>
    <strong>Email:</strong>
    <span class="placeholder-text">[INSERT EMAIL]</span>
</li>
```

**Replace with example:**
```html
<a href="mailto:info@vadorasupply.co.za">info@vadorasupply.co.za</a>
```
(Change `<span>` to `<a>` with mailto link, remove placeholder class)

---

### Placeholder 3: Business Hours
**Search for:** `[INSERT BUSINESS HOURS]`  
**Found at:** 2 locations

#### Location 3A: Contact Section (approximately line 365)
```html
<div class="contact-item">
    <div class="contact-icon">
        <!-- Clock icon -->
    </div>
    <div>
        <strong>Business Hours:</strong>
        <p class="placeholder-text">[INSERT BUSINESS HOURS]</p>
    </div>
</div>
```

**Replace with example:**
```html
<p>Monday - Friday: 8:00 AM - 5:00 PM<br>Saturday: 9:00 AM - 1:00 PM</p>
```
(Remove `class="placeholder-text"`, use `<br>` for line breaks)

#### Location 3B: Footer (approximately line 445)
```html
<li>
    <strong>Hours:</strong>
    <span class="placeholder-text">[INSERT HOURS]</span>
</li>
```

**Replace with example:**
```html
<span>Mon-Fri: 8AM-5PM, Sat: 9AM-1PM</span>
```
(Remove `class="placeholder-text"`)

---

### Placeholder 4: TikTok Profile URL
**Search for:** `[INSERT TIKTOK PROFILE URL]`  
**Found at:** 2 locations

#### Location 4A: Contact Section (approximately line 380)
```html
<div class="contact-item">
    <div class="contact-icon">
        <!-- TikTok icon -->
    </div>
    <div>
        <strong>TikTok:</strong>
        <p class="placeholder-text">[INSERT TIKTOK PROFILE URL]</p>
    </div>
</div>
```

**Replace with example:**
```html
<p><a href="https://www.tiktok.com/@vadorasupply" target="_blank" rel="noopener noreferrer">@vadorasupply</a></p>
```
(Remove `class="placeholder-text"`, add link attributes)

**Or if you don't have TikTok yet:**
```html
<!-- TikTok - Coming Soon -->
```
(Comment out the entire contact-item div or remove it)

#### Location 4B: Footer
This may not be present in the footer, but if it is, update similarly to Location 4A.

---

## ✅ Verification After Updates

After replacing all placeholders, search for `[INSERT` one more time to ensure none remain.

### Quick Verification Checklist
- [ ] No text contains `[INSERT BUSINESS ADDRESS]`
- [ ] No text contains `[INSERT BUSINESS EMAIL]`
- [ ] No text contains `[INSERT BUSINESS HOURS]`
- [ ] No text contains `[INSERT TIKTOK PROFILE URL]`
- [ ] All `class="placeholder-text"` removed from updated items
- [ ] Email addresses have `mailto:` links
- [ ] TikTok URL has `target="_blank" rel="noopener noreferrer"`
- [ ] All information is accurate and spelled correctly

---

## 📋 Complete Update Example

### Before:
```html
<div class="contact-item">
    <div class="contact-icon">
        <svg><!-- icon --></svg>
    </div>
    <div>
        <strong>Address:</strong>
        <p class="placeholder-text">[INSERT BUSINESS ADDRESS]</p>
    </div>
</div>
```

### After:
```html
<div class="contact-item">
    <div class="contact-icon">
        <svg><!-- icon --></svg>
    </div>
    <div>
        <strong>Address:</strong>
        <p>123 Industrial Road, Johannesburg, 2001, South Africa</p>
    </div>
</div>
```

---

## 💡 Pro Tips

### Tip 1: Keep Consistency
Make sure your address, email, hours, and social media are **exactly the same** in both locations (Contact Section and Footer).

### Tip 2: Test Links
After updating:
- Click the email link to verify it opens your email app
- Click the TikTok link to verify it goes to your profile
- Test on mobile and desktop

### Tip 3: Remove Placeholder Styling
Always remove `class="placeholder-text"` after replacing placeholder text. This class makes text appear in gold, which is only for placeholders.

### Tip 4: Backup Before Editing
Make a copy of `index.html` before editing, just in case you need to restore it.

### Tip 5: Use Find & Replace Carefully
If using Find & Replace All:
- Only replace the text between the brackets
- Don't accidentally replace HTML tags or attributes
- Review each replacement before saving

---

## 🎯 Summary

**Total Replacements Needed:** 8 placeholders
- Business Address: 2 times
- Business Email: 2 times
- Business Hours: 2 times
- TikTok URL: 2 times

**Estimated Time:** 5-10 minutes

**After Updates:** Save file, open in browser, verify all information displays correctly

---

## ⚠️ Common Mistakes to Avoid

❌ Leaving `[INSERT...]` text visible  
✅ Replace all placeholders with actual information

❌ Forgetting to remove `class="placeholder-text"`  
✅ Remove placeholder styling after updating

❌ Different information in Contact vs Footer  
✅ Keep information consistent everywhere

❌ Broken email/TikTok links  
✅ Use proper link format with protocols (mailto:, https://)

❌ Editing wrong file  
✅ Make sure you're editing `index.html` in the VADORA folder

---

## 🆘 Still Can't Find a Placeholder?

If you can't find a specific placeholder:

1. **Double-check your search term** - Copy exactly: `[INSERT`
2. **Check you're in the right file** - Should be `index.html`
3. **Look for gold/yellow text** - Placeholders are styled in gold
4. **Search case-sensitive** - Try both uppercase and lowercase
5. **Check if already replaced** - Someone may have updated it already

---

**Ready to Update?** Open `index.html` and start replacing! 🚀

Use `CONTACT-INFO-TEMPLATE.txt` to prepare your information first, then copy-paste into the right locations.
