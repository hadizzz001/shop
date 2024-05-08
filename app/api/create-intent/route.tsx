import { NextResponse } from "next/server";
import Stripe from "stripe"; 
import  prisma  from "libs/prismadb";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
  apiVersion: "2023-10-16",
});

const currentDate = new Date();
const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
  .toString()
  .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
 

const createOrder = async (personal:any, info:any) => {
  const order = await prisma.order.create({
    data: {
      user: personal,
      info: info,
      createdAt: formattedDate,
    },
  });

  // return order;
  console.log(order);
}; 

export async function POST(request: any) {
  const data: any = await request.json();
  const personal = data.personal;
  const info = data.info;
  const amount = data.amount;

 
  await createOrder(personal, info); 
  try {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100,
        currency: 'usd',  
    });
    return NextResponse.json(paymentIntent.client_secret, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, {
      status: 400,
    });
  }
}
