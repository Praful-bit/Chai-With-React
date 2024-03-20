import "./App.css";
import { useState } from "react";
import Card from "./Componenets/Card";

function App() {
  
  // let myObj ={
  //   userName: 'Praful',
  //   age:21
  // }

  // let newArray = [
  //   1,2,3
  // ]

  let [Counter, setCounter] = useState(15);

  const addValue = () => {
    if (Counter < 20) {
      setCounter(Counter + 1);
      console.log("clicked", Counter);
    }
  };

  const removeValue = () => {
    if (Counter > 0) {
      setCounter(Counter - 1);
      console.log("clicked", Counter);
    }
  };

  return (
    <>
      <h1 className="flex text-center justify-center bg-green-400 p-4 rounded-lg ">
        Chai aur react
      </h1>
      <h2>Counter value: {Counter}</h2>

      <button
        onClick={addValue}
        className="pb-2 mb-3 mt-3 bg-slate-500 text-black rounded-full ring ring-black"
      >
        Add value{Counter}
      </button>
      <br />
      <hr />
      <button
        onClick={removeValue}
        className="pb-2 mb-3 mt-3 bg-slate-300 text-black rounded-full ring ring-black"
      >
        Remove value{Counter}
      </button>

      <Card userName="chaiaurcode" btnText="Click me" />
      <Card userName="Praful" btnText="Visit me" />
    </>
  );
}

export default App;
