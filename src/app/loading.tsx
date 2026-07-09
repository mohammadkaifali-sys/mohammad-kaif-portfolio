export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl border border-border/70 bg-card/80 p-6 shadow-soft backdrop-blur-xl">
        <div className="space-y-4">
          <div className="h-4 w-24 animate-pulse rounded-full bg-muted" />
          <div className="h-10 w-3/4 animate-pulse rounded-2xl bg-muted" />
          <div className="h-4 w-full animate-pulse rounded-full bg-muted" />
          <div className="h-4 w-5/6 animate-pulse rounded-full bg-muted" />
          <div className="mt-6 h-12 w-44 animate-pulse rounded-full bg-muted" />
        </div>
      </div>
    </div>
  );
}