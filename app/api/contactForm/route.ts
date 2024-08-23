import { contactGDUE } from "@/lib/contactGDUE";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json({
      success: false,
      error: "Method not allowed",
      status: 405,
    });
  }

  const contactFormData = await req.json();
//   console.log("Received formData:", contactFormData);

  // Destructure formData and add additional fields
  const { token, fullName, email, message } = contactFormData;

  try {
    const contactFormResponse = await contactGDUE({ fullName, email, message });

    return NextResponse.json(
      { message: contactFormResponse.message },
      { status: contactFormResponse.status }
    );
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json({
      success: false,
      error: "Error joining GDUE",
      status: 500,
    });
  }
}
