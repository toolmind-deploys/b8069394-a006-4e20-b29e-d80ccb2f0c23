import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

// This is a Server Component by default in Next.js App Router
// We fetch dog data from our local API route, then display the results.

export default async function CutedogPage() {
  console.log("Rendering the cutedog page...");

  const res = await fetch("http://localhost:3000/api/cutedog", {
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    console.error("Failed to load dog data.");
    // You can handle errors more gracefully in production.
    return (
      <main className="p-6">
        <p>Failed to load dog data.</p>
      </main>
    );
  }

  const dog = await res.json();

  return (
    <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-sm w-full shadow-lg hover:shadow-2xl transition-shadow">
        <CardHeader>
          <CardTitle className="text-2xl">{dog.name}</CardTitle>
          <CardDescription>This dog is super adorable!</CardDescription>
        </CardHeader>
        <CardContent>
          <img
            src="https://placedog.net/400/300"
            alt="A very cute dog"
            className="rounded-md mb-4 w-full object-cover"
          />
          <p className="mb-2">Color: {dog.color}</p>
          <p className="mb-4">Age: {dog.age}</p>
          <Button variant="default">Show More</Button>
        </CardContent>
      </Card>
    </div>
  );
}
