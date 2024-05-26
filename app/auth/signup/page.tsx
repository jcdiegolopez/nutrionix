'use client'
import { useState } from 'react'
import { signUp } from '@/lib/actions/user.actions';
import { useFormState, useFormStatus } from 'react-dom';

// Componente funcional SignupForm que representa un formulario de registro
export default function SignupForm() {
  // Uso de un hook personalizado useFormState para manejar el estado del formulario y posiblemente la lógica de signup
  const [errorMessage, dispatch] = useFormState(signUp, undefined);

  return (
    // Formulario principal con la acción (dispatch) y clases de estilo de Tailwind CSS
    <form action={dispatch} className="space-y-3">
      {/* Contenedor principal del formulario con estilos específicos */}
      <div className="text-black flex-1 rounded-lg bg-slate-100 shadow-lg px-6 pb-4 pt-8 md:w-[350px]">
        {/* Título del formulario */}
        <h1 className={`h3-bold`}>
          Sign Up
        </h1>
        {/* Contenedor de campos de entrada para email, username y password */}
        <div className="w-full">
          {/* Campo de entrada para el email */}
          <div>
            <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="email">
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
          {/* Campo de entrada para el username */}
          <div className="mt-4">
            <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="username">
              Username
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="username"
                type="text"
                name="username"
                placeholder="Enter Username"
                required
                minLength={3}
              />
            </div>
          </div>
          {/* Campo de entrada para la contraseña */}
          <div className="mt-4">
            <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="password">
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
        {/* Componente de botón de registro */}
        <SignupButton />
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

/**
 * The `SignupButton` function renders a button component for signing up with a disabled state based on
 * a pending status from a form.
 * @returns A button component with the text "Sign Up" is being returned. The button has a black
 * background, white text, rounded corners, a height of 8 pixels, and takes up the full width of its
 * container. The `aria-disabled` attribute is set to the value of the `pending` variable from the
 * `useFormStatus` hook.
 */
function SignupButton() {
  const { pending } = useFormStatus();

  return (
    <button className="bg-black mt-4 w-full text-white rounded-lg h-8" aria-disabled={pending}>
      Sign Up
    </button>
  );
}