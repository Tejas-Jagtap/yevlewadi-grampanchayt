# Gram Panchayat Website

A fully responsive Next.js website for Gram Panchayat (Village Council) designed based on Maharashtra Government's official website style.

## Features

- ✅ **Fully Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- 🎨 **Government-Style UI** - Inspired by Maharashtra Government website (zpsangli.maharashtra.gov.in)
- ⚡ **Built with Next.js 14** - Server-side rendering and optimal performance
- 🎯 **TypeScript** - Type-safe code
- 💅 **Tailwind CSS** - Modern utility-first CSS framework
- 📱 **Mobile-First Approach** - Optimized for all screen sizes

## Pages & Sections

### Home Page

- **Hero Section** - Auto-rotating carousel with call-to-action buttons
- **Latest News** - Recent announcements and updates
- **Officials Section** - Display of key Gram Panchayat officials
- **Departments** - Colorful department cards (Agriculture, Health, Education, etc.)
- **Government Schemes** - List of central and state welfare schemes
- **Photo Gallery** - Image gallery of village events and infrastructure
- **Helpline Numbers** - Emergency and important contact numbers
- **Important Links** - Quick access to government portals

### Layout Components

- **Top Bar** - Contact information and office hours
- **Header** - Gram Panchayat branding with emblems
- **Navigation** - Sticky navigation with dropdown menus
- **Footer** - Comprehensive footer with links and information

## Color Scheme

The website uses the Indian national flag colors:

- 🟠 **Orange** (#FF9933) - Primary accent
- ⚪ **White** (#FFFFFF) - Background
- 🟢 **Green** (#138808) - Secondary accent
- 🔵 **Blue** (#000080) - Government official color

## Installation

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Steps

1. **Navigate to the project directory:**

   ```bash
   cd "g:\project\ASCENTA Projects\grampanchayt\Demo\moredate"
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
moredate/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── TopBar.tsx           # Top information bar
│   ├── Header.tsx           # Main header with logo
│   ├── Navigation.tsx       # Navigation menu
│   ├── Hero.tsx             # Hero carousel section
│   ├── News.tsx             # Latest news section
│   ├── Officials.tsx        # Officials display
│   ├── Departments.tsx      # Department cards
│   ├── Schemes.tsx          # Government schemes
│   ├── Gallery.tsx          # Photo gallery
│   ├── Helpline.tsx         # Helpline numbers
│   ├── ImportantLinks.tsx   # Important links
│   └── Footer.tsx           # Footer component
├── public/
│   └── images/              # Image assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

## Customization

### Update Village Information

Edit the `components/Header.tsx` file:

```typescript
<h2 className="text-xl md:text-3xl font-bold text-government-blue">
  Village Name  // Change this
</h2>
<p className="text-sm md:text-lg text-gray-600">
  District, State - 000000  // Change this
</p>
```

### Update Contact Details

Edit the `components/TopBar.tsx` and `components/Footer.tsx` files to update:

- Phone numbers
- Email addresses
- Office hours
- Physical address

### Add More Pages

Create new pages in the `app` directory:

```typescript
// app/about/page.tsx
export default function About() {
  return <div>About Page</div>;
}
```

### Modify Navigation

Edit `components/Navigation.tsx` to add/remove menu items:

```typescript
const menuItems = [
  { name: "Home", href: "/", hasDropdown: false },
  // Add more items here
];
```

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Icons** - Icon library
- **Lucide React** - Additional icons

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Add citizen services portal
- [ ] Implement online complaint system
- [ ] Add RTI (Right to Information) section
- [ ] Integrate payment gateway for tax payments
- [ ] Add multilingual support (Hindi, Marathi, English)
- [ ] Implement authentication for admin panel

## License

This project is created for educational purposes.

## Support

For any queries or support, please contact:

- Email: info@grampanchayat.gov.in
- Phone: +91-XXX-XXXXXXX

---

**Developed with ❤️ for serving rural India**
