import React from 'react'

function Button({title}) {
  return (
    <div>
        <button className='w-24 rounded-xl  px-2 py-1 text-white bg-green border-none flex items-center justify-center gap-2 cursor-pointer'>{title}</button>
    </div>
  )
}

export default Button