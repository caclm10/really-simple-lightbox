import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-x-2 text-sm font-semibold rounded-lg focus-visible:ring-1 focus-visible:ring-offset-2",
    {
        variants: {
            variant: {
                primary: "bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-blue-500"
            },
            size: {
                md: "h-10 min-w-10 px-4"
            }
        },
        defaultVariants: {
            variant: "primary",
            size: "md"
        }
    }
)

/**
 * @typedef {import("class-variance-authority").VariantProps<typeof buttonVariants>} ButtonVariants
 */

/**
 * @typedef {React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants} ButtonProps
 *
 * @type {ReturnType<typeof forwardRef<HTMLButtonElement, ButtonProps>>}
 */
const Button = forwardRef(
    function Button({ variant, size, className, ...props }, ref) {
        return (
            <button
                ref={ref}
                type="button"
                className={twMerge(buttonVariants({ variant, size, className }))}
                {...props}
            />
        )
    }
)

export { Button }
