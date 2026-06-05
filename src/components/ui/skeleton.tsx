import { cn } from "../../libs/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-xl bg-black/30", className)}
      {...props}
    />
  )
}

export { Skeleton }
