import { useRef, useState } from "react";
import mockFetch from "./utils/mockFetch";

function App() {
  const [liked, setLiked] = useState(false);
  const lastSuccesState = useRef(false);
  const lastRequestId = useRef(0);

  const toggleLiked = async () => {
    lastRequestId.current++;
    const currentId = lastRequestId.current;

    let nextState;
    setLiked((prev) => {
      nextState = !prev;

      return nextState;
    });

    try {
      await mockFetch();

      lastSuccesState.current = nextState!;
    } catch (err) {
      if (currentId === lastRequestId.current) {
        setLiked(lastSuccesState.current);
      }
      console.log(err);
    }
  };
  return (
    <div>
      <button onClick={toggleLiked}>{liked ? "Liked" : "Not Liked"}</button>
    </div>
  );
}

export default App;
