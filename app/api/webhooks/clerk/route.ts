// app/api/webhooks/clerk/route.ts
import { WebhookEvent, clerkClient, UserJSON } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Webhook } from "svix";
import { syncUserData } from "@/lib/syncUserData";
import { generateUniqueDiasporanId } from "@/utils/functions";
import { allowedIps } from "@/utils/allowedIps";

// async function updatePublicMetaProfile(newUser: any) {
//   const { clerkId, _id } = newUser;

//   try {
//     // generate unique Diasporan ID
//     const diasporanId = generateUniqueDiasporanId();
//     await clerkClient.users.updateUserMetadata(clerkId, {
//       publicMetadata: {
//         userId: _id,
//         uniqueId: diasporanId,
//         requestedForPhysicalCard: false,
//         profileDetails:
//           "Welcome to your profile! Tell us more about yourself so we can get to know you better. Add your interests, skills, and experiences to make your profile stand out.",
//       },
//     });
//     console.log("User metadata updated successfully");
//   } catch (error) {
//     console.error("Failed to update user metadata:", error);
//   }
// }

export async function POST(req: NextRequest) {
  const CLERK_WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!CLERK_WEBHOOK_SECRET) {
    throw new Error(
      "Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  const clientIp =
    req.headers.get("x-forwarded-for") || req.headers.get("remote-addr");
  if (!clientIp || !allowedIps.includes(clientIp)) {
    console.error("Unauthorized IP:", clientIp);
    return new Response("Unauthorized", { status: 401 });
  }

  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    console.error("Missing svix headers");
    return new Response("Error occurred -- no svix headers", {
      status: 400,
    });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(CLERK_WEBHOOK_SECRET);

  let clerkEvent: WebhookEvent;

  try {
    clerkEvent = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occurred", {
      status: 400,
    });
  }

  const eventType = clerkEvent.type;

  // check if user has uniqueDiasporanID. If not, create one for the user
  if (eventType === "user.created") {
    const { id }: { id: string } = clerkEvent.data;
    const userId = id;

    try {
      // Generate unique Diasporan ID
      const uniqueIdentity = generateUniqueDiasporanId();

      // Update user metadata
      await clerkClient.users.updateUserMetadata(userId, {
        publicMetadata: {
          uniqueDiasporanID: uniqueIdentity,
          requestedForPhysicalCard: false,
          profileDetails:
            "Welcome to your profile! Tell us more about yourself so we can get to know you better. Add your interests, skills, and experiences to make your profile stand out.",
        },
      });

      console.log("User metadata updated successfully");

      // Wait for 2 seconds (example, adjust as needed)
      // await new Promise((resolve) => setTimeout(resolve, 2000));

      // Fetch the updated user data
      const updatedUser = await clerkClient.users.getUser(userId);

      // Extract relevant data for MongoDB insertion
      const userData = {
        clerkId: updatedUser.id,
        email: updatedUser.emailAddresses[0].emailAddress,
        ...updatedUser,
      };

      // Sync user data with MongoDB Atlas
      try {
        await syncUserData(userData);
        console.log("User data synced with MongoDB Atlas");
        return NextResponse.json(
          { message: "Webhook received and processed" },
          { status: 200 }
        );
      } catch (err) {
        console.error("Error syncing user data:", err);
      }
    } catch (error) {
      console.error("Failed to update user metadata:", error);
    }
  }
}
