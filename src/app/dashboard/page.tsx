'use client'

import { useEffect, useState } from "react";
import { text } from "stream/consumers";
import FormField from './form field.tsx'

export default function Page()
{
  const[total, setTotal] = useState(0);
  const[minutes, setMinutes] = useState(0);

  const speedUps = ['1m', '5m', '10m', '15m', '30m', '60m', '3h', '8h', '15h', '24h', '7d'];

  const inputNumber = (e) => {
    setTotal(e.target.value);
  };

  useEffect(() => {
    console.log(total);
  })

  return (
    <main className="flex-row justify-center text-center text-slate-800">
      <h1 className="border-8 mt-4 m-auto w-3/4">Welcome to the Call of Dragons Resource Center</h1>
      <div className="mt-20">Speed-up calculator goes here</div>
      <form className="flex-col justify-center space-y-2 flex-nowrap">
        {speedUps.map((speedUp, key) => {
          return <FormField speedUp={speedUp} key={key} handleInput={inputNumber}/>;
        })}
      </form>
      <div>Total: {total}</div>
      <div>Total in minutes: {minutes}</div>
    </main>
  )
}