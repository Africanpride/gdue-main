import { NextResponse, NextRequest } from "next/server";
// import nodemailer from 'nodemailer';

const nodemailer = require("nodemailer");

export async function GET() {
  return NextResponse.json(
    {
      message: "Hello from Next.js API Route!",
    },
    { status: 200 }
  );
}

// Handles POST requests to /api/notification
export async function POST(req: NextRequest) {
  const { REAL_EMAIL_PASSWORD, NEXT_PUBLIC_FROM_EMAIL, API_SECRET_TOKEN } = process.env;

  if (!REAL_EMAIL_PASSWORD || !NEXT_PUBLIC_FROM_EMAIL || !API_SECRET_TOKEN) {
    return NextResponse.json(
      { error: "Environment variables are not set" },
      { status: 500 }
    );
  }

  const memberData = await req.json();

  console.log("REQUEST DATA", memberData);

  if (!memberData.firstName || !memberData.email || !memberData.gdueMemberId) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const currentYear = new Date().getFullYear();

  const emailTemplate = `
       <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body style="font-size:12px;font-weight:500;line-height:16px" class="bg-gray-100 dark:bg-gray-900 text-[12px]">
    <section class="max-w-2xl px-6 py-8 mx-auto bg-white dark:bg-gray-900">


        <main class="mt-8">
            <h2 class="text-gray-700 dark:text-gray-200">Hi ${memberData.firstName},</h2>

            <p class="mt-2 leading-loose text-gray-600 dark:text-gray-300">
                Thank you for joining <span class="font-semibold ">The Ghanian Diaspora Union in Europe </span>Organisation.
            </p>
            <p class="mt-2 leading-loose text-gray-600 dark:text-gray-300">
               Kindly keep this number <strong>${memberData.gdueMemberId}</strong> as your membership number and use it in all correspondence with us.
            </p>

             <p class="mt-2 leading-loose text-gray-600 dark:text-gray-300">
            As a member, you will become part of a vibrant network of fellow Ghanaians who share your background and experiences. Whether you're seeking career advice, looking for cultural events, business networking or simply wanting to connect with others who understand your journey, GDUE is here for you.
            </p>

            <p class="mt-4 text-gray-600 dark:text-gray-300">
                If you have any questions, please feel free to contact us at <a href="mailto:info@ghanaiandiaspora.org" class="text-blue-600 hover:underline dark:text-blue-400">info@ghanaiandiaspora.org</a>.
            </p>

            <p class="mt-8 text-gray-600 dark:text-gray-300">
                Best regards, <br>
                The Ghanaian Diaspora in Europe Team
            </p>
        </main>
        
        <footer class="mt-16  ">

            <p style="color:#677185;font-size:10px;font-weight:500;line-height:16px">
                This email was sent to ${memberData.email} and as a part of discussion between The Ghanaian Diaspora Union in Europe (GDUE) and the addressee whose name is specified above. Should you receive this message by mistake, we ask that you inform us at your earliest possible experience. In this case, we also ask that you delete this message from your mailbox, and do not forward it or any part of it to anyone else. Thank you for your cooperation and understanding.
               
            </p>

            <p style="color:#677185;font-size:10px;font-weight:500;line-height:16px" class="mt-5 text-gray-500 dark:text-gray-400">© ${currentYear} Ghanaian Diaspora Union In Europe (GDUE). All Rights Reserved.</p>
        </footer>
    </section>
</body>
</html>

      `;
  const transporter = nodemailer.createTransport({
    host: "live.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "api",
      pass: REAL_EMAIL_PASSWORD,
    },
  });



  try {
    await transporter.sendMail({
      from: `"Ghanaian Diaspora Union - GDUE" <${NEXT_PUBLIC_FROM_EMAIL}>`,
      to: memberData.email,
      replyTo: NEXT_PUBLIC_FROM_EMAIL,
      subject: `GDUE Member ID: ${memberData.gdueMemberId}`,
      html: emailTemplate,
    });
    console.log("Email sent successfully");
    return NextResponse.json(
      { message: "Success: email was sent" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}