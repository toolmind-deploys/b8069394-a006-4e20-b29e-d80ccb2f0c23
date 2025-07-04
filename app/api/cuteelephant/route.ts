import { NextResponse } from "next/server";

export async function GET() {
  const elephantData = {
    name: "Dumbo",
    description: "A friendly, big-eared elephant."
  };
  return NextResponse.json(elephantData);
}
