import prisma from "@/app/lib/db";
import { redis } from "@/app/lib/redis";
import { stripe } from "@/app/lib/stripe";
import { headers } from "next/headers";

export async function POST(req: Request) {
  const body = await req.text();

  const signature = headers().get("Stripe-Signature") as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      //try to get event from stripe if no errors occure then go to switch
      body,
      signature,
      process.env.STRIPE_SECRET_WEBHOOK as string,
    );
  } catch (error: unknown) {
    return new Response("Webhook error", { status: 400 });
  }

  switch (
    event.type //looks for the type of event and looks for successful even
  ) {
    case "checkout.session.completed": {
      const session = event.data.object;

      await prisma.order.create({
        //if the event is found then create a new prisma query to save the details from stripe
        data: {
          amount: session.amount_total as number,
          status: session.status as string,
          userId: session.metadata?.userId, //metadata is passed throught the actions
        },
      });

      await redis.del(`cart-${session.metadata?.userId}`); //delete items from cart
      break;
    }
    default: {
      console.log("Unhandled Event");
    }
  }
  return new Response(null, { status: 200 }); //response successful
}
