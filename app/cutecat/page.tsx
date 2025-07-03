import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

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
    <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-sm w-full shadow-lg hover:shadow-2xl transition-shadow">
        <CardHeader>
          <CardTitle className="text-2xl">{cat.name}</CardTitle>
          <CardDescription>This cat is super adorable!</CardDescription>
        </CardHeader>
        <CardContent>
          <img
            src="https://placekitten.com/400/300"
            alt="A very cute cat"
            className="rounded-md mb-4 w-full object-cover"
          />
          <p className="mb-2">Color: {cat.color}</p>
          <p className="mb-4">Age: {cat.age}</p>
          <Button variant="default">Show More</Button>
        </CardContent>
      </Card>
    </div>
  );
}
