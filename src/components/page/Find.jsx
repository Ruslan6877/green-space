import React from 'react'
import find from '/src/data/find.json'
import Button from './Button'

function Find() {
  return (
    <div className='find flex flex-wrap container  mx-auto p-3 '>
        {find.map ((item, index) => (
            <div key={index} className='w-[586px] flex items-center xl:m-0 sm:m-auto justify-between bg-welcome'>
                <img src={item.img} className='w-[300px] xl:block lg:block sm:hidden' alt="img" />
                <div className='find_text xl:text-end sm:text-center sm:pt-3 px-2'>
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