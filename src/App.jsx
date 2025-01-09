import { useState } from 'react'

import './App.css'
//import Default from "./components/Default.jsx"
import Logo from './components/Home/Logo.jsx'
import Body from './components/Home/Body.jsx'
import Footer from './components/Home/Footer.jsx'

function App() {

  return (
    <>
      <Logo />
      <Body></Body>
      <Footer />
    </>
  )
}

export default App
