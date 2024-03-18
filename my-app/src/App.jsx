import { useState } from "react";
import Chai from "./Chai"

function App() {
let [Counter,setCounter] = useState(0)

const addValue =()=>{
  if(Counter < 25){
  setCounter(Counter+1)
  console.log('clicked',Counter)
}
}
const removeValue =()=>{
  if(Counter > 0){
  setCounter(Counter-1)
  console.log('clicked', Counter)
  }
}
  const username = 'Common Operating Machine Purposely Use For Technology And Education Research thats call COMPUTER !'
  return (
    <>
      <Chai />
      <h1>{ username }</h1>
      <button onClick={addValue}>ADD Value {Counter}</button>
      <br></br>
      <hr />
      <button onClick={removeValue}>Remove Value {Counter}</button>
    </>
  );
}

export default App
