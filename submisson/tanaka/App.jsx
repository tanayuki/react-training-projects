import { useState } from 'react'
import Hello from './Hello';
import RandomBackgroundButton from './RandomBackgroundButton';

function App() {

  const [num, setNum] = useState(0);

  const incrementNum = () => {
    setNum((prev) => prev + 1);
  }

  const decrementNum = () => {
    setNum((prev) => prev - 1);
  }

  return (
    <>
      <Hello />
      <h1>{num}</h1>
      <button onClick={incrementNum}>+</button>
      <button onClick={decrementNum}>-</button>
      <RandomBackgroundButton />
    </>
  )
}

export default App
