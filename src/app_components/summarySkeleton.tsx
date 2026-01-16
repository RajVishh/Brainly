import { Skeleton } from "@/components/ui/skeleton"

export function SummarySkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <div className="space-y-2">
        <Skeleton className="h-4 bg-[#E0E3FF] w-[250px]" />
        <Skeleton className="h-4 bg-[#E0E3FF] w-[200px]" />
        <Skeleton className="h-4 bg-[#E0E3FF] w-[150px]" />
        <Skeleton className="h-4 bg-[#E0E3FF] w-[100px]" />
        <Skeleton className="h-4 bg-[#E0E3FF] w-[80px]" />
      </div>
    </div>
  )
}
