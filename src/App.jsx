import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Download from './Components/Dowload'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Download/>
    </>
  )
}

export default App