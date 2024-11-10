import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import First from './components/First'
import { Secon, Test } from './components/Secon'
import Layout from './components/usercomponents/Layout'
import Homepage from './pages/Homepage'
import Productpage from './pages/Productpage'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Register from './pages/Register'
import Show from './context/Show'
import CartITtem from './redux/CartITtem'

const Myroute = () => {
  return (
    <>
    <Router>
        <Routes>
            {/* <Route path='/' element={<First/>} />
            <Route path='/second' element={<Secon/>}/>
            <Route path='/test' element={<Test/>} /> */}
            <Route path='/' element={<Layout/>}>
            <Route index element={<Homepage/>}/>
            <Route path='product' element={<Productpage/>}/>
            <Route path='productdetail/:productId' element={<ProductDetail/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='context' element={<Show/>}/>
            <Route path='redux/cart' element={<CartITtem/>}/>

            </Route>
        </Routes>
    </Router>
    </>
  )
}

export default Myroute