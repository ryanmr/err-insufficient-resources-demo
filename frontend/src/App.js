import React, { useState } from "react";
import axios from "axios";

async function spool(setCounter) {
  Array(8000)
    .fill(null)
    .map((_, i) => {
      axios
        .get(`http://localhost:9487/large?r=${Math.random()}&i=${i}`)
        .then(response => {
          setCounter(p => p + 1);
        });
    });
}

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1>{counter}</h1>
      <hr />
      <button onClick={e => spool(setCounter)}>spool</button>
    </div>
  );
}

export default App;
