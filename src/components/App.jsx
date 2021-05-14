import React, { useState } from "react";

// by using the useState to handle the event  is though lengthy but
//helpful in large architectures

function gone() {
  document.getElementById("btn").style.backgroundColor = "white";
}
function back() {
  document.getElementById("btn").style.backgroundColor = "black";
}

function App() {
  const [isMouseOver, setMouseOver] = useState(false);
  function handleMouseOver() {
    return setMouseOver(true);
  }
  function handleMouseOut() {
    return setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        id="btn"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
