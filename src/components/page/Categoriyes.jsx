import React from 'react'
import Button from './Button'
import Sale from '/src/assets/Super Sale Banner.svg'

function Categoriyes() {
  return (
    <div className='categoriyes container  mx-auto w-[310px] mt-5 bg-categoriyes p-2 ml-4'>
        <ul>
            <h2>Categories</h2>
            <div>
            <li>House Plants</li>
            <li>Potter Plants</li>
            <li>Seeds</li>
            <li>Small Plants</li>
            <li>Big Plants</li>
            <li>Succulents</li>
            <li>Trerrariums</li>
            <li>Gardening</li>
            <li>Accessories</li>    
            </div>



    <form className='mx-3 my-2'>
        <h2>Price Range</h2>
        <input type="range" />
        <Button title={'Filter'}/>
    </form>



            <div>
                <h2>Size</h2>
            <li>Small</li>
            <li>Medium</li>
            <li>Large</li>
            </div>
            <img src={Sale} alt="" />
        </ul>
    </div>
  )
}

export default Categoriyes