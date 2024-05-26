import * as React from "react"

import { cn } from "@/lib/utils"

/* This code snippet is defining a React functional component called `Card` using the
`React.forwardRef` function. */
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

/* This code snippet is defining a React functional component called `CardHeader` using the
`React.forwardRef` function. */
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

/* The `const CardTitle` code snippet is defining a React functional component called `CardTitle` using
the `React.forwardRef` function. This component is rendering an `<h3>` element with specific styling
classes and attributes. The `forwardRef` function allows the component to receive a ref and pass it
down to the underlying `<h3>` element. */
const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

/* The `const CardDescription` code snippet is defining a React functional component called
`CardDescription` using the `React.forwardRef` function. This component is responsible for rendering
a `<p>` element with specific styling classes and attributes. */
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

/* The `const CardContent` code snippet is defining a React functional component called `CardContent`
using the `React.forwardRef` function. This component is responsible for rendering a `<div>` element
with specific styling classes and attributes. */
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

/* The `const CardFooter` code snippet is defining a React functional component called `CardFooter`
using the `React.forwardRef` function. This component is responsible for rendering a `<div>` element
with specific styling classes and attributes. */
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
