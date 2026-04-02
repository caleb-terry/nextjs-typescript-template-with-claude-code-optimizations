"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-4xl font-bold tracking-tight">Something went wrong</h1>
      <p className="text-foreground/70 text-lg">An unexpected error occurred.</p>
      <button
        onClick={reset}
        className="bg-foreground text-background rounded-md px-4 py-2 text-sm font-medium transition-colors hover:opacity-90"
      >
        Try again
      </button>
    </main>
  );
}
