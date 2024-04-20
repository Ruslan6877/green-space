
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Header from "./page/Header"
import Footer from "./page/Footer"

function Shop({data}) {
  const {id} = useParams()
  const productShop = data.filter((item) => item.id == id)
  // const productCategory = data.filter((item) => item.category = id)
  return (
    <div>
      <Header/>
      <img className="w-72" src={productShop[0].image} alt="image" />
      {/* <h2>{productCategory[0].category}</h2> */}
      <Footer/>
    </div>
  )
}

export default Shop