import { useState } from 'react'
import './App.css'
import Navbar from './components/nav/Nav'
import Header from './components/header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Navbar />
    </>
  )
}

export default App
