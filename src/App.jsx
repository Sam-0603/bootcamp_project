import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Welcome to Brain Rush!</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )
}

export default App
