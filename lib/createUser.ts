// lib/createUser.ts
import { connect } from "@/prisma/mondoDB/mongo";
import Profile from "@/prisma/mondoDB/userSchema";


interface MongoError extends Error {
  code?: number;
  errmsg?: string;
}

export async function createUser(profiles: any) {
  try {
    await connect();

    // Create a new user
    const newUser = await Profile.create(profiles);
    return newUser;
  } catch (error) {
    const mongoError = error as MongoError;
    console.error("MongoDB Error:", mongoError.message);
    if (mongoError.code) {
      console.error("MongoDB Error Code:", mongoError.code);
    }
    if (mongoError.errmsg) {
      console.error("MongoDB Error Message:", mongoError.errmsg);
    }
    console.log("Failure in syncing webhook with MongoDB");
    return null;
  }
}
