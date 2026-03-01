import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { plan: string } }) {
  const plan = params.plan;
  
  // Here is where the Magic happens:
  // 1. We identify if it's 'basic' (R420) or 'pro' (R859)
  // 2. We generate a PayFast or Stripe link
  // 3. For now, we redirect to a "Success" simulation to show the flow
  
  const amount = plan === 'pro' ? '859.00' : '420.00';
  
  // In a real Pro setup, you'd put your PayFast Merchant ID here
  console.log(`Redirecting to Payment Gateway for ${plan} plan: R${amount}`);

  // After payment, they should land back at the Dashboard
  return NextResponse.redirect(new URL('/dashboard?payment=success', request.url));
}
