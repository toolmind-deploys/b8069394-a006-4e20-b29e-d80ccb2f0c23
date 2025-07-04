import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function HomePage() {
  console.info("Rendering the fancier homepage with a GIF...");

  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 p-8 flex flex-col items-center justify-center">
      <Card className="max-w-md w-full shadow-xl mb-8">
        <CardHeader>
          <CardTitle className="text-3xl">Welcome to Our Fanciest Homepage Yet</CardTitle>
          <CardDescription>Prepare to be dazzled!</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">We just added a fancy GIF below. Enjoy the visual treat and read the poem for some inspiration!</p>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="default">Get Started</Button>
        </CardFooter>
      </Card>

      <Card className="max-w-md w-full shadow-xl mb-8">
        <CardHeader>
          <CardTitle>Fancy GIF</CardTitle>
          <CardDescription>A little visual flair</CardDescription>
        </CardHeader>
        <CardContent>
          <img
            src="https://media.giphy.com/media/BMmCVDf8h1nYOUA7Z6/giphy.gif"
            alt="Fancy GIF"
            className="mx-auto w-full h-auto object-cover rounded-md shadow-md border"
          />
        </CardContent>
      </Card>

      <Card className="max-w-md w-full shadow-xl">
        <CardHeader>
          <CardTitle>Poem of the Day</CardTitle>
          <CardDescription>Words to lift your spirits</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="italic text-gray-800">
            Whispering dawn,<br/>
            Blushing sky at morn,<br/>
            In hope we rise,<br/>
            Our spirits reborn.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
