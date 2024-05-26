'use client'

import { useState } from 'react'
import { authenticate } from '@/lib/actions/user.actions';
import { useFormState, useFormStatus } from 'react-dom';
import Link from 'next/link';

// Componente funcional LoginForm que representa un formulario de inicio de sesión
export default function LoginForm() {
  // Uso de un hook personalizado useFormState para manejar el estado del formulario y posiblemente la lógica de autenticación
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    // Formulario principal con la acción (dispatch) y clases de estilo de Tailwind CSS
    <form action={dispatch} className="space-y-3">
      {/* Contenedor principal del formulario con estilos específicos */}
      <div className="text-black flex-1 rounded-lg bg-slate-100 shadow-lg px-6 pb-4 pt-8 md:w-[350px]">
        {/* Título del formulario */}
        <h1 className={`h3-bold`}>
          Sign In
        </h1>
        {/* Contenedor de campos de entrada para email y password */}
        <div className="w-full">
          {/* Campo de entrada para el email */}
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>
          {/* Campo de entrada para la contraseña */}
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
            </div>
          </div>
        </div>
        {/* Enlace para redirigir al usuario a la página de registro */}
        <div className="w-full text-center pt-4">
          <Link href="/auth/signup" className="text-malachite-500 text-xs hover:text-malachite-600">¿Don't have an account? Sign up here.</Link>
        </div>
        {/* Componente de botón de inicio de sesión */}
        <LoginButton />
        {/* Contenedor para mostrar mensajes de error */}
        <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
          {/* Mostrar el mensaje de error si existe */}
          {errorMessage && (
            <>
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <button className="bg-black mt-1 w-full text-white rounded-lg h-8" aria-disabled={pending}>
      Log in 
    </button>
  );
}