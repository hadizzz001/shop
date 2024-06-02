"use server";
import prisma from "../../../libs/prismadb";


export async function POST(request: any) {

  const data = await request.json();
  const { items, inputs } = data;

  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;


  const createOrder = async () => {
    const order = await prisma.order.create({
      data: {
        user: items,
        info: inputs,
        createdAt: formattedDate,
      },
    });

    // return order;
    console.log(order);
  };


  await createOrder(); 
 

}
