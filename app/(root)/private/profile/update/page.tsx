'use client';
import { use, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { updateProfile } from '@/lib/actions/user.actions';
import { useRouter } from 'next/navigation';
import { Rotate3D } from 'lucide-react';
export default function ProfileForm() {
  const router = useRouter(); // Initialize useRouter
  const [errorMessage, dispatch] = useFormState(updateProfile, undefined);
  const handleSubmit = async (event: any) => {
    try {
      await dispatch(event);
      console.log("refreshing");
      router.refresh(); // Refresh the page
      router.push('/private/profile/myday');
      router.replace('/private/profile/myday');

      router.push('/');


    } catch (error : any) {
      // Handle error (you already have error handling in place)
      console.log("refreshing error");

      router.refresh(); // Refresh the page
      router.push('/private/profile/myday?doReload=true');

      throw(error.message);
    }
  };


  return (
    <div className="py-5">
    <form action={handleSubmit} className="space-y-3">
      <div className="text-black flex-1 rounded-lg bg-white px-10 pb-5 pt-8 md:w-[650px] mx-auto">
        <h1 className={`h3-bold text-center`}>Lets Create Your Profile</h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="name"
            >
              Name
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-3 mt-5 block text-xs font-medium text-gray-900">
              Gender
            </label>
            <div className="flex space-x-4 radio-button-container">
              <div className="radio-button">
                <input
                  type="radio"
                  className="radio-button__input"
                  id="radio1"
                  name="gender"
                  value="Male"
                />
                <label className="radio-button__label" htmlFor="radio1">
                  <span className="radio-button__custom"></span>
                  Male
                </label>
              </div>
              <div className="radio-button">
                <input
                  type="radio"
                  className="radio-button__input"
                  id="radio2"
                  name="gender"
                  value="Female"
                />
                <label className="radio-button__label" htmlFor="radio2">
                  <span className="radio-button__custom"></span>
                  Female
                </label>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="age"
            >
              Age
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="age"
                type="number"
                name="age"
                placeholder="Enter your age"
                required
                min={18}
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="weight"
            >
              Weight (kg)
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="weight"
                type="number"
                name="weight"
                placeholder="Enter your weight"
                required
                min={0}
                step={0.1}
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="height"
            >
              Height (cm)
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="height"
                type="number"
                name="height"
                placeholder="Enter your height"
                required
                min={0}
                step={1}
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-3 mt-5 block text-xs font-medium text-gray-900">
              Objective
            </label>
            <div className="flex space-x-4 radio-button-container">
              <div className="radio-button">
                <input
                  type="radio"
                  className="radio-button__input"
                  id="radioWeight1"
                  name="objective"
                  value="Gain Weight"
                />
                <label className="radio-button__label" htmlFor="radioWeight1">
                  <span className="radio-button__custom"></span>
                  Gain Weight
                </label>
              </div>
              <div className="radio-button">
                <input
                  type="radio"
                  className="radio-button__input"
                  id="radioWeight2"
                  name="objective"
                  value="Maintain Weight"
                />
                <label className="radio-button__label" htmlFor="radioWeight2">
                  <span className="radio-button__custom"></span>
                  Maintain Weight
                </label>
              </div>
              <div className="radio-button">
                <input
                  type="radio"
                  className="radio-button__input"
                  id="radioWeight3"
                  name="objective"
                  value="Lose Weight"
                />
                <label className="radio-button__label" htmlFor="radioWeight3">
                  <span className="radio-button__custom"></span>
                  Lose Weight
                </label>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-3 mt-5 block text-xs font-medium text-gray-900">
              Activity
            </label>
            <div className="flex space-x-4 radio-button-container">
              <div className="radio-button">
                <input
                  type="radio"
                  className="radio-button__input"
                  id="radioActivity1"
                  name="activity"
                  value="Low to Nothing"
                />
                <label className="radio-button__label" htmlFor="radioActivity1">
                  <span className="radio-button__custom"></span>
                  Low to nothing
                </label>
              </div>
              <div className="radio-button">
                <input
                  type="radio"
                  className="radio-button__input"
                  id="radioActivity2"
                  name="activity"
                  value="Light"
                />
                <label className="radio-button__label" htmlFor="radioActivity2">
                  <span className="radio-button__custom"></span>
                  Light
                </label>
              </div>
              <div className="radio-button">
                <input
                  type="radio"
                  className="radio-button__input"
                  id="radioActivity3"
                  name="activity"
                  value="Moderate"
                />
                <label className="radio-button__label" htmlFor="radioActivity3">
                  <span className="radio-button__custom"></span>
                  Moderate
                </label>
              </div>
              <div className="radio-button">
                <input
                  type="radio"
                  className="radio-button__input"
                  id="radioActivity4"
                  name="activity"
                  value="Always"
                />
                <label className="radio-button__label" htmlFor="radioActivity4">
                  <span className="radio-button__custom"></span>
                  Always
                </label>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Current Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter your current password"
                required
              />
            </div>
          </div>
        </div>
        <SubmitButton />
        <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
          {errorMessage && (
            <>
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <div className="grid justify-items-center">
    <button
      className="overflow-hidden mt-4 w-40 relative p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group" aria-disabled={pending}
    >
      Crear
      <span
        className="absolute w-44 h-40 -top-8 -left-2 bg-green-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
      ></span>
      <span
        className="absolute w-44 h-40 -top-8 -left-2 bg-green-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
      ></span>
      <span
        className="absolute w-44 h-40 -top-8 -left-2 bg-green-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
      ></span>
      <span
        className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-12 z-10"
        >¡Perfil!</span>
    </button>

    </div>
  );
}