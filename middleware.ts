// middleware.ts
import {
  clerkMiddleware,
  createRouteMatcher
} from '@clerk/nextjs/server';

// Define a matcher for protected routes
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',

  // API route to the protected 
  '/api/user(.*)', 
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
},{ debug: process.env.NODE_ENV === 'development' });

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
