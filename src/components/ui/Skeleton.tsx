function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-md bg-base-300 ${className}`}
    />
  );
}


 export function RecommendedUserSkeleton() {
  return (
    <div className="border-base-300 bg-base-100 rounded-xl border p-6 shadow-sm md:p-4">
      <Skeleton className="mb-6 h-5 w-32" />

      <div className="flex flex-col gap-5">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between"
          >
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

export function AddPostCardSkeleton() {
  return (
    <div className="border-base-300 bg-base-100 w-[550px] max-w-full rounded-xl border p-6 shadow-sm">
      <div className="flex h-25 items-start gap-4">
        <Skeleton className="h-10 w-10 shrink-0 rounded-full" />

        <Skeleton className="h-full min-w-0 flex-1 rounded-md" />
      </div>

      <div className="border-base-300 mt-4 border-t pt-4">
        <div className="flex justify-end">
          <Skeleton className="h-10 w-20 rounded-md" />
        </div>
      </div>
    </div>
  );
}
