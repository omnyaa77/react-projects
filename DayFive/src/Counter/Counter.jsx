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
    <div>
<button onClick={Add}> + </button>
<label>{count} </label>
<button onClick={Muins}> - </button>

    </div>
  ) ; 

}

export default Counter ; 