import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card";

async function getElephantData() {
  console.info("Fetching elephant data from /api/cuteelephant...");
  const res = await fetch("http://localhost:3000/api/cuteelephant", { cache: "no-store" });
  if (!res.ok) {
    console.error("Failed to fetch elephant data.");
    return { name: "Unknown Elephant", description: "Data not found" };
  }
  const data = await res.json();
  console.info("Elephant data fetched successfully.", data);
  return data;
}

export default async function ElephantPage() {
  const { name, description } = await getElephantData();
  console.info("Rendering ElephantPage with the fetched data.");

  return (
    <main className="min-h-screen bg-gradient-to-r from-green-100 via-green-200 to-green-300 p-8 flex flex-col items-center justify-center">
      <Card className="max-w-md w-full shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl">Welcome to the Elephant Page</CardTitle>
          <CardDescription>We love big, friendly elephants!</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-2">Name: {name}</p>
          <p className="text-gray-700">Description: {description}</p>
        </CardContent>
      </Card>
    </main>
  );
}
