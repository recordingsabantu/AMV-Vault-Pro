import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

// Inside your Navigation or Hero section:
<div className="flex items-center gap-4">
  <SignedOut>
    <SignInButton mode="modal">
      <button className="bg-[#D4AF37] text-[#2A1B0E] px-6 py-2 rounded-sm font-bold hover:bg-[#B8962E] transition">
        ARTIST LOGIN
      </button>
    </SignInButton>
  </SignedOut>
  
  <SignedIn>
    <a href="/dashboard" className="text-[#D4AF37] font-bold text-sm border border-[#D4AF37]/30 px-4 py-2 rounded">
      ENTER VAULT
    </a>
    <UserButton afterSignOutUrl="/" />
  </SignedIn>
</div>
