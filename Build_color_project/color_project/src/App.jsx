import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-50 px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "Pink" }}
            onClick={() => setColor("Pink")}
          >
            Pink
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "Blue" }}
            onClick={() => setColor("Blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "Yellow" }}
            onClick={() => setColor("Yellow")}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "Green" }}
            onClick={() => setColor("Green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "Black" }}
            onClick={() => setColor("Black")}
          >
            Black
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "White" }}
            onClick={() => setColor("White")}
          >
            White
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "Orange" }}
            onClick={() => setColor("Orange")}
          >
            Orange
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "Gray" }}
            onClick={() => setColor("Gray")}
          >
            Gray
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "Purple" }}
            onClick={() => setColor("Purple")}
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
