import * as React from "react"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

interface InputProps extends React.ComponentProps<"input"> {
  small?: boolean,
  label?: string,
}

function Input({ className, type, label, name, small, required, ...props }: InputProps) {
  return (
    <div>
      {label && (
        <Label htmlFor={name} className="block font-semibold text-dark-800 mb-2.5">
          {label} {required ? <span className="text-red">*</span> : null}
        </Label>
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-4 py-3 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "text-dark-800 border-green-light rounded-lg bg-white focus:outline-green-dark",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          `${small ? 'max-w-32' : ''}`,
          className
        )}
        {...props}
      />
    </div>
  )
}

export { Input }
