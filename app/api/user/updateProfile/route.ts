// app/api/user/diasporaID/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getAuth, clerkClient } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) return NextResponse.redirect("/");

  try {
    const body = await req.json();
    const { profileData } = body;

    const updatedUser = await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        profileDetails: profileData || "Welcome to your profile! Tell us more about yourself so we can get to know you better. Add your interests, skills, and experiences to make your profile stand out.",
      },
    });

    return NextResponse.json({ message: "User metadata updated successfully", user: updatedUser });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
