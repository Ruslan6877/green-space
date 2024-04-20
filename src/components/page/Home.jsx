import React from 'react'
import Header from './Header'
import Welcome from './Welcome'
import Categoriyes from './Categoriyes'
import Card from './Card'
import Find from './Find'
import Blogs from './Blogs'
import Would from './Would'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Home({data}) {
  return (
    <>
    <Header/>
    <Welcome/>
    <div className='container  mx-auto  my-5 gap-[200px] xl:flex '>
    <Categoriyes/>
    <Link to={`/shop`}><Card data = {data} /></Link>
    </div>
    <Find/>
    <Blogs/>
    <Would/>
    <Footer/>
    </>
  )
}

export default Home