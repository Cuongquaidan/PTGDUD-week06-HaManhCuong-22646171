import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sample from './ontap/layout/Sample'
import ExampleUseState from './ontap/hooks/ExampleUseState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* <Sample></Sample> */}
        <ExampleUseState></ExampleUseState>
    </>
  )
}

export default App
