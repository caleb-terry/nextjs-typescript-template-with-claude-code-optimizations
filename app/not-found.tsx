import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-4xl font-bold tracking-tight">404</h1>
      <p className="text-foreground/70 text-lg">This page could not be found.</p>
      <Link
        href="/"
        className="text-foreground/70 hover:text-foreground underline underline-offset-4"
      >
        Go home
      </Link>
    </main>
  );
}
