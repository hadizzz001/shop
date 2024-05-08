"use server";
import { Resend } from "resend"; 

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: any) {
  // Get the data from the request body
  const data = await request.json();
  const htmlContent = data.htmlContent; // Assuming 'htmlContent' contains the HTML

  // Send the email with the provided HTML content
  await resend.emails.send({
    from: "info@socialbang.hadizproductions.com",
    to: "info@socialtapnfc.au",
    subject: "New Order",
    html: htmlContent
  });

}
