// route.ts (server-side caching)
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/prisma/mondoDB/mongo";
import User from "@/prisma/mondoDB/userSchema";

// Cache variable to store user data
let cachedUsers: any[] | null = null;
let lastFetchTime: number | null = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes cache duration

export async function GET(req: NextRequest) {
  const now = Date.now();

  // Return cached data if it's still valid
  if (cachedUsers && lastFetchTime && now - lastFetchTime < CACHE_DURATION) {
    return NextResponse.json(
      { success: true, message: "Fetched from cache", data: cachedUsers },
      { status: 200 }
    );
  }

  await connect();

  try {
    console.log("Fetching users from MongoDB...");
    // Fetch users from the database
    const users = await User.find({});

    // Cache the data and timestamp
    cachedUsers = users;
    lastFetchTime = now;

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
