import "./Counter.css" ; 
import plus from "../../assets/icon-plus.svg" ; 
import minus from "../../assets/icon-minus.svg" ; 

import { useState } from "react";


function Counter () { 
  const [count , setCount] = useState(0) ; 


  function Add () {
    let newValue = count +1 ; 
    setCount(newValue) ; 
  }

  function Muins (){ 
    let newValue = count- 1; 
       setCount (newValue) ; 
      } 

 

  return (
    <div id="counter">
<button  id="btn" onClick={Add}> <img src={plus}/> </button>
<label id="edit">{count} </label>
<button  id="btn" onClick={Muins}> <img src={minus}/> </button>

    </div>
  ) ; 

}

export default Counter ; 