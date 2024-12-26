// import createMiddleware from 'next-intl/middleware';
 
// export default createMiddleware({
//   locales: ['en', 'ar'],
//    defaultLocale: '',
//    localeDetection: true 
// });
 
// export const config = {
//   matcher: ['/', '/(ar|en)/:path*']
// };

import createMiddleware from 'next-intl/middleware';
import { localePrefix, locales } from '@/navigation';

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale: 'ar'
});

// only applies this middleware to files in the app directory
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)' , "/(ar|en)/:path*", "/"]
};
