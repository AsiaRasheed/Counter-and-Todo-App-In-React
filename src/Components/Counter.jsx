import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const mystyle = {
    color: "white",
    backgroundColor: "#ffffff",
    textAlign: "center",
    width: "50vw",
    marginLeft: "360px",
    marginTop: "50px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.4)",

  };
  return (
    <div>
      
      <div style={mystyle}>
      
        <h1
          style={{
            color: "black",
            fontWeight: "bolder",
            textAlign: "center",
            margin: '10px !important',
                      }}
        >
          Counter App
        </h1>
    
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

        <h1 style={{color:"black"}}>{count}</h1>
      </div>
    </div>
  );
}

export default Counter;
