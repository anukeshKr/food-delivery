  import React, { useState } from 'react'
  import Navbar from './components/navbar/Navbar'
  import { Route, Routes } from 'react-router-dom'
  import Home from './pages/home/Home'
  import Cart from './pages/cart/Cart'
  import Placeorder from './pages/placeorder/Placeorder'
  import Footer1 from './components/footer/Footer1'
  import Loginpopup from './components/loginpopup/Loginpopup'
  import Verify from './pages/verfify/Verify'
  import MyOrders from './pages/myOrders/MyOrders'
//Root Component
  const App = () => {
    const[showLogin,setShowLogin]=useState(false)
    return (
      <>
      {showLogin?<Loginpopup setShowLogin={setShowLogin}/>:<></>}
        <div className='w-[85%] mx-auto'>
          <Navbar setShowLogin={setShowLogin}/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/order' element={<Placeorder/>}/>
            <Route path='/verify' element={<Verify/>}/>
            <Route path='/myorders' element={<MyOrders/>}/>
          </Routes>
        </div>
        <Footer1 />
      </>

    )
  }

  export default App