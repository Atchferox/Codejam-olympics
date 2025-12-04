import { cn } from "@/lib/utils"

interface DivProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Div({ children, className, ...props }: DivProps) {
  return (
    <div
      className={cn(
        "size-32 inset-shadow-[0_4px_6px_rgba(0,0,0,0.1)] border-gray-400 border rounded-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
