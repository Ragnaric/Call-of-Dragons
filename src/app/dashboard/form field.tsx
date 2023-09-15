'use client'

import {useEffect, useState} from 'react';

export default function FormField()
{
  const[input, setInput] = useState('');

  // useEffect(() => {
  //   console.log(input);
  // })

  return (
    <div>
      <label>1 min</label>
      <input type='number' placeholder='0' onChange={(e) => {setInput(e.target.value)}}></input>
    </div>
  )
}
