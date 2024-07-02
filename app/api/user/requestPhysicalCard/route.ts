import { NextRequest, NextResponse } from "next/server";
import { getAuth, clerkClient } from "@clerk/nextjs/server";
import { generateUniqueDiasporanId } from "../../../../utils/functions";

export async function POST(req: NextRequest) {
  const diasporanId = generateUniqueDiasporanId();

  // Get the user ID from the session
  const { userId } = getAuth(req);

  if (!userId) return NextResponse.redirect("/");

  try {
    // Parse the request body
    const body = await req.json();
    const { userId: incomingID } = body;

    // Check if the user ID in the body matches the authenticated user ID
    if (String(incomingID) !== String(userId)) {
      return NextResponse.json({ error: "User ID does not match the authenticated user." }, { status: 403 });
    }

    const response = await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        uniqueId: diasporanId,
      },
    });

    return NextResponse.json({ response });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
