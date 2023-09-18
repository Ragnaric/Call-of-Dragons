'use client'

import React from "react"

type FormProps = {
  speedUp: string,
  handleInput: (e: React.ChangeEvent<HTMLInputElement>, key: string) => void
}

// interface Props {
//   speedUp: string,
//   handleInput: (e: React.ChangeEvent<HTMLInputElement>, key: string) => void
// }

export const FormField = (props: FormProps) => {
  return (
    <div>
      <label className='border text-slate-800 text-center'>{props.speedUp}</label>
      <input type='number' placeholder='0' className='border text-center' onChange={(e) => {props.handleInput(e, props.speedUp)}}></input>
    </div>
  )
}