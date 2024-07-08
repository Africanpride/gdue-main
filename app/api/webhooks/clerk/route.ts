// app/api/webhooks/clerk/route.ts
import { WebhookEvent, clerkClient, UserJSON } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Webhook } from "svix";
import { syncUserData } from "@/lib/createUser";
import { generateUniqueDiasporanId } from "@/utils/functions";

async function updatePublicMetaProfile(newUser: any) {
  const { clerkId, _id } = newUser;

  try {
    // generate unique Diasporan ID
    const diasporanId = generateUniqueDiasporanId();
    await clerkClient.users.updateUserMetadata(clerkId, {
      publicMetadata: {
        userId: _id,
        uniqueId: diasporanId,
        requestedForPhysicalCard: false,
        profileDetails:
          "Welcome to your profile! Tell us more about yourself so we can get to know you better. Add your interests, skills, and experiences to make your profile stand out.",
      },
    });
    console.log("User metadata updated successfully");
  } catch (error) {
    console.error("Failed to update user metadata:", error);
  }
}

export async function POST(req: NextRequest) {
  const CLERK_WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!CLERK_WEBHOOK_SECRET) {
    throw new Error(
      "Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
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
    const { id } = clerkEvent.data;

    try {
      // generate unique Diasporan ID
      const uniqueIdentity = generateUniqueDiasporanId();
      await clerkClient.users.updateUserMetadata(id, {
        publicMetadata: {
          uniqueDiasporanID: uniqueIdentity,
          requestedForPhysicalCard: false,
          profileDetails:
            "Welcome to your profile! Tell us more about yourself so we can get to know you better. Add your interests, skills, and experiences to make your profile stand out.",
        },
      });
      console.log("User metadata updated successfully");
    } catch (error) {
      console.error("Failed to update user metadata:", error);
    }
  }

  // sync with mongoDB database
  if (eventType === "user.updated") {
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

    // console.log("User data to sync with database:", userData);

    try {
      // sync updated user data wigth mongoDB Atlas
      const newUser = await syncUserData(userData);
      console.log("User updated successfully:", newUser);

      console.log("public Meta Profile updated successfully:");
    } catch (error) {
      console.error("Failed to update user:", error);
      return new Response("Error occurred during user creation", {
        status: 500,
      });
    }
  }

  return NextResponse.json(
    { message: "Webhook received and processed" },
    { status: 200 }
  );
}
