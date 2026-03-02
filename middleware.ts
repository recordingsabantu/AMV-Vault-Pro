import { clerkMiddleware } from "@clerk/nextjs/server";

// This makes all routes public by default
export default clerkMiddleware();

export const config = {
  matcher: [
    // This regex ensures the middleware doesn't interfere with static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
