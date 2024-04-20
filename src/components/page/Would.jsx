// import { useEffect, useState } from "react"
import Button from './Button';
import data from '/src/data/would.json'


function Would() {
  console.log(data[0].would, "data");
    
    return (
    <div className='would flex flex-wrap items-center justify-around container  mx-auto bg-categoriyes my-6'>
        {data.map( (item, index) => (
            <div className='w-[247px] ml:hidden xl:block' key={index}>
                <img src={item.image} alt="img" />
                <h2>{item.name}</h2>
                <p>{item.description}</p>
            </div>
        ))}
        <div className='w-[400px]'>
          <h2>Would you like to join newsletters?</h2>
          <from className='flex'>
          <input className='w-[290px] ml:w-[190px]' type="text" placeholder='enter your email address...' />
          <Button title={'Join'}/>
          </from>
          <p>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
        </div>
    </div>
  )
}

export default Would