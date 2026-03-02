import { clerkMiddleware } from "@clerk/nextjs/server";

// By leaving this empty, Clerk will not protect ANY routes by default.
export default clerkMiddleware();

export const config = {
  matcher: [
    // This allows all pages to load without checking for a user
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
