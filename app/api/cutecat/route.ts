import { NextResponse } from 'next/server';

// In-memory placeholder data for the cat.
export async function GET() {
  console.log("Returning cat data from the API route...");

  const cat = {
    name: "Fluffy",
    color: "White",
    age: 2
  };

  return NextResponse.json(cat);
}
