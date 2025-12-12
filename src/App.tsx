import { useState } from 'react'
import { TextInput } from './components/TextInput/TextInput'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TextInput onTextChange={(text) => setCount(text.length)} />
     <div className="mt-4 text-center text-gray-700">
       Character Count: {count}
     </div>
    </>
  )
}

export default App
