import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function HomePage() {
  console.info("Rendering the cooler homepage with poem...");

  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 p-8 flex flex-col items-center justify-center">
      <Card className="max-w-md w-full shadow-xl mb-8">
        <CardHeader>
          <CardTitle className="text-3xl">Welcome to Our Even Cooler Homepage</CardTitle>
          <CardDescription>Prepare to be amazed!</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">Explore our newly added poem below. Enjoy and stay inspired!</p>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="default">Get Started</Button>
        </CardFooter>
      </Card>

      <Card className="max-w-md w-full shadow-xl">
        <CardHeader>
          <CardTitle>Poem of the Day</CardTitle>
          <CardDescription>Some uplifting words</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="italic text-gray-800">
            Whispering dawn,
            <br/>
            Blushing sky at morn,
            <br/>
            In hope we rise,
            <br/>
            Our spirits reborn.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
