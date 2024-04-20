

// import { useEffect, useState } from "react";

import { Checkbox } from "@mui/material"
import { MdFavoriteBorder } from "react-icons/md"
import { Link } from "react-router-dom"





function Card({data}) {
   

  return (
    <div className=" justify-end container  mx-auto  ">
      
        <div className="flex flex-wrap xl:m-0 sm:ml-24 ml:mx-[50px] ">
        {data.map( (item, index) =>(
          <Link to={`/shop/${item.id}`} key={index} className="w-[258px] mb-7">
            <img className="w-[158px] h-[200px]" src={item.image} alt="fd" />
            <Checkbox   icon={<MdFavoriteBorder />} checkedIcon={<MdFavoriteBorder />} />
          <h1 className="text-sm text-text_bg font-normal" >{item.category}</h1>
          <p className="text-green font-semibold text-xl ">${item.price}</p>
          
          </Link>
        ))}
        </div>
        
    </div>
  )
}

export default Card