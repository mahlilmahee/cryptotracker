import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CryptoTable from './Components/CryptoTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <h2>Welcome here looking to make crypto tracker please wait for some time </h2>
     <CryptoTable></CryptoTable>
    </div>
  )
}

export default App
