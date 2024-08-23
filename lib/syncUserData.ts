// lib/syncUserData.ts
import { connect } from "@/prisma/mondoDB/mongo";
import User from "@/prisma/mondoDB/userSchema";
import { NextResponse } from "next/server";


interface MongoError extends Error {
  code?: number;
  errmsg?: string;
}

export async function syncUserData(users: any) {
  try {
    await connect();

    // Create a new user
    const newUser = await User.create(users);
    return NextResponse.json(
      { message: "new user created on mongoDB Atlas" },
      { status: 200 }
    );
  } catch (error) {
    const mongoError = error as MongoError;
    console.error("MongoDB Error:", mongoError.message);
    if (mongoError.code) {
      console.error("MongoDB Error Code:", mongoError.code);
    }
    if (mongoError.errmsg) {
      console.error("MongoDB Error Message:", mongoError.errmsg);
    }
    // console.log("Failure in syncing webhook with MongoDB");
    return null;
  }
}
