import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Webhook } from "svix";
import { createUser } from "@/lib/createUser";
import { clerkClient } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const CLERK_WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!CLERK_WEBHOOK_SECRET) {
    throw new Error(
      "Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(CLERK_WEBHOOK_SECRET);

  let clerkEvent: WebhookEvent;

  // Verify the payload with the headers
  try {
    clerkEvent = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  // Get the ID and type
  const { id } = clerkEvent.data;
  const eventType = clerkEvent.type;

  // CREATE User in mongodb
  if (eventType === "user.created") {
    const { id, email_addresses, image_url, first_name, last_name, username } =
      clerkEvent.data;

    const user = {
      clerkId: id,
      email: email_addresses[0].email_address,
      username: username!,
      firstName: first_name,
      lastName: last_name,
      photo: image_url,
    };

    console.log(user);

    console.log("Creating ............");

    const newUser = await createUser(user);

    if (newUser) {
      // Check if the environment is production
      if (process.env.NODE_ENV === 'production') {
          try {
              await clerkClient.users.updateUserMetadata(id, {
                  publicMetadata: {
                      userId: newUser._id,
                  },
              });
              console.log("User metadata updated successfully");
          } catch (error) {
              console.error("Failed to update user metadata:", error);
          }
      } else {
          console.log("User metadata update skipped, not in production environment");
      }
  }
  

    return NextResponse.json({ message: "New user created", user: newUser });
  }

  return new Response("", { status: 200 });
}
