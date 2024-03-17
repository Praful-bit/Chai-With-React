import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  let [Counter,setCounter] = useState(15)

  const addValue = () => {
    setCounter(Counter + 1)
    console.log("clicked", Counter);
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {Counter}</h2>

      <button onClick={addValue}>Add value{Counter}</button>
      <br />
      <hr />
      <button>Remove value{Counter}</button>
      <p>footer:- {Counter}</p>
    </>
  );
}

export default App;
