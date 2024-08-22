import { joinGDUE } from "@/lib/joinGDUE";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json({
      success: false,
      error: "Method not allowed",
      status: 405,
    });
  }

  const formData = await req.json();
  console.log("Received formData:", formData);

  // Destructure formData and add additional fields
  const {
    country,
    firstName,
    lastName,
    email,
    telephone,
    address,
    spouseName = '',
    emergencyContact = '',
    emergencyContactTelephone = '',
  } = formData;

  // Create the complete member object
  const memberData = {
    country,
    firstName,
    lastName,
    email,
    telephone,
    address,
    spouseName,
    emergencyContact,
    emergencyContactTelephone,
    membershipApproved: false,
    membershipApprovedDate: null,
    membershipApprovedBy: null,
    membershipNumber: null,
  };

  console.log("Constructed memberData:", memberData);

  try {
    const userResponse = await joinGDUE(memberData);
    console.log("User response from joinGDUE:", userResponse);
    return NextResponse.json(
      { message: userResponse.message },
      { status: userResponse.status }
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
