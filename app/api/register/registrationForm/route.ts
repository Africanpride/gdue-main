import { NextRequest, NextResponse } from "next/server";

// import { generateUniqueDiasporanId } from "@functions";

export async function POST(req: NextRequest) {
//   if (req.method !== "POST") {
//     return NextResponse.json(
//      { message: "Only POST requests allowed" },
//       { status: 405 }
//     );
//   }
  const body = await req.json();
  console.log(body);

  // Assuming the request body is valid, return a success response
  return NextResponse.json(
    { message: "Request received successfully" },
    { status: 200 }
  );
}

