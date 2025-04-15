
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-bright-orange text-white hover:bg-vibrant-pink hover:border-vibrant-pink/50 border border-bright-orange/30 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0",
        destructive: "bg-red-500 text-white hover:bg-red-600 border border-red-500/30",
        outline: "border border-bright-orange bg-transparent text-bright-orange hover:bg-bright-orange/10 hover:text-white transition-colors duration-300",
        secondary: "bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30 transition-colors duration-300",
        ghost: "bg-transparent hover:bg-white/10 text-white hover:text-bright-orange",
        link: "text-bright-orange underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-3 rounded-lg",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
