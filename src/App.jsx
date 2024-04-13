import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom';
import Header from './components/page/Header';
import Footer from './components/page/Footer';
import Card from './components/page/Card';
import Would from './components/page/Would';
import Welcome from './components/page/Welcome';

import Categoriyes from './components/page/Categoriyes';
import Blogs from './components/page/Blogs';
import Find from './components/page/Find';


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Welcome/>
    <div className='container  mx-auto  my-5 gap-[200px] xl:flex '>
    <Categoriyes/>
    <Card />
    </div>
    <Find/>
    <Blogs/>
    <Would/>
    <Footer/>
    </BrowserRouter>

    </>
  )
}

export default App