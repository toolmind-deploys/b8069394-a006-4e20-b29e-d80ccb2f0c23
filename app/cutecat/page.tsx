import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";

// This is a Server Component by default in Next.js App Router
// We fetch cat data from our local API route, then display the results.

export default async function CutecatPage() {
  console.log("Rendering the cutecat page...");

  const res = await fetch("http://localhost:3000/api/cutecat", {
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    console.error("Failed to load cat data.");
    // You can handle errors more gracefully in production.
    return (
      <main className="p-6">
        <p>Failed to load cat data.</p>
      </main>
    );
  }

  const cat = await res.json();

  return (
    <main className="flex justify-center items-center h-screen p-4">
      <Card className="max-w-sm w-full">
        <CardHeader>
          <CardTitle>{cat.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <img
            src="https://placekitten.com/400/300"
            alt="A very cute cat"
            className="rounded-md mb-4"
          />
          <p className="mb-2">Color: {cat.color}</p>
          <p>Age: {cat.age}</p>
        </CardContent>
      </Card>
    </main>
  );
}
