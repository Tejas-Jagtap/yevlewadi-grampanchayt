# Modular Translation System Documentation

## Overview

The Gram Panchayat website now uses a **modular translation system** where translations are organized into separate files by page/section instead of one massive file. This makes it much easier to:

✅ Find and update translations  
✅ Add new pages and content  
✅ Maintain code organization  
✅ Work collaboratively (different developers can work on different translation files)  
✅ Improve performance (only load translations as needed in the future)

## File Structure

```
translations/
├── index.ts              # Central export - merges all translation modules
├── common.ts             # Shared translations (navigation, footer, buttons)
├── home.ts               # Home page specific translations
├── schemes.ts            # All schemes pages (Central, State, Local)
├── about.ts              # About section (Introduction, History, Administration) [TODO]
├── departments.ts        # All department pages (Agriculture, Education, Health, Social Welfare) [TODO]
├── services.ts           # Services page translations [TODO]
├── news.ts               # News page translations [TODO]
├── gallery.ts            # Gallery page translations [TODO]
└── contact.ts            # Contact page translations [TODO]
```

## How It Works

### 1. Individual Translation Files

Each file exports a translation object with a specific naming pattern:

**Example: `translations/schemes.ts`**

```typescript
export const schemesTranslations = {
  "schemes.benefits": {
    mr: "लाभ",
    en: "Benefits",
  },
  "schemes.pmayName": {
    mr: "प्रधानमंत्री आवास योजना",
    en: "Pradhan Mantri Awas Yojana (PMAY)",
  },
  // ... more translations
};
```

### 2. Central Index File

The `translations/index.ts` file merges all modules:

```typescript
import { commonTranslations } from "./common";
import { homeTranslations } from "./home";
import { schemesTranslations } from "./schemes";

export const allTranslations = {
  ...commonTranslations,
  ...homeTranslations,
  ...schemesTranslations,
};
```

### 3. LanguageContext Integration

The `contexts/LanguageContext.tsx` imports from the central index:

```typescript
import { allTranslations } from "@/translations";

// Use allTranslations instead of the old monolithic object
const [translations] = useState(allTranslations);
```

## Adding New Translations

### Step 1: Create a new translation file (if needed)

```typescript
// translations/services.ts
export const servicesTranslations = {
  "services.title": {
    mr: "सेवा",
    en: "Services",
  },
  "services.birthCert": {
    mr: "जन्म प्रमाणपत्र",
    en: "Birth Certificate",
  },
  // ... more
};
```

### Step 2: Add to index.ts

```typescript
import { servicesTranslations } from "./services";

export const allTranslations = {
  ...commonTranslations,
  ...homeTranslations,
  ...schemesTranslations,
  ...servicesTranslations, // Add new module
};

export { servicesTranslations }; // Export for direct access
```

### Step 3: Use in components

No changes needed! The `t()` function works the same way:

```tsx
{
  t("services.birthCert");
}
```

## Translation Key Naming Convention

Use a hierarchical naming structure:

```
[page/section].[subsection].[item]

Examples:
- schemes.pmayName           (Schemes page → PMAY scheme → Name)
- nav.departments.agriculture (Navigation → Departments → Agriculture)
- common.readMore            (Common → Read More button)
- home.hero.title            (Home page → Hero section → Title)
```

## Benefits of Modular System

### 1. **Easy to Find Translations**

Instead of searching through 3000+ lines, you know exactly where to look:

- Need scheme translations? → `translations/schemes.ts`
- Need navigation items? → `translations/common.ts`

### 2. **Easy to Update**

Update one file without affecting others:

```bash
# Only modify schemes translations
translations/schemes.ts  ← Edit this file

# All other files remain untouched
```

### 3. **Better Organization**

Clear separation of concerns:

- **common.ts**: Elements used across multiple pages (nav, footer, buttons)
- **home.ts**: Home page only
- **schemes.ts**: All 3 schemes pages (Central, State, Local)
- Each page has its own file

### 4. **Scalability**

Easy to add new pages:

1. Create new file: `translations/newpage.ts`
2. Add to `index.ts`
3. Done!

### 5. **Team Collaboration**

Multiple developers can work on different translation files without merge conflicts.

## Current Status

### ✅ Completed Modules

| Module  | File         | Contains                                        |
| ------- | ------------ | ----------------------------------------------- |
| Common  | `common.ts`  | Navigation, footer, buttons, labels             |
| Home    | `home.ts`    | Hero section, quick stats, officials            |
| Schemes | `schemes.ts` | All 18 schemes (Central: 6, State: 6, Local: 6) |

### 🔄 TODO: Create These Modules

