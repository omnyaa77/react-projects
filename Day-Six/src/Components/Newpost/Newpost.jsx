import { useState } from "react";

function Newpost () { 
    const [inputvalue , setInputvalue] = useState ("") ;

    function handleSendPost () {
        console.log (inputvalue) ; 
     setInputvalue
    }

    function handleOnChange (event) {
        setInputvalue(event.target.value) ; 
    }
    return (
        <div> 
            <input value={inputvalue} onChange={handleOnChange}></input>
            <button onClick={handleOnChange}>  send </button>
        </div>
    )
}
export default Newpost