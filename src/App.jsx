import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import Loginpopup from './Components/Loginpopup/Loginpopup'

function App() {

  const [showLogin,setShowLogin] = useState(false);


  return (
    <>
    {
      showLogin ? <Loginpopup showLogin={showLogin} setShowLogin={setShowLogin}/> : <></>
    }
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} showLogin={showLogin}/>
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/order' element={<PlaceOrder/>} />
      </Routes>
    </div>

    <Footer/>
    </>
  )
}

export default App
