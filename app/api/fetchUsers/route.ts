import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/prisma/mondoDB/mongo";
import User from "@/prisma/mondoDB/userSchema";

export async function GET(req: NextRequest) {
  await connect();

  try {
    console.log("Fetching users...");
    // fetch all users from the database
    const users = await User.find({});
    return NextResponse.json(
      { success: true, message: "Fetched users successfully", data: users },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
