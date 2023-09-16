'use client'

import {useEffect, useState} from 'react';

export default function FormField(props)
{

  return (
    <div>
      <label className='border text-slate-800'>{props.speedUp}</label>
      <input type='number' placeholder='0' className='border' onChange={props.handleInput}></input>
    </div>
  )
}
