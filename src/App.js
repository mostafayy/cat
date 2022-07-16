import React from 'react'
import Home from './components/Home'
import './App.css'
import Clients from './components/Clients'
import CreateAndSell from './components/CreateAndAsell'
import Choose from './components/Choose'
import MarketPlace from './components/MarketPlace'
import Subscribe from './components/Subscribr'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
function App() {
  return (
    <div>
      <ScrollToTop/>
      <Home/>
      <Clients/>
      <CreateAndSell/>
      <Choose/>
      <MarketPlace/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default App