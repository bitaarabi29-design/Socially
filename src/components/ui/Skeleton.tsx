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

export function PostCardSkeleton() {
  return (
    <div className="border-base-300 bg-base-100 w-[550px] max-w-full rounded-xl border p-6 shadow-sm">
    
      <div className="flex items-start gap-4">
        <Skeleton className="h-10 w-10 shrink-0 rounded-full" />

        <div className="flex-1">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="mt-2 h-3 w-24" />
        </div>
      </div>

    
      <div className="mt-4 flex flex-col gap-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>

      <div className="mt-4 flex gap-4">
        <Skeleton className="h-8 w-16 rounded-md" />
        <Skeleton className="h-8 w-20 rounded-md" />
      </div>
    </div>
  );
}