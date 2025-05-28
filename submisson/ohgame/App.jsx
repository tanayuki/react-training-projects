import { useState } from 'react'
import From from './Form';

function App() {

  const [num, setNum] = useState(10);

  const incrementNum = () => {
    setNum((prev) => prev + 1);
  }

  const minusNum = () => {
    setNum((prev) => prev - 1)
  }

  return (
    <>
      <From />
    </>
  )
}

export default App;