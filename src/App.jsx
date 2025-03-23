import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sample from './ontap/layout/Sample'
import ExampleUseState from './ontap/hooks/ExampleUseState'
import ExampleUseRef from './ontap/hooks/ExampleUseRef'
import ExampleUseRefGetValueInput from './ontap/hooks/ExampleUseRefGetValueInput'
import ExampleUseRefFocus from './ontap/hooks/ExampleUseRefFocus'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* <Sample></Sample> */}
        {/* <ExampleUseState></ExampleUseState> */}
        {/* <ExampleUseRef></ExampleUseRef> */}
        {/* <ExampleUseRefGetValueInput></ExampleUseRefGetValueInput> */}
        <ExampleUseRefFocus></ExampleUseRefFocus>
    </>
  )
}

export default App
