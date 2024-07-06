import { WebhookEvent, clerkClient, UserJSON } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Webhook } from "svix";
import { createUser } from "@/lib/createUser";

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
  const eventType = clerkEvent.type;

  // CREATE User in mongodb
  if (eventType === "user.created") {
    // Extract data from userData
    const {
      id,
      email_addresses,
      image_url,
      first_name,
      last_name,
      username,
      created_at,
      external_accounts,
      external_id,
      last_sign_in_at,
      object,
      password_enabled,
      phone_numbers,
      primary_email_address_id,
      public_metadata,
      two_factor_enabled,
      unsafe_metadata,
      updated_at,
      web3_wallets,
    } = clerkEvent.data;

    const userData = {
      clerkId: id,
      email: email_addresses[0].email_address,
      username: username || "",
      firstName: first_name || "",
      lastName: last_name || "",
      photo: image_url || "",
      createdAt: created_at || 0,
      externalAccounts: external_accounts || [],
      externalId: external_id || "",
      lastSignInAt: last_sign_in_at || 0,
      object: object || "",
      passwordEnabled: password_enabled || false,
      phoneNumbers: phone_numbers || [],
      primaryEmailAddressId: primary_email_address_id || "",
      profileImageUrl: image_url || "",
      publicMetadata: public_metadata || {},
      twoFactorEnabled: two_factor_enabled || false,
      unsafeMetadata: unsafe_metadata || {},
      updatedAt: updated_at || 0,
      web3Wallets: web3_wallets || [],
    };

    console.log(userData);

    console.log("Creating ............");

    const newUser = await createUser(userData);

    // if (newUser) {
    //   // Check if the environment is production
    //   if (process.env.NODE_ENV === "production") {
    //     try {
    //       await clerkClient.users.updateUserMetadata(id, {
    //         publicMetadata: {
    //           userId: newUser._id,
    //         },
    //       });
    //       console.log("User metadata updated successfully");
    //     } catch (error) {
    //       console.error("Failed to update user metadata:", error);
    //     }
    //   } else {
    //     console.log(
    //       "User metadata update skipped, not in production environment"
    //     );
    //   }
    // }

    // return NextResponse.json({ message: "New user created", user: newUser });
  }

  // return NextResponse.json({ message: "New user created", user: newUser });
  return new NextResponse("User Created Successfully!", {
    status: 200,
  });
}
