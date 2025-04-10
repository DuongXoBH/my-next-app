import { NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
  apiVersion: "2025-03-31.basil",
});

export async function POST(req: NextRequest) {
  const { amount } = await req.json();
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "usd",
  });
  return Response.json({
    clientSecret: paymentIntent.client_secret,
  });
}
