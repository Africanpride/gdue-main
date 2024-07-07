// app/api/webhooks/clerk/route.ts
import { WebhookEvent, clerkClient, UserJSON } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Webhook } from "svix";
import { createUser } from "@/lib/createUser";

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

  if (eventType === "user.created") {
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

    console.log("User data to create:", userData);

    try {
      console.time("createUser");
      const newUser = await createUser(userData);
      console.timeEnd("createUser");
      console.log("User created successfully:", newUser);
    } catch (error) {
      console.error("Failed to create user:", error);
      return new Response("Error occurred during user creation", {
        status: 500,
      });
    }
  }

  return NextResponse.json({ message: "Webhook received and processed" }, { status: 200 });

}
