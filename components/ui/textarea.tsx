import * as React from "react"

import { cn } from "../../lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}


  const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => {
      return (
        <textarea
          className={cn(
            "flex min-h-[80px] w-full rounded-xl border-[1.5px] border-white/20 focus:border-teal-400 font-ligh bg-primary px-4 py-5 text-base placeholder:text-white/30 outline-none",
            className
          )}
          ref={ref}
          {...props}
        />
      )
    }
  )
Textarea.displayName = "Textarea"

export { Textarea };
