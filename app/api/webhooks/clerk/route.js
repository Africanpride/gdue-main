import prisma from "@/lib/prisma";
import { Webhook } from "svix";
import { NextRequest, NextResponse } from "next/server";
import { WebhookEvent } from "@clerk/nextjs/server";
import { allowedIps } from "@/utils/allowedIps";

export async function POST(req) {
  const clientIP = req.headers.get("x-forwarded-for") || req.ip;

  if (!allowedIps.includes(clientIP)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const CLERK_WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!CLERK_WEBHOOK_SECRET) {
    throw new Error(
      "Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  const svix_id = req.headers.get("svix-id");
  const svix_timestamp = req.headers.get("svix-timestamp");
  const svix_signature = req.headers.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new NextResponse("Error occurred -- no svix headers", {
      status: 400,
    });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const webhook = new Webhook(CLERK_WEBHOOK_SECRET);
  let webhookEvent;

  try {
    webhookEvent = webhook.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new NextResponse("Error occurred", { status: 400 });
  }

  const eventType = webhookEvent.type;

  // if (eventType === 'user.created') {
  //   const {
  //     id: id,
  //     external_id: externalId,
  //     username,
  //     first_name: firstName,
  //     last_name: lastName,
  //     image_url: imageUrl,
  //     profile_image_url: profileImageUrl,
  //     birthday,
  //     gender,
  //     last_sign_in_at: lastSignInAt,
  //     password_enabled: passwordEnabled,
  //     two_factor_enabled: twoFactorEnabled,
  //     primary_email_address_id: primaryEmailAddressId,
  //     primary_phone_number_id: primaryPhoneNumberId,
  //     primary_web3_wallet_id: primaryWeb3WalletId,
  //     private_metadata: privateMetadata,
  //     public_metadata: publicMetadata,
  //     unsafe_metadata: unsafeMetadata,
  //     email_addresses: emailAddresses,
  //     phone_numbers: phoneNumbers,
  //     web3_wallets: web3Wallets,
  //   } = webhookEvent.data;

  console.log(webhookEvent.data);
  const {
    id,
    first_name,
    last_name,
    external_id,
    username,
    image_url,
    birthday,
    gender,
    password_enabled,
    two_factor_enabled,
  } = webhookEvent.data;

  const createdAt = new Date(parseInt(webhookEvent.data.created_at));
  const updatedAt = new Date(parseInt(webhookEvent.data.updated_at));
  const lastSignInAtDate = new Date(
    parseInt(webhookEvent.data.last_sign_in_at)
  );

  if (eventType === "user.created") {
    try {
      const user = await prisma.user.create({
        data: {
          id: id,
          externalId: external_id,
          firstName: first_name,
          lastName: last_name,
          gender: gender,
          username: username,
          imageUrl: image_url,
          birthday: birthday,
          passwordEnabled: password_enabled,
          twoFactorEnabled: two_factor_enabled,
          createdAt: createdAt,
          updatedAt: updatedAt,
          lastSignInAtDate: lastSignInAtDate,
          totpEnabled: false,
          backupCodeEnabled: false
        },
      });
      console.log(`User with ID ${id} created successfully.`);
    } catch (err) {
      console.error("Error creating user:", err);
      return new NextResponse("Error occurred while creating user", {
        status: 500,
      });
    }
  }
  return new NextResponse("User Created Successfully!", {
    status: 201,
  });
}
