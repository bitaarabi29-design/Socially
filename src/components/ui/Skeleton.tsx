export function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-base-300 animate-pulse rounded-md ${className}`} />
  );
}

export function RecommendedUserSkeleton() {
  return (
    <div className="border-base-300 bg-base-100 rounded-xl border p-6 shadow-sm md:p-4">
      <Skeleton className="mb-6 h-5 w-32" />

      <div className="flex flex-col gap-5">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Skeleton className="h-10 w-10 rounded-full" />

              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="hidden h-3 w-20 md:block" />
              </div>
            </div>

            <Skeleton className="h-7 w-16 rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function NotificationCardSkeleton() {
  return (
    <div className="border-base-300 flex-col items-start gap-2 border px-4 py-5">
      <div className="flex items-start gap-2">
        <div className="skeleton h-10 w-10 shrink-0 rounded-full" />
        <div className="flex-1 space-y-2">
          <div className="skeleton h-4 w-2/3" />
          <div className="skeleton ml-6 h-9 w-3/4 rounded-md" />
          <div className="skeleton ml-6 h-9 w-11/12 rounded-md" />
          <div className="skeleton h-3 w-20" />
        </div>
      </div>
    </div>
  );
}
