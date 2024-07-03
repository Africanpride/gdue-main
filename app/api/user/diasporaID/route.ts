
// app/api/user/diasporaID/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getAuth, clerkClient } from "@clerk/nextjs/server";
import { generateUniqueDiasporanId } from "@/utils/functions";
// import { generateUniqueDiasporanId } from "@functions";

export async function POST(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) return NextResponse.redirect("/");

  try {
    const body = await req.json();
    const { userId: incomingID } = body;

    if (String(incomingID) !== String(userId)) {
      return NextResponse.json({ error: "User ID does not match the authenticated user." }, { status: 403 });
    }

    const user = await clerkClient.users.getUser(userId);
    // checking if user has unique Diasporan Identity already
    const existingUniqueId = user.publicMetadata.uniqueId;

    if (existingUniqueId) {
      return NextResponse.json({ uniqueId: existingUniqueId });
    }


    // user has no unique diasporan identity already. Let's generate one for him/her and persist to 
    // clerk publicMetaData
    const diasporanId = generateUniqueDiasporanId();

    const response = await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        uniqueId: diasporanId,
        requestedForPhysicalCard: false,
        profileDetails: "Welcome to your profile! Tell us more about yourself so we can get to know you better. Add your interests, skills, and experiences to make your profile stand out."
,
      },
    });


    return NextResponse.json({ uniqueId: diasporanId });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
