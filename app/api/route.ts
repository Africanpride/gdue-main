// app/api/user/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello Clerk test" }, { status: 200 });

}
