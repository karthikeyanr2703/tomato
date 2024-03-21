import { useState } from 'react'
import Navigation from './components/Navigation/Navigation'

import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'

function App() {
  const [count, setCount] = useState(0)
  const [category,setCategory] = useState("All")

  return (
    <div>
      <Navigation/>
      <Header/>
      <Menu category={category} setCategory={setCategory}/>


    </div>
  )
}

export default App
