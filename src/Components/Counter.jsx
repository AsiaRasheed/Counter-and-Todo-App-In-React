import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const mystyle = {
    color: "white",
    backgroundColor: "gray",
    textAlign: "center",
    width: "700px",
    border: "3px solid black",
    marginLeft: "360px",
    marginTop: "50px",
    borderRadius: "10px",
  };
  return (
    <div>
      <div>
        <h1
          style={{
            color: "black",
            fontWeight: "bolder",
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          Counter App
        </h1>
      </div>
      <div style={mystyle}>
        <button
          style={{ margin: "30px", fontWeight: "bolder" }}
          onClick={() => setCount(count + 1)}
          type="button"
          class="btn btn-primary"
        >
          Increment
        </button>

        <button
          style={{ margin: "30px", fontWeight: "bolder" }}
          onClick={() => setCount(count - 1)}
          type="button"
          class="btn btn-success"
        >
          Decrement
        </button>

        <button
          style={{ margin: "30px", color: "white", fontWeight: "bolder" }}
          onClick={() => setCount(0)}
          type="button"
          class="btn btn-dark"
        >
          Reset
        </button>

        <h1>{count}</h1>
      </div>
    </div>
  );
}

export default Counter;
