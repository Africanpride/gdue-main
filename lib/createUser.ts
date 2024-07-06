import { connect } from "@/prisma/mondoDB/mongo";
import User from "@/prisma/mondoDB/userSchema";


interface MongoError extends Error {
  code?: number;
  errmsg?: string;
}

export async function createUser(user: any) {
  try {
    await connect();

    // Create a new user
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    const mongoError = error as MongoError;
    if (mongoError.code === 11000) {
      console.log(`Duplicate key error: ${mongoError.errmsg}`);
      // Handle the duplicate key error as needed
      // For example, you might want to return the existing user or a custom message
      const existingUser = await User.findOne({ clerkId: user.clerkId });
      return JSON.parse(JSON.stringify(existingUser));
    } else {
      console.error(error);
    }
  }
}
