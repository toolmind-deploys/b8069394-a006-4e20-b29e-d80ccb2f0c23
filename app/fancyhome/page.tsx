'use client';

import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '../../components/ui/dropdown-menu';

export default function HomePage() {
  console.info('Rendering the fancier homepage with a GIF and dropdown...');

  const router = useRouter();

  function handleRedirect(path: string) {
    console.log(`Redirecting to ${path}...`);
    router.push(path);
  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 p-8 flex flex-col items-center justify-center">
      <Card className="max-w-md w-full shadow-xl mb-8">
        <CardHeader>
          <CardTitle className="text-3xl">Welcome to Our Fanciest Homepage Yet</CardTitle>
          <CardDescription>Prepare to be dazzled!</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">
            We just added a fancy GIF below. Enjoy the visual treat, read the poem for inspiration,<br />
            and use the dropdown to explore other pages!
          </p>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="default">Get Started</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" className="ml-2">More Pages</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Choose a page</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleRedirect('/pageA')}>
                Page A
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleRedirect('/pageB')}>
                Page B
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
            Whispering dawn,<br />
            Blushing sky at morn,<br />
            In hope we rise,<br />
            Our spirits reborn.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
