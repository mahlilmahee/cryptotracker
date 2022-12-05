import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CryptoTable from './Components/CryptoTable'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import CoinDetail from './Pages/CoinDetail';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>

        <Route path='/'exact element={<CryptoTable/>}/>
        <Route path='/home'exact element={<CryptoTable/>}/>
        <Route path='/home/:id'exact element={<CoinDetail/>}/>
         
       
      </Routes>
     {/* <h2>Welcome here looking to make crypto tracker please wait for some time </h2> */}
     {/* <CryptoTable></CryptoTable> */}
    </div>
  )
}

export default App
