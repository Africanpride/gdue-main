import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log("REQUESTING VERIFICATION");
  try {
    // Parse the JSON body
    const { token } = await req.json();
    // console.log(token);

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
    if (data.success) {
      console.log(data);
      return NextResponse.json({ status: 200 });
    } else {
      return NextResponse.json({
        success: false,
        error: "Verification failed",
      });
    }
  } catch (error) {
    console.error("Error:", error);

    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json({ success: false, error: errorMessage });
  }
}
