import { useState } from "react";
import mockFetch from "./utils/mockFetch";

function App() {
  const [count, setCount] = useState(0);

  const handleCount = async () => {
    setCount(prev => prev + 1);
    try {
      await mockFetch();
    } catch (err) {
      setCount(prev => prev - 1);
      console.log(err);
    }
  };
  return (
    <div>
      <button onClick={handleCount}>like {count} times</button>
    </div>
  );
}

export default App;
