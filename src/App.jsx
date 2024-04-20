import { BrowserRouter, Link, Routes , Route} from 'react-router-dom';
import Home from './components/page/Home';
import Shop from './components/Shop'
import Login from './components/Login';
import { useEffect, useState } from 'react';




function App() {
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
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/'  element={<Home data = {data}/>}></Route>
      <Route path='/shop/:id' element={<Shop data = {data}/>}></Route>
      <Route path='/login' element={<Login />}></Route>
    </Routes>
    
    </BrowserRouter>

    </>
  )
}

export default App