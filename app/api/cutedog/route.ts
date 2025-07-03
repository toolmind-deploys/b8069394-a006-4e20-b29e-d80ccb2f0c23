import { NextResponse } from 'next/server';

// In-memory placeholder data for the dog.
export async function GET() {
  console.log("Returning dog data from the API route...");

  const dog = {
    name: "Spike",
    color: "Brown",
    age: 3
  };

  return NextResponse.json(dog);
}
