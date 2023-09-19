import { useState } from "react";

function StateMgt() {
  let [marks, setMarks] = useState([10, 20, 30, 40, 50]);

  const increment = (index) => {
    let copyMarks = [...marks]; // copy [10, 20, 30, 40, 50]
    copyMarks[index] = copyMarks[index] +1;//[11, 20, 30, 40, 50]
    setMarks(copyMarks);//[11, 20, 30, 40, 50]
  };


  const decrement = (index) => {
    let copyMarks = [...marks]; // copy [10, 20, 30, 40, 50]
    copyMarks[index] = copyMarks[index] -1;//[9, 20, 30, 40, 50]
    setMarks(copyMarks);//[9, 20, 30, 40, 50]
  
  };


  
  return (
    <>
      <h1>Marks List</h1>
      <ul>
        {marks.map((m, i) => (
          <li>
            <button onClick={() => increment(i)}> + </button>
            {m}
            <button onClick={() =>decrement(i)}> - </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default StateMgt;

//--------------------2-----------------

// // let mobile = {id: 1, title :"Mobile charger", price: 100,quantity:7}

// function StateMgt(){

//     let [mobile, setMobile] = useState({id: 1, title :"Mobile charger", price: 100,quantity:7});

//     const incrementP = () =>{
//        setMobile({...mobile, price:mobile.price+1});// update state

//     }
//     const incrementQ = () =>{
//        setMobile({...mobile,quantity:mobile.quantity+1});// update state

//     }
//     return(
//         <>
// <h1>ID = {mobile.id}</h1>
// <h1>title = {mobile.title}</h1>
// <h1>price = RS. {mobile.price}</h1>
// <h1>Quantity = {mobile.quantity}</h1>

// <button onClick={incrementP}>Increment price</button>
// <button onClick={incrementQ}>Increment quantity</button>

// </>
//     )
// }

// export default StateMgt

//-----------------------1-------------------

// import { useState } from "react";
// // render (DOM) --state  (efficient)

// // import { useState } from "react";

// function StateMgt(){
//     // const counter=1;// state variable
//     let [counter, setCounter] = useState(1);

//     const increment = () =>{
//         //  counter=counter+1;//update state
//         setCounter(counter+1);
//     }
//     return(
//         <>
// <h1>counter = {counter}</h1>
// <button onClick={increment}>Increment</button>
// </>
//     )
// }

// export default StateMgt