| Module      | File to Create   | Should Contain                                 |
| ----------- | ---------------- | ---------------------------------------------- |
| About       | `about.ts`       | Introduction, History, Administration pages    |
| Departments | `departments.ts` | Agriculture, Education, Health, Social Welfare |
| Services    | `services.ts`    | All service types and descriptions             |
| News        | `news.ts`        | News items and categories                      |
| Gallery     | `gallery.ts`     | Gallery categories and descriptions            |
| Contact     | `contact.ts`     | Contact form labels and office information     |

## Migration Plan

### Phase 1: ✅ Setup Foundation

- [x] Create `translations/` folder
- [x] Create `common.ts`, `home.ts`, `schemes.ts`
- [x] Create `index.ts` to merge modules
- [x] Document the system

### Phase 2: 🔄 Create Remaining Modules

- [ ] Create `about.ts` with all about page translations
- [ ] Create `departments.ts` with all 4 department pages
- [ ] Create `services.ts`
- [ ] Create `news.ts`
- [ ] Create `gallery.ts`
- [ ] Create `contact.ts`

### Phase 3: Update LanguageContext

- [ ] Update `contexts/LanguageContext.tsx` to import from `@/translations`
- [ ] Remove old monolithic translation object
- [ ] Test all pages

### Phase 4: Cleanup

- [ ] Verify all translations work
- [ ] Remove any duplicate translation keys
- [ ] Update documentation

## Example: Complete Module Structure

```typescript
// translations/departments.ts
export const departmentsTranslations = {
  // Agriculture
  "agri.title": { mr: "कृषी विभाग", en: "Agriculture Department" },
  "agri.services": { mr: "सेवा", en: "Services" },
  "agri.soilTesting": { mr: "माती चाचणी", en: "Soil Testing" },

  // Education
  "edu.title": { mr: "शिक्षण विभाग", en: "Education Department" },
  "edu.primarySchools": { mr: "प्राथमिक शाळा", en: "Primary Schools" },

  // Health
  "health.title": { mr: "आरोग्य विभाग", en: "Health Department" },
  "health.phc": { mr: "प्राथमिक आरोग्य केंद्र", en: "Primary Health Center" },

  // Social Welfare
  "social.title": { mr: "समाज कल्याण", en: "Social Welfare" },
  "social.pensionScheme": { mr: "पेन्शन योजना", en: "Pension Scheme" },
};
```

## Testing the Modular System

After implementation:

1. **Run the dev server:**

   ```bash
   npm run dev
   ```

2. **Test language toggle on all pages:**

   - Home page
   - About pages (Introduction, History, Administration)
   - Department pages (all 4)
   - Schemes pages (all 3)
   - Services, News, Gallery, Contact

3. **Verify:**
   - All translations work correctly
   - No missing translations
   - Language toggle switches all content
   - No TypeScript errors

## Best Practices

### 1. Keep Related Translations Together

Group related translations in the same file:

```typescript
// Good - all scheme fields together
"schemes.pmayName": {...},
"schemes.pmayBenefit": {...},
"schemes.pmayEligibility": {...},
```

### 2. Use Clear Key Names

Make keys self-descriptive:

```typescript
// Good
"schemes.applicationProcess": {...}

// Bad (unclear)
"schemes.ap": {...}
```

### 3. Reuse Common Translations

Don't duplicate common elements:

```typescript
// Use from common.ts
"common.applyNow": {...}

// Don't create duplicates in every module
```

### 4. Comment Complex Sections

Add comments to organize large files:

```typescript
// ===================
// CENTRAL SCHEMES
// ===================

// PMAY - Pradhan Mantri Awas Yojana
"schemes.pmayName": {...},
```

## Troubleshooting

### Issue: Translation key not found

**Solution:** Check that:

1. The translation exists in a module file
2. The module is imported in `index.ts`
3. The module is spread in `allTranslations`

### Issue: TypeScript error "Property does not exist"

**Solution:**

- The translation key might be misspelled
- Make sure to rebuild after adding new translations
- Check that `index.ts` exports the module

### Issue: Language toggle not working

**Solution:**

- Verify `LanguageContext.tsx` uses `allTranslations`
- Check that the `t()` function receives the correct key
- Ensure both `mr` and `en` values exist for the key

## Future Enhancements

### 1. Lazy Loading (Optional)

Load translations on-demand for better performance:

```typescript
const loadSchemeTranslations = () => import("./translations/schemes");
```

### 2. Translation Management Tools

Consider using tools like:

- i18next for more advanced features
- Translation management platforms
- Automated translation checking

### 3. Pluralization Support

Add support for plural forms:

```typescript
"items": {
  mr: { one: "वस्तू", many: "वस्तू" },
  en: { one: "item", many: "items" },
}
```

---

**Last Updated:** October 12, 2025  
**Status:** Phase 1 Complete ✅  
**Next Step:** Create remaining translation modules (Phase 2)
