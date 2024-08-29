import { joinGDUE } from "@/lib/joinGDUE";
import { generateUniqueDiasporanId } from "@/utils/functions";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.json();

  // Destructure formData and add additional fields
  const {
    country,
    firstName,
    lastName,
    email,
    telephone,
    addressInDiaspora,
    addressInGhana,
    spouseName = "",
    emergencyContact = "",
    emergencyContactTelephone = "",
  } = formData;

  // generate member id and assign it to membershipNumber
  const generatedNumber = generateUniqueDiasporanId();

  // Create the complete member object
  const memberData = {
    country,
    firstName,
    lastName,
    email,
    telephone,
    addressInDiaspora,
    addressInGhana,
    spouseName,
    emergencyContact,
    emergencyContactTelephone,
    membershipApproved: false,
    membershipApprovedDate: null,
    membershipApprovedBy: null,
    membershipNumber: generatedNumber,
  };

  try {
    // send notification

    // Send the member data to the server
    const userResponse = await joinGDUE(memberData);
    return NextResponse.json(
      {
        success: true,
        message: userResponse.message,
        status: userResponse.status,
        firstName: memberData.firstName,
        email: memberData.email,
        membershipNumber: memberData.membershipNumber,
      },
      { status: userResponse.status }
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error joining GDUE:", error.message);
      return NextResponse.json({
        success: false,
        error: error.message,
        status: 500,
      });
    }
  }
}
