"use server";
import { Resend } from "resend"; 
import  prisma  from "libs/prismadb";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: any) {
  // Get the data from the request body
  const data = await request.json();
  const htmlContent = data.htmlContent; // Assuming 'htmlContent' contains the HTML
  const { cart , personal } = data;  

  const currentDate = new Date();
const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
  .toString()
  .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;


const createOrder = async () => {
  const order = await prisma.order.create({
    data: {
      user: cart,
      info: personal,
      createdAt: formattedDate,
    },
  });

  // return order;
  console.log(order);
};
 

  await createOrder();
  // Send the email with the provided HTML content
  await resend.emails.send({
    from: "info@socialtapnfc.au",
    to: "socialtapnfc.au@gmail.com",
    subject: "New Order",
    html: htmlContent
  });

}
