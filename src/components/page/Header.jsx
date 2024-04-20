import Logo from '/public/Logo.svg'
import { CiShoppingCart } from "react-icons/ci"
import { CiSearch } from "react-icons/ci"
import Button from './Button'
// import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoFilter } from "react-icons/io5";

function Header() {
  // const [count, setCouner] = useState(0)
  // const [input, setInput] = useState(0)
  // function PlusNumber(){
  //   setCouner(count +5)
  // }
  // function MinusNumber(){
  //   setCouner(count -17)
  // }
  // function handleSubmit(e){
  //   setInput(input +e.target.value)
  //   }
  //   function plusInput(){
  //     setCouner(count + Number(input))
  //   }
  return (
    <div className='flex justify-between px-2 pb-[17px] items-center my-2 container  mx-auto border-b-[0.3px] border-b-solid border-b-green_soc'>
        <img src={Logo} alt="logo" className='ml:w-20 xl:w-[150px]'/>
        <ul className=' xl:block sm:hidden md:hidden lg:block ml:hidden flex flex-wrap justify-around items-center gap-4 cursor-pointer  '>
            <NavLink   className='mx-3' to={`/`} >Home</NavLink>
            <NavLink to={`/shop`}  className='mx-3' >Shop</NavLink>
            <NavLink   className='mx-3' to={`/shop`}>Plant Care</NavLink>
            <NavLink   className='mx-3' to={`/shop`}>Blogs</NavLink>
        </ul>
          <button  className='lg:hidden sm:block cursor-pointer bg-green rounded-lg p-3 ml:w-8 ml:h-8 ml:p-2' ><IoFilter className='text-white'/></button>
        <div className="shop flex items-center gap-[30px]">
        <CiSearch className='text-xl  cursor-pointer sm:hidden ml:hidden xl:block'/>
        <CiShoppingCart  className='text-xl cursor-pointer sm:hidden ml:hidden xl:block'/>
          <NavLink to={`/login`}><Button title={'Login'} /></NavLink>
          {/* <button className='p-2 bg-green' onClick={PlusNumber}>+</button>
          <p id='num'>{count}</p>
          <button className='p-2 bg-red-600' onClick={MinusNumber}>-</button>
          <input onChange={handleSubmit} type="number" />
          <button onClick={plusInput} >save</button> */}
        </div>
    </div>
  )
}

export default Header