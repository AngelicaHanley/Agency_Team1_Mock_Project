import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="w-full h-screen p-5">
      <img src="images/subway_logo_white.png" alt="Subway Logo" />
      {/*<img src="images/Footlong_Cookie.png" alt="Footlong Cookie"
        className="w-full h-auto"/>*/}

      <img src="images/SubwayCookieBittenwHint.gif" alt="Footlong Cookie"
              className="w-full h-auto"/>

      <h1>Subway - Agency Team 1</h1>

      <div className="button">
        <button onClick={() => setCount((count) => count + 1)} className="text-black">
          Count: {count}
        </button>
  
      </div>

      <p>
        Rest of website here!
      </p>
      </div>
    </>
  )
}


function Media() {

  return (
    <>
    
 

    </>
  )
}

export default App
