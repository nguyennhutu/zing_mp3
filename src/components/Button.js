import React from 'react'

export default function Button({text,style}) {
  return (
    <button
    className={style?style:'py-1 px-4 rounded-l-full rounded-r-full border bg-transparent'}
    >
       {text}
    </button>
  )
}
