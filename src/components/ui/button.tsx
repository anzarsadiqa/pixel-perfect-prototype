import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 border px-6 text-[0.68rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-primary bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground",
        primary: "border-primary bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground",
        secondary: "border-secondary bg-secondary text-secondary-foreground hover:border-accent",
        destructive: "border-destructive bg-destructive text-destructive-foreground",
        outline: "border-foreground/35 bg-transparent text-foreground hover:border-primary hover:text-primary",
        light: "border-primary-foreground/60 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary",
        ghost: "border-transparent bg-transparent px-2 text-foreground hover:text-primary",
        link: "min-h-0 border-transparent bg-transparent px-0 text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-[0.62rem]",
        lg: "h-12 px-8",
        icon: "size-10 min-h-10 px-0",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  ),
);
Button.displayName = "Button";

export { buttonVariants };