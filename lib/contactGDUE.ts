import ContactSchema from "@/prisma/mondoDB/contactGDUESchema";
import { connect } from "@/prisma/mondoDB/mongo";

interface MongoError extends Error {
  code?: number;
  errmsg?: string;
}

export async function contactGDUE(contactFormData: any) {
  try {
    await connect();

    // Create a new user
    await ContactSchema.create(contactFormData);

    return {
      message: "New member created on MongoDB Atlas",
      status: 200,
    };
  } catch (error) {
    const mongoError = error as MongoError;
    console.error("MongoDB Error:", mongoError.message);
    
    // Check for duplicate key error (code 11000)
    if (mongoError.code === 11000) {
      return {
        message: "You are already registered",
        status: 409, // Conflict status code
      };
    }

    // Log other error details
    console.error("MongoDB Error Code:", mongoError.code);
    console.error("MongoDB Error Message:", mongoError.errmsg);

    return {
      message: "An error occurred while creating the member",
      status: 400,
    };
  }
}
