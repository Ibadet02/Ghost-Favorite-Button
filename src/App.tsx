import { useState } from "react"


function App() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  }
  return <div>
    <button onClick={handleCount}>like {count} times</button>
  </div>
}

export default App
