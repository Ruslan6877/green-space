import React from 'react'
import Input from './Input'
import Header from './page/Header'
import Would from './page/Would'
import Footer from './page/Footer'
import { Breadcrumbs, Link, Typography } from '@mui/material'



function Login() {
  return (
    <div className='container mx-auto'>
        <Header/>
        <Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" href="/">
    Home
  </Link>
  
  <Typography className='cursor-pointer' color="text.primary">Login</Typography>
</Breadcrumbs>
        <div className="flex items-center gap-5">
            
                   <Input label={'First Name'}  required={'true'}/>
                   <Input label={'Last Name'}  required={'true'}/>
        </div>

<div className="flex items-center gap-5">
    
           <Input label={'Country / Region'} placeholder={'Select a country / region'}  required={'true'}/>
           <Input label={'Town / City'}  required={'true'}/>
</div>

<div className="flex items-center gap-5">
    
           <Input label={'Street Address'} placeholder={'House number and street name'}  required={'true'}/>
           <Input placeholder={'Appartment, suite, unit, etc. (optional)'} className='border w-[350px] mt-6 p-1'/>
</div>

<div className="flex items-center gap-5">
    
           <Input label={'State'}  placeholder={'Select a state'} required={'true'}/>
           <Input label={'Zip'}  required={'true'}/>
</div>


       <Input label={'Email address'}  required={'true'}/>
       
       <form className='flex gap-2 my-3' >
       <input type="checkbox" className='border-lime-700'/>
        <label >Ship to a different address?</label>
       </form>
       <Input label={'Order notes (optional)'} className='py-10 w-[350px] border' />
        <Would/>
        <Footer/>
    </div>
  )
}

export default Login