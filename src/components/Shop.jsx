
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Header from "./page/Header"
import Footer from "./page/Footer"
import { FaInstagram, FaInstagramSquare, FaLinkedinIn, FaStar, FaTwitter } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import Button from "./page/Button";
import { FcLike } from "react-icons/fc";
import { MdFavoriteBorder } from "react-icons/md";
import { Checkbox } from "@mui/material";

function Shop({data}) {
  const [count, setCouner] = useState(0)
  const {id} = useParams()
  const originRate = 5;
  const productShop = data.filter((item) => item.id == id)
  const rate = productShop[0].rating.rate
   let arr = []
   for (let  i = 1; i <= 5 ; i++) {
    if (i < rate) {
      arr.push(<FaStar style={{color:"yellow"}}/>)
    } else{
      arr.push(<FaStar style={{color:"grey"}}/>)
    }
    
   }
  console.log(data);
  const productCategory = data.filter((item) => item.category = productShop.id)
  const Social = [
    <RiFacebookFill/>,
    <FaInstagramSquare />,
    <FaTwitter />,
    <FaLinkedinIn />
]
function PlusNumber(){
    setCouner(count +1)
  }
  function MinusNumber(){
    setCouner(count -1)
  }
  return (
    <div>
      <Header/>
      <div className="flex justify-around container mx-auto">
      <img className="w-32 cursor-pointer" src={productShop[0].image} alt="image" />
        <div className="w-[574px]">
      <h2 className="font-bold text-lg leading-7">{productShop[0].title}</h2>
      <div className="flex items-center justify-between">
      <p className="text-green font-semibold text-xl">${productShop[0].price}</p>
      <div className="flex">{arr}</div>
      </div>

      <h2>{productShop[0].description}</h2>

      <div className="flex items-center gap-3">
        <button className="border py-1 px-[10px] rounded-3xl bg-green text-white" onClick={PlusNumber}>+</button>
        <p>{count}</p>
        <button className="border py-1 px-3 rounded-3xl bg-green text-white" onClick={MinusNumber}>-</button>
        <Button title={'Buy NOW'}/>
        <Button className={' border rounded text-green border-x-green'} title={'Add to cart'}/>
        <div className="border rounded-3xl cursor-pointer  text-white">
        <Checkbox   icon={<MdFavoriteBorder />} checkedIcon={<MdFavoriteBorder />} />
        </div>
      </div>

      <p>Categories: {productShop[0].category}</p>




      <div className="flex gap-2 items-center">
        <p>Share this products:</p>
      {Social.map((el, index)=>(
                          <div key={index} className='cursor-pointer'>{el}</div>
                    ))}
      </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Shop