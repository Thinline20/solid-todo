import { Button } from "~/components/ui/button";

export default function NotFound() {
  return (
    <main class="mx-auto p-4 text-center">
      <h1 class="max-6-xs my-16 text-6xl font-thin uppercase text-primary">
        Not Found
      </h1>
      <p class="mt-8">
        <Button
          as="a"
          class="text-xl"
          href="/"
          size="lg"
          variant="link"
        >
          Go to Home
        </Button>
      </p>
    </main>
  );
}
