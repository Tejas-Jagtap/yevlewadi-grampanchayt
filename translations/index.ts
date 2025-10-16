// Central export point for all translation modules

import { commonTranslations } from './common';
import { homeTranslations } from './home';
import { schemesTranslations } from './schemes';
import { aboutTranslations } from './about';
import { departmentsTranslations } from './departments';
import { servicesTranslations } from './services';
import { newsTranslations } from './news';
import { galleryTranslations } from './gallery';
import { contactTranslations } from './contact';

// Merge all translation modules into one object
export const allTranslations = {
  ...commonTranslations,
  ...homeTranslations,
  ...schemesTranslations,
  ...aboutTranslations,
  ...departmentsTranslations,
  ...servicesTranslations,
  ...newsTranslations,
  ...galleryTranslations,
  ...contactTranslations,
};

// Type for translation keys
export type TranslationKey = keyof typeof allTranslations;

// Export individual modules for direct access if needed
export { 
  commonTranslations, 
  homeTranslations, 
  schemesTranslations, 
  aboutTranslations, 
  departmentsTranslations, 
  servicesTranslations, 
  newsTranslations, 
  galleryTranslations, 
  contactTranslations 
};

