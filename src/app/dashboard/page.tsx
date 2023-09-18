'use client'

import React, { useEffect, useState } from "react";
import { text } from "stream/consumers";
import { forEachChild } from "../../../node_modules/typescript/lib/typescript";
import { FormField } from './formField'

export default function Page()
{
  const[total, setTotal] = useState('');
  const[minutes, setMinutes] = useState(0);

  const speedUps: string[] = ['1m', '5m', '10m', '15m', '30m', '60m', '3h', '8h', '15h', '24h', '3d', '7d'];
  const[entries, setEntries] = useState({});

  // interface Props {
  //   speedUp: string,
  //   handleInput: void
  // }

  const inputNumber = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    let allEntries: {[key: string]: number} = entries;
    allEntries[key] = Number(e.currentTarget.value);
    if (!allEntries[key])
    {
      delete allEntries[key];
    }
    let sum: number = 0;
    for (const value in allEntries)
    {
      if (value.slice(-1) === 'm')
      {
        let multiplier: number = Number(value.slice(0, value.length-1));
        sum += allEntries[value] * multiplier;
      }
      if (value.slice(-1) === 'h')
      {
        let multiplier: number = Number(value.slice(0, value.length-1));
        sum += allEntries[value] * multiplier * 60;
      }
      if (value.slice(-1) === 'd')
      {
        let multiplier: number = Number(value.slice(0, value.length-1));
        sum += allEntries[value] * multiplier * 1440;
      }
    }
    setEntries(allEntries);
    setMinutes(sum);

    let days: number;
    let hours: number;
    let remainder: number;

    if (sum >= 1440)
    {
      days = Math.floor(sum / 1440);
      if (sum % 1440 > 0)
      {
        remainder = sum % 1440;
        hours = Math.floor(remainder / 60);
        if (remainder >= 60)
        {
          remainder = remainder % 60;
          if (remainder > 0)
          {
            setTotal(`${days} days, ${hours} hours, ${remainder} minutes`);
          }
          else
          {
            setTotal(`${days} days, ${hours} hours`);
          }
        }
        else
        {
          setTotal(`${days} days, ${remainder} minutes`);
        }
      }
      else
      {
        setTotal(`${days} days`);
      }
    }
    else if (sum >= 60)
    {
      hours = Math.floor(sum / 60);

      if (sum % 60 > 0)
      {
        remainder = sum % 60;
        setTotal(`${hours} hours, ${remainder} minutes`);
      }
      else
      {
        setTotal(`${hours} hours`);
      }
    }
    else
    {
      setTotal(`${sum} minutes`);
    }
  };

  // useEffect(() => {
  //   console.log(entries);
  //   console.log(minutes);
  // });

  return (
    <main className="flex-row justify-center text-center text-slate-800">
      <h1 className="border-8 mt-4 m-auto w-3/4">Welcome to the Call of Dragons Resource Center</h1>
      <div className="mt-20">Speed-up calculator goes here</div>
      <form className="flex-col justify-center space-y-2 flex-nowrap">
        {speedUps.map((speedUp: string, key) => {
          return <FormField speedUp={speedUp} key={key} handleInput={inputNumber}/>;
        })}
      </form>
      <div>Total: {total}</div>
      <div>Total in minutes: {minutes} minutes</div>
    </main>
  )
}