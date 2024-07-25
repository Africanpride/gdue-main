import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log("TRYING REQUEST TO GOOGLE API");
  try {
    // Parse the JSON body
    const { token } = await req.json();
    console.log(token);

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${secretKey}&response=${token}`,
      }
    );

    const data = await response.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json

    // return NextResponse.json({ success: false })
  }
}
