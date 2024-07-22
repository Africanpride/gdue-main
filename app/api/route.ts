// app/api/user/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ Organisation: "Ghanaian Diasporan Union in Europe!",
    website: "https://www.ghanaiandiaspora.org/"
   }, { status: 200 });

}
