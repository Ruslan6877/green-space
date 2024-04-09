import React from 'react'
import find from '/src/data/find.json'
import Button from './Button'

function Find() {
  return (
    <div className='flex container  mx-auto '>
        {find.map ((item, index) => (
            <div key={index} className='flex items-center justify-between bg-welcome'>
                <img src={item.img} className='w-[300px]' alt="img" />
                <div className='find_text text-end px-2'>
                    <h2 className=' font-bold text-lg leading-7'>{item.name}</h2>
                    <p>{item.description}</p>
                    <Button  title={'Find More'}/>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Find