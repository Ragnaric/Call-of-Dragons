import { useState } from "react";
import { text } from "stream/consumers";
import FormField from './form field.tsx'

export default function Page()
{

  return (
    <main className="flex-row justify-center text-center">
      <h1 className="border-8 mt-4 m-auto w-3/4">Welcome to the Call of Dragons Resource Center</h1>
      <div className="mt-20">Speed-up calculator goes here</div>
      <form className="flex-col justify-center space-y-2 flex-nowrap">
        <FormField />
        <FormField />
        <FormField />
      </form>
      <div>Total:</div>
      <div>Total in minutes:</div>
    </main>
  )
}