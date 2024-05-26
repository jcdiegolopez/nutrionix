// Indica que este módulo se ejecutará en el lado del cliente
"use client"

// Importaciones necesarias
import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator" // Importa los componentes de separación de Radix UI

import { cn } from "@/lib/utils" // Importa una función para concatenar clases de CSS

// Definición del componente Separator usando forwardRef para pasar refs a los elementos del DOM
const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props }, // Desestructura las props del componente
    ref // Ref del elemento DOM
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative} // Define si el separador es decorativo
      orientation={orientation} // Define la orientación del separador (horizontal o vertical)
      className={cn(
        "shrink-0 bg-border", // Clase base para el separador
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", // Clases condicionales según la orientación
        className // Clases adicionales pasadas como prop
      )}
      {...props} // Otras props pasadas al componente
    />
  )
)

// Establece el displayName para facilitar la depuración
Separator.displayName = SeparatorPrimitive.Root.displayName

// Exporta el componente Separator para su uso en otros lugares
export { Separator }
