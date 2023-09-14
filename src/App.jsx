import { useState } from 'react'
import './App.css'
import './component/Navbar.jsx'
import Navbar from './component/Navbar.jsx'
import {Link} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <div className="textheader">
          <h1>generation thailand <br />
          home app </h1>
          
      </div><div className="button">
                <button><Link to='/normal'>User home</Link></button>
              <button><Link to='/owner'>Admin home</Link></button>
          </div>


      
      
    </>
  )
}

export default App
