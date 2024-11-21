// app/api/getMembers/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/prisma/mondoDB/mongo";
import NewGdueMember from "@/prisma/mondoDB/newGdueMemberSchema";

// Cache variable to store user data
let cachedMembers: any[] | null = null;
let lastFetchTime: number | null = null;
const CACHE_DURATION = 1 * 60 * 1000; // 5 minutes cache duration

export async function GET(req: NextRequest) {
  const now = Date.now();

  // Return cached data if it's still valid
  if (cachedMembers && lastFetchTime && now - lastFetchTime < CACHE_DURATION) {
    return NextResponse.json(
      { success: true, message: "Fetched from cache", members: cachedMembers }, // Send as 'members'
      { status: 200 }
    );
  }

  await connect();

  try {
    console.log("Fetching Members from MongoDB...");
    // Fetch Members from the database
    const members = await NewGdueMember.find({}); // Get members from MongoDB

    // Cache the data and timestamp
    cachedMembers = members;
    lastFetchTime = now;

    return NextResponse.json(
      { success: true, message: "Fetched Members successfully", members }, 
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
