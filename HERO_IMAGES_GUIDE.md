# 🖼️ Hero Section Background Images Guide

## ✅ What's Been Done

The hero section has been updated with:

- **3 rotating background images** that change every 5 seconds
- **Smooth fade transitions** between slides
- **Overlay effect** to ensure text remains readable
- **Placeholder SVG images** for immediate functionality

## 📸 How to Add Your Village Photos

### Step 1: Prepare Your Images

You need **3 high-quality photos** of your village showing:

1. **hero1.jpg** - Village landscape/overview
2. **hero2.jpg** - Community life/Gram Panchayat building
3. **hero3.jpg** - Development/infrastructure

### Step 2: Image Requirements

**Recommended Specifications:**

- **Size**: 1920 x 1080 pixels (Full HD)
- **Aspect Ratio**: 16:9 (landscape)
- **Format**: JPG or PNG
- **File Size**: 200KB - 800KB (optimized)
- **Quality**: High resolution, well-lit, professional

### Step 3: Add Images to Your Project

1. Rename your 3 photos to:

   ```
   hero1.jpg
   hero2.jpg
   hero3.jpg
   ```

2. Place them in this folder:

   ```
   public/images/
   ```

3. Update Hero.tsx (line 12-30):

   ```tsx
   const slides = [
     {
       id: 1,
       titleKey: "hero.title1",
       descriptionKey: "hero.subtitle1",
       image: "/images/hero1.jpg", // Change .svg to .jpg
     },
     {
       id: 2,
       titleKey: "hero.title2",
       descriptionKey: "hero.subtitle2",
       image: "/images/hero2.jpg", // Change .svg to .jpg
     },
     {
       id: 3,
       titleKey: "hero.title3",
       descriptionKey: "hero.subtitle3",
       image: "/images/hero3.jpg", // Change .svg to .jpg
     },
   ];
   ```

4. Delete the placeholder SVG files:

   ```
   public/images/hero1.svg
   public/images/hero2.svg
   public/images/hero3.svg
   ```

5. Refresh your website - real images will appear!

## 🎨 Image Optimization Tips

### Before uploading, optimize your images:

**Online Tools (Free):**

- **TinyPNG** (https://tinypng.com) - Compress JPG/PNG
- **ImageOptim** (https://imageoptim.com) - Mac users
- **Squoosh** (https://squoosh.app) - Google's image optimizer

**Settings:**

- Quality: 80-85% (good balance)
- Format: JPG for photos (smaller file size)
- Resolution: 1920x1080px (don't go higher)

### Why Optimize?

- ✅ Faster website loading
- ✅ Better user experience
- ✅ Lower bandwidth usage
- ✅ Improved SEO ranking

## 📷 Where to Get Village Photos

### Option 1: Take Your Own (Best!)

- Use a good smartphone camera
- Take photos during golden hours (morning/evening)
- Avoid harsh midday lighting
- Include various aspects of village life

### Option 2: Hire Local Photographer

- Contact local photographers
- Budget: ₹2,000 - ₹5,000 for professional shoot
- Get copyright permissions

### Option 3: Temporary Stock Photos

Use these only as temporary placeholders:

- **Unsplash** (https://unsplash.com)
- **Pexels** (https://pexels.com)
- **Pixabay** (https://pixabay.com)

Search: "Indian village", "rural India", "agricultural fields"

## 🎯 Photography Composition Ideas

### Image 1 - Village Overview:

- Wide landscape shot
- Agricultural fields in foreground
- Village houses in background
- Clear sky
- Natural lighting

### Image 2 - Community Life:

- Gram Panchayat building (front view)
- Village gathering or meeting
- People in traditional dress
- Market area
- Cultural activities

### Image 3 - Development:

- New infrastructure (roads, buildings)
- School or health center
- Water supply facilities
- Solar panels or modern amenities
- Clean village initiatives

## ✨ Current Features

Your hero section now has:

- ✅ Auto-rotating carousel (5-second intervals)
- ✅ Smooth fade transitions
- ✅ Clickable slide indicators (3 dots at bottom)
- ✅ Dark overlay for text readability
- ✅ Responsive design (works on all devices)
- ✅ Bilingual support (Marathi/English)
- ✅ Two action buttons (View Services, Contact Us)

## 🔧 Technical Details

**File Structure:**

```
public/
  └── images/
      ├── README.md (image guidelines)
      ├── hero1.svg (placeholder - replace with hero1.jpg)
      ├── hero2.svg (placeholder - replace with hero2.jpg)
      └── hero3.svg (placeholder - replace with hero3.jpg)

components/
  └── Hero.tsx (carousel component)
```

**Carousel Settings:**

- Transition: Fade (1 second duration)
- Interval: 5 seconds per slide
- Navigation: Automatic + manual (click dots)

## 📱 Testing Checklist

After adding your images:

- [ ] Images load properly on desktop
- [ ] Images load properly on mobile
- [ ] Carousel transitions smoothly
- [ ] Text remains readable on all images
- [ ] Slide indicators work when clicked
- [ ] Images look good in both languages
- [ ] Loading time is acceptable (< 3 seconds)

## 🆘 Troubleshooting

**Images not showing?**

1. Check file names are exactly: hero1.jpg, hero2.jpg, hero3.jpg
2. Ensure files are in `public/images/` folder
3. Clear browser cache (Ctrl + Shift + R)
4. Check browser console for errors (F12)

**Images too large/slow?**

1. Compress images using TinyPNG
2. Resize to exactly 1920x1080px
3. Convert PNG to JPG if needed
4. Target file size: < 500KB per image

**Text not readable?**

1. Choose images with clear backgrounds
2. Avoid images with too much detail in center
3. The dark overlay should help (already applied)

---

**Need Help?**
The placeholder SVG images will work perfectly until you're ready to add real village photos!
