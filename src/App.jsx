import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Default from "./components/Default.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Default />
    </>
  )
}

export default App
