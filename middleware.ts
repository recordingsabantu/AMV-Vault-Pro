import { clerkMiddleware } from "@clerk/nextjs/server";

// This empty middleware will stop the "Edge Function" from crashing
export default clerkMiddleware(() => {
  return; 
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
