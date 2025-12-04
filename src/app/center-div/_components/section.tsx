import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Section({
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "border size-64 shadow-md border-gray-400 rounded-lg",
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}
