

// import { useEffect, useState } from "react";

import { data } from "autoprefixer"
import { useEffect, useState } from "react"



function Card() {
    const [data, setData] = useState([])

      useEffect(()=>{
        const fetchData = async() =>{
          fetch("https://fakestoreapi.com/products")
          .then((data) => data.json())
          .then((json) => setData(json))
        }
        fetchData()
      } , [])

  return (
    <div className=" justify-end container  mx-auto  ">
      <header>
        <nav className="w-3/5 flex justify-between mx-32 my-5">
          <ul className="flex gap-4">
            <li>All Plants</li>
            <li>New Arrivals</li>
            <li>Sale</li>
          </ul>
          <ul className="flex gap-1">
            <li>Short by:</li>
            <li>Default sorting</li>
          </ul>
        </nav>
      </header>
        <div className="flex flex-wrap xl:m-0 sm:ml-24">
        {data.map( (item, index) =>(
          <div key={index} className="w-[258px] ml-[20px]">
            <img className="w-[158px] h-[200px]" src={item.image} alt="fd" />
          <h1 className="text-sm text-text_bg font-normal" >{item.category}</h1>
          <p className="text-green font-semibold text-xl">${item.price}</p>
          </div>
        ))}
        </div>
        
    </div>
  )
}

export default Card