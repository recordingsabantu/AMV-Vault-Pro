import { clerkMiddleware } from "@clerk/nextjs/server";

// This version explicitly tells Clerk not to block any requests
// which prevents the Edge Function from crashing if keys are being weird.
export default clerkMiddleware((auth, request) => {
  return; 
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
