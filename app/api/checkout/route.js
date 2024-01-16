 
import  prisma  from "libs/prismadb";
// import { type CartItemWithProduct } from "@/lib/types";
import { NextResponse } from "next/server";
import { stripe } from "libs/stripe"; 



const currentDate = new Date();
const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
  .toString()
  .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;


const createOrder = async (cartItems, userData) => {
  const order = await prisma.order.create({
    data: {
      user: userData,
      info: cartItems,
      createdAt: formattedDate,
    },
  });

  // return order;
  console.log(order);
};
 

 

export const POST = async (request ) => {
  const body = await request.json(); 
  const { cartItems , userData } = body;  

  // const userSession = await getAuthSession();

  // if (!userSession)
  //   return NextResponse.json({ error: "Not logged in" }, { status: 401 });

  try {
    await createOrder(cartItems, userData);
    // await clearCart(userSession.user.id);

    const checkoutSession = await stripe.checkout.sessions.create({
      line_items: cartItems.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.title,
            images: item.img,  
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `http://localhost:3000/done`,
      cancel_url: `http://localhost:3000/checkout`, 
    });

    return NextResponse.json({ url: checkoutSession.url });
  } catch (err) {
    console.error(err.message);  

    return NextResponse.json(
      {
        error: err.message,
      },
      { status: 500 }
    );
  }
};