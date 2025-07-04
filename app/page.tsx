import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/ui/card";
import { Button } from "../components/ui/button";

// This is a Server Component in the Next.js App Router.
// We use minimal hooks if any, so we don’t need "use client".

export default function HomePage() {
  console.info("Rendering the cool homepage...");

  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 p-8 flex items-center justify-center">
      <Card className="max-w-md w-full shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl">Welcome to Our Cool Homepage</CardTitle>
          <CardDescription>Experience the awesomeness!</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">We have some really cool stuff for you here. Explore and have fun!</p>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>Modern UI Elements</li>
            <li>Vibrant Colors</li>
            <li>Responsive Layout</li>
          </ul>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="default">Get Started</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
