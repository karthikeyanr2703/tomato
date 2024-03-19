import { useState } from 'react'
import Navigation from './components/Navigation'

import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation/>
      <Header/>


    </div>
  )
}

export default App
