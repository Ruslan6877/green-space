import React from 'react'

function Button({title}) {
  return (
    <div>
        <button   className='px-4  rounded-md   py-1 text-white bg-green border-none flex items-center justify-center gap-2 cursor-pointer'>{title}</button>
    </div>
  )
}

export default Button