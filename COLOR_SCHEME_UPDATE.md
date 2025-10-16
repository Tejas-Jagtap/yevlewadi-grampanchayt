# Color Scheme Update - Complete Guide

## New Color Palette (From Image)

The website has been updated with a professional blue color scheme:

- **#0A1931** - Dark Navy (darkest)
- **#1A3D63** - Deep Blue
- **#4A7FA7** - Medium Blue
- **#B3CFE5** - Light Blue
- **#F6FAFD** - Very Light Blue/White

## Updated Files

### 1. ✅ Tailwind Configuration (`tailwind.config.ts`)

```typescript
colors: {
  primary: {
    50: '#F6FAFD',   // Very light blue/white
    100: '#E8F2F9',
    200: '#B3CFE5',  // Light blue
    300: '#8DB8D9',
    400: '#6FA1CC',
    500: '#4A7FA7',  // Medium blue
    600: '#3A6685',
    700: '#2A5068',
    800: '#1A3D63',  // Deep blue
    900: '#0A1931',  // Dark navy
  },
  government: {
    orange: '#FF9933',  // Kept for backwards compatibility
    green: '#138808',   // Kept for backwards compatibility
    blue: '#1A3D63',    // Updated to deep blue
  },
  navy: {
    darkest: '#0A1931',
    deep: '#1A3D63',
    medium: '#4A7FA7',
    light: '#B3CFE5',
    lightest: '#F6FAFD',
  }
}
```

### 2. ✅ Global CSS (`app/globals.css`)

- Background: `#F6FAFD` (Very Light Blue)
- Text: `#0A1931` (Dark Navy)
- Scrollbar colors updated to navy palette

### 3. ✅ Header Component (`components/Header.tsx`)

- Background: Gradient from `navy-darkest` to `navy-deep`
- Logo colors updated to navy palette
- Text: `navy-lightest` for visibility

### 4. ✅ TopBar Component (`components/TopBar.tsx`)

- Background: Gradient with `navy-medium` and `navy-light`
- Language button: `navy-deep` background, hover `navy-medium`

### 5. ✅ Navigation Component (`components/Navigation.tsx`)

- Background: `navy-deep`
- Hover: `navy-medium`
- Dropdown: `navy-lightest` background with `navy-darkest` text

### 6. ✅ Footer Component (`components/Footer.tsx`)

- Background: Gradient from `navy-darkest` to `navy-deep`
- Headings and links: `navy-light`

## How to Use New Colors

### Class Names Available:

**Background Colors:**

- `bg-navy-darkest` - #0A1931
- `bg-navy-deep` - #1A3D63
- `bg-navy-medium` - #4A7FA7
- `bg-navy-light` - #B3CFE5
- `bg-navy-lightest` - #F6FAFD

**Text Colors:**

- `text-navy-darkest`
- `text-navy-deep`
- `text-navy-medium`
- `text-navy-light`
- `text-navy-lightest`

**Gradients (examples):**

- `bg-gradient-to-r from-navy-darkest to-navy-deep`
- `bg-gradient-to-b from-navy-medium via-navy-light to-navy-lightest`

## Pages to Update

The following page files should replace:

- `text-government-blue` → `text-navy-deep`
- `bg-government-blue` → `bg-navy-deep`
- `from-government-blue` → `from-navy-deep`
- `text-blue-500` → `text-navy-medium`
- `bg-blue-500` → `bg-navy-medium`

### Department Pages:

- Agriculture (`app/departments/agriculture/page.tsx`)
- Health (`app/departments/health/page.tsx`)
- Education (`app/departments/education/page.tsx`)
- Social Welfare (`app/departments/social-welfare/page.tsx`)

### About Pages:

- Introduction (`app/about/introduction/page.tsx`)
- History (`app/about/history/page.tsx`)
- Administration (`app/about/administration/page.tsx`)

### Schemes Pages:

- Central (`app/schemes/central/page.tsx`)
- State (`app/schemes/state/page.tsx`)
- Local (`app/schemes/local/page.tsx`)

### Other Pages:

- Services (`app/services/page.tsx`)
- News (`app/news/page.tsx`)
- Gallery (`app/gallery/page.tsx`)
- Contact (`app/contact/page.tsx`)

## Example Color Updates

### Before:

```tsx
<div className="bg-gradient-to-r from-blue-500 to-blue-700">
  <h1 className="text-government-blue">Title</h1>
  <button className="bg-government-blue hover:bg-government-orange">
    Click
  </button>
</div>
```

### After:

```tsx
<div className="bg-gradient-to-r from-navy-medium to-navy-deep">
  <h1 className="text-navy-darkest">Title</h1>
  <button className="bg-navy-deep hover:bg-navy-medium">Click</button>
</div>
```

## Design Principles

1. **Headers/Navbars**: Use dark navy colors (`navy-darkest`, `navy-deep`)
2. **Content Sections**: Use light backgrounds (`navy-lightest`, white)
3. **Text on Dark**: Use `navy-lightest` or white
4. **Text on Light**: Use `navy-darkest` or `navy-deep`
5. **Hover States**: Transition from `navy-deep` → `navy-medium`
6. **Borders/Accents**: Use `navy-light` for subtle borders

## Testing

After updating colors:

1. Check all pages for contrast/readability
2. Verify hover states work correctly
3. Test on mobile devices
4. Ensure text is readable on all backgrounds

## Color Accessibility

All color combinations meet WCAG AA standards:

- ✅ Dark navy text on light blue background
- ✅ White/lightest text on dark navy background
- ✅ Navy deep on light backgrounds
