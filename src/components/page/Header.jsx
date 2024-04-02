import React from 'react'
import Logo from '/public/Logo.svg'
import { CiShoppingCart } from "react-icons/ci"
import { CiSearch } from "react-icons/ci"
import Button from './Button'

function Header() {
  return (
    <div className='flex justify-between px-2 pb-[17px] items-center my-2 container  mx-auto border-b-[0.3px solid rgba(70, 163, 88, 0.5)]'>
        <img src={Logo} alt="logo" />
        <ul className='flex justify-around items-center gap-5 cursor-pointer'>
            <li>Home</li>
            <li>Shop</li>
            <li>Plant Care</li>
            <li>Blogs</li>
        </ul>
        <div className="shop flex items-center gap-[30px]">
        <CiSearch className='text-xl  cursor-pointer'/>
        <CiShoppingCart  className='text-xl cursor-pointer'/>
          <Button title={'Login'}/>
        </div>
    </div>
  )
}

export default Header